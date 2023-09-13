function nombres(){
  var compas = [];
  var listaCompas = '';
  /*Creación de un array con los valores que se mostrarán en las 
  etiquetas HTML creadas con JavaScript*/
  compas = ["Hugo", "Paco", "Luis", "Pepe Mid", "Paquita Cabeza"];
  for (var i=0; i<compas.length; i++) {
    listaCompas = listaCompas + "<p>" + compas[i] + "</p>";
    document.getElementById('display').innerHTML = listaCompas;
  }
}