
const Seguro = artifacts.require("Seguro");


module.exports = function(deployer) {
  ///deployer.deploy(Ownable);
  ///deployer.deploy(Contratacion);
  ///deployer.deploy(Transacciones);
  ///deployer.deploy(Muestra);
  ///deployer.deploy(Siniestros);
  deployer.deploy(Seguro);
};