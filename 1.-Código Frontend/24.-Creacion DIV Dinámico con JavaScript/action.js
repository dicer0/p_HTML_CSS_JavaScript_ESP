  function datosAgenda(){
  var nombres = [];
  var telefono = [];
  var direccion = [];
  var div = '';
  nombres = ["Juan Pérez", "Luis Sánchez", "Paquita Cabeza"];
  telefono = ["5555 5555", "1234 5678", "9101 1121"];
  direccion = ["Álvaro Obregón 168", "Paseo de la Reforma 123", "Torres de Satepunk 1"];

  for (var i=0; i<3; i++) {
    div += "<div class='divsote'>" +
      "<div id='izq'>" +
        "<div id='img'></div>" +
      "</div>" +
      "<div id='der'>" +
        "<div class='titulos'>Nombre</div>" +
        "<div class='datos'>" + nombres[i] + "</div>" +
        "<div class='titulos'>Teléfono</div>" +
        "<div class='datos'>" + telefono[i] + "</div>" +
        "<div class='titulos'>Dirección</div>" +
        "<div class='datos'>" + direccion[i] + "</div>" +
      "</div>" +
    "</div>";
    /*todo este codigo me lo copiara hacia mi archivo html y lo guardara en el
    div que tiene el id de display*/
    document.getElementById('display').innerHTML = div;
  }
}
