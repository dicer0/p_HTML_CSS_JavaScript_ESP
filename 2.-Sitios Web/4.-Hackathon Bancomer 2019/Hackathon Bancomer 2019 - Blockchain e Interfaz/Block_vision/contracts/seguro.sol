pragma solidity ^0.5.8;

import "./ERC721.sol";

contract Seguro is ERC721 {

    event NewPoliza(uint num_poliza, uint suma_asegurada, uint reserva);
    event Reclamo(uint num_poliza, uint folio, uint suma_asegurada, uint reserva);
    event PagoSiniestro(uint num_poliza, uint suma_asegurada);
    event NoPagoSiniestro(uint num_poliza, uint folio);


    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    address payable private _owner;
    uint tiempo_espera = 15 days;
    uint num_poliza;

    uint prima;

    constructor() public {
        _owner = msg.sender;
        num_poliza = 0;
    }

    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    struct Beneficiario {
        string nombre;
        address address_beneficiario;
    }


    struct Asegurado {
        string nombre;
        string sexo;
        uint edad;
        bool cubierto;
    }

    struct Poliza {
        uint num_poliza;
        Asegurado asegurado;
        Beneficiario beneficiario;
        uint suma_asegurada;
        uint prima;
        uint plazo_seguro;
        uint plazo_primas;
        uint frec_pago_primas;
        string condiciones;
        string procedimientos;
        uint inicio_vigencia;
        uint espera;
        bool pagada;
        uint reserva;
    }

    struct Siniestro {
        bool aceptado;
        bool pagado;
    }

    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    // verifica a la seguradora dueña del contrato
    modifier onlyOwner() {
        require(msg.sender == _owner,"");
        _;
    }

    // verifica al propietario de la poliza
    modifier onlyOwnerOf(uint _num_poliza) {
        require(msg.sender == poliza_propietario[_num_poliza],"");
        _;
    }

    // checa vigencia para poder estar asegurado
    modifier waitPeriod(uint _num_poliza) {
        require(num_poliza_poliza[_num_poliza].inicio_vigencia + num_poliza_poliza[_num_poliza].plazo_seguro > now, "Poliza vencida");
        _;
    }

    modifier paid(uint _num_poliza) {
        require(num_poliza_poliza[_num_poliza].pagada || num_poliza_poliza[_num_poliza].inicio_vigencia + tiempo_espera >= now,
         "No se realizo el pago de prima");
        _;
    }

    modifier approveOnly(uint _num_poliza) {
        require(msg.sender == benefApprovals[_num_poliza],"");
        _;
    }


    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    // id asegurado a numero de poliza
    mapping (uint => uint) aseguradoId_num_poliza;

    //numero de poliza a poliza
    mapping(uint => Poliza)  num_poliza_poliza; //problema con public

    //numero de poliza a direccion de contratante
    mapping (uint => address) public poliza_propietario;

    // numero de poliza a address de beneficiarios
    mapping (uint => address) public benefApprovals;

    // folio de siniestro a numero de poliza
    mapping (uint => uint) public siniestro_num_poliza;


    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    Siniestro[] public siniestros;

    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------


    function prueba() public pure returns(string memory) {
        return "Hola";
    }

    function registro_prima(uint _prima) public returns(uint) {
        return prima = _prima;
    }

    function get_prima() public returns(uint) {
        return prima;
    }


    //lee informacion de api para informacion  de asegurado y beneficiario
    function _crearPoliza(Asegurado memory _asegurado, Beneficiario memory _beneficiario,
                          uint _suma_asegurada, uint _prima, uint _reserva) internal {
        num_poliza++;
        Poliza memory temporal = Poliza( num_poliza, _asegurado, _beneficiario, _suma_asegurada, _prima,
         uint(365 days), 1, 1, "", "", now, now + tiempo_espera, false, _reserva);
        num_poliza_poliza[num_poliza] = temporal;
        emit NewPoliza(num_poliza, _suma_asegurada, _reserva);
    }

    // onlyOwner
    function creaPoliza(string memory _asegurado,string memory _sexo, uint _edad,
                        string memory _beneficiario, address _address_benef,
                        uint _suma_asegurada, uint prima, uint reserva) public {
        Asegurado memory asegurado = Asegurado(_asegurado, _sexo, _edad, false);
        Beneficiario memory beneficiario = Beneficiario(_beneficiario, _address_benef);
        _crearPoliza(asegurado, beneficiario, _suma_asegurada, prima, reserva);
    }

    function owner() public view returns(address) {
        return _owner;
    }

    // transfiere el balance a la aseguradora dueña del contrato onlyOwner
    function withdraw() external payable {
        address payable _owner = address(uint160(owner()));
        _owner.transfer(address(this).balance);
    }


        // transfiere el balance a la aseguradora dueña del contrato onlyOwner
    function withdraw_reserva(uint cantidad) public  payable {
        address payable _owner = address(uint160(owner()));
        _owner.transfer(cantidad);
    }


    // realiza el pago de la prima a la poliza correspondiente y regresa excedente si lo hay
    function asegurame(uint _num_poliza) external payable waitPeriod(_num_poliza) onlyOwnerOf(_num_poliza) {
        require(msg.value >= num_poliza_poliza[_num_poliza].prima,"El pago es insuficiente");
        num_poliza_poliza[_num_poliza].pagada = true;
        msg.sender.transfer(msg.value - num_poliza_poliza[_num_poliza].prima);
        withdraw_reserva(num_poliza_poliza[_num_poliza].prima - num_poliza_poliza[_num_poliza].reserva);
    }

    // muestra el dueño de la poliza
    function ownerOf(uint256 _num_poliza) external view returns (address) {
        return poliza_propietario[_num_poliza];
    }

    function mi_suma_asegurada(uint _num_poliza) external view onlyOwnerOf(_num_poliza) returns (uint) {
        return num_poliza_poliza[_num_poliza].suma_asegurada;
    }


    function approve(address _approved, uint256 _num_poliza) external payable onlyOwnerOf(_num_poliza) {
        benefApprovals[_num_poliza] = _approved;
        emit Approval(msg.sender, _approved, _num_poliza);
    }

    function mi_prima(uint _num_poliza) external view onlyOwnerOf(_num_poliza) returns(uint) {
        uint prima = num_poliza_poliza[_num_poliza].prima;
        return prima;
    }

    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    function _crearSiniestro(uint _num_poliza) internal {
        bool aceptado = false;
        bool pagado = false;
        Siniestro memory temporal = Siniestro(aceptado,pagado);
        uint folio = siniestros.push(temporal) - 1;
        siniestro_num_poliza[folio] = _num_poliza;
        uint suma_asegurada = num_poliza_poliza[_num_poliza].suma_asegurada;
        uint reserva = num_poliza_poliza[_num_poliza].reserva;
        emit Reclamo(_num_poliza, folio, suma_asegurada, reserva);
    }


    function reclamo(uint _num_poliza) external paid(_num_poliza) {
        uint suma_asegurada = num_poliza_poliza[_num_poliza].suma_asegurada;
        address ad = num_poliza_poliza[_num_poliza].beneficiario.address_beneficiario;
        address payable ad_pay = address(uint160(ad));
        ad_pay.transfer(suma_asegurada);
        _crearSiniestro(_num_poliza);
    }

    function pago_reclamo(uint folio_siniestro,bool aceptacion) public {
        uint _num_poliza = siniestro_num_poliza[folio_siniestro];
        if (aceptacion) {
            uint suma_asegurada = num_poliza_poliza[_num_poliza].suma_asegurada;
            address ad = num_poliza_poliza[_num_poliza].beneficiario.address_beneficiario;
            address payable ad_pay = address(uint160(ad));
            ad_pay.transfer(suma_asegurada);
            emit PagoSiniestro(_num_poliza, suma_asegurada);
        } else {
            emit NoPagoSiniestro(_num_poliza, folio_siniestro);
        }
    }

    // onlyOwner
    function _setTiempo_espera(uint _tiempo_espera) external {
        tiempo_espera = _tiempo_espera;
    }
}
