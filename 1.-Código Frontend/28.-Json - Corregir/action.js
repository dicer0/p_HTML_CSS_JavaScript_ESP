function json(){
  var amigos = [
    {"name": "Juan", "lastName": "Perez", "sexo": "H"},
    {"name" : "Luis", "lastName": "Sánchez", "sexo": "H"},
    {"name" : "María", "lastName": "Lopez", "sexo": "M"}
  ];
  /*Aqui dentro de cada par de llaves {} hay dentro un objeto del json*/

  // console.log(amigos.name);
  /*Aqui estoy accediendo con la linea de codigo amigos.name a el name del Json
  llamado amigos y agarrando el atributo name*/

  for (var i = 0; i < amigos.length; i++) {
    if (amigos[i].sexo === "M") {
      /*Esto es que es igual en magnitud y en tipo de dato, el tro osea == no
      toma en cuenta el tipo de dato*/
      console.log(amigos[i].name + amigos[i].lastName);
    }
  }
}

function zonas(){
  var places1 = '';
  var places2 = '';
  var places3 = '';
  var numColum = 3;
  var zones= [
    { "id":"0001","city":"CDMX","name":"Álvaro Obregón","status":"ON"},
    { "id":"0002","city":"CDMX","name":"Atizapán de Zaragoza","status":"ON"},
    { "id":"0003","city":"CDMX","name":"Azcapotzalco","status":"ON"},
    { "id":"0004","city":"CDMX","name":"Benito Juárez","status":"ON"},
    { "id":"0005","city":"CDMX","name":"Chimalhuacán","status":"OFF"},
    { "id":"0006","city":"CDMX","name":"Ciudad Nezahualcóyotl","status":"ON"},
    { "id":"0007","city":"CDMX","name":"Coacalco","status":"ON"},
    { "id":"0008","city":"CDMX","name":"Coyoacán","status":"OFF"},
    { "id":"0009","city":"CDMX","name":"Cuajimalpa","status":"ON"},
    { "id":"0010","city":"CDMX","name":"Cuauhtémoc","status":"ON"},
    { "id":"0011","city":"CDMX","name":"Cuautitlán","status":"ON"},
    { "id":"0013","city":"CDMX","name":"Ecatepec de Morelos","status":"ON"},
    { "id":"0014","city":"CDMX","name":"Gustavo A. Madero","status":"ON"},
    { "id":"0015","city":"CDMX","name":"Huixquilucan","status":"OFF"},
    { "id":"0016","city":"CDMX","name":"Iztacalco","status":"ON"},
    { "id":"0017","city":"CDMX","name":"Iztapalapa","status":"ON"},
    { "id":"0018","city":"CDMX","name":"Magdalena Contreras","status":"ON"},
    { "id":"0019","city":"CDMX","name":"Miguel Hidalgo","status":"ON"},
    { "id":"0020","city":"CDMX","name":"Naucalpan","status":"ON"},
    { "id":"0021","city":"CDMX","name":"Tláhuac","status":"ON"},
    { "id":"0022","city":"CDMX","name":"Tlalnepantla","status":"ON"},
    { "id":"0023","city":"CDMX","name":"Tlalpan Norte","status":"ON"},
    { "id":"0024","city":"CDMX","name":"Tultitlan","status":"ON"},
    { "id":"0025","city":"CDMX","name":"Venustiano Carranza","status":"ON"},
    { "id":"0026","city":"CDMX","name":"Xochimilco","status":"ON"},
    { "id":"0027","city":"GDL","name":"Alcalde Barranquitas","status":"ON"},
    { "id":"0028","city":"GDL","name":"Americana","status":"ON"},
    { "id":"0029","city":"GDL","name":"Arcos Guadalupe","status":"ON"},
    { "id":"0030","city":"GDL","name":"Arcos Vallarta","status":"ON"},
    { "id":"0031","city":"GDL","name":"Atemajac del valle","status":"ON"},
    { "id":"0032","city":"GDL","name":"Atlas","status":"ON"},
    { "id":"0033","city":"GDL","name":"Bosques de la victoria","status":"ON"},
    { "id":"0034","city":"GDL","name":"Chapultepec Country","status":"ON"},
    { "id":"0035","city":"GDL","name":"Colomos Providencia","status":"OFF"},
    { "id":"0036","city":"GDL","name":"Cuidad de los niños","status":"ON"},
    { "id":"0037","city":"GDL","name":"Cuidad del sol","status":"ON"},
    { "id":"0038","city":"GDL","name":"Ferrocarril","status":"ON"},
    { "id":"0039","city":"GDL","name":"Hermosa Provincia","status":"ON"},
    { "id":"0040","city":"GDL","name":"Jardines Alcalde","status":"OFF"},
    { "id":"0041","city":"GDL","name":"Jardines de San Ignacio","status":"ON"},
    { "id":"0042","city":"GDL","name":"Jardines del Bosque","status":"ON"},
    { "id":"0043","city":"GDL","name":"Jardines del Sol","status":"ON"},
    { "id":"0044","city":"GDL","name":"Jardines Universidad","status":"ON"},
    { "id":"0045","city":"GDL","name":"Jardines de la Paz","status":"OFF"},
    { "id":"0046","city":"GDL","name":"Jardines de Santa Maria","status":"ON"},
    { "id":"0047","city":"GDL","name":"La calma","status":"ON"},
    { "id":"0048","city":"GDL","name":"Ladron de Guevara","status":"ON"},
    { "id":"0049","city":"GDL","name":"Las Aguilas","status":"ON"},
    { "id":"0050","city":"GDL","name":"Las fuentes","status":"ON"},
    { "id":"0051","city":"GDL","name":"Lomas de Paradero","status":"ON"},
    { "id":"0052","city":"GDL","name":"Lomas de San Pedro","status":"ON"},
    { "id":"0053","city":"GDL","name":"Lomas de Tlaquepaque","status":"ON"},
    { "id":"0054","city":"GDL","name":"Mexicaltzingo","status":"OFF"},
    { "id":"0055","city":"GDL","name":"Moderna","status":"ON"},
    { "id":"0056","city":"GDL","name":"Olimpica","status":"ON"},
    { "id":"0057","city":"GDL","name":"Patria Universidad","status":"ON"},
    { "id":"0058","city":"GDL","name":"Prados Providencia","status":"ON"},
    { "id":"0059","city":"GDL","name":"Prados Tepeyac","status":"ON"},
    { "id":"0060","city":"GDL","name":"Puerta del Bosque","status":"ON"},
    { "id":"0061","city":"GDL","name":"Puerta Plata","status":"ON"},
    { "id":"0062","city":"GDL","name":"Real San Javier","status":"OFF"},
    { "id":"0063","city":"GDL","name":"Residencial Chapalita","status":"ON"},
    { "id":"0064","city":"GDL","name":"Rinconada del sol","status":"ON"},
    { "id":"0065","city":"GDL","name":"Rinconada Tabachines","status":"OFF"},
    { "id":"0066","city":"GDL","name":"San Elias","status":"ON"},
    { "id":"0067","city":"GDL","name":"San Isidro Oblatos","status":"ON"},
    { "id":"0068","city":"GDL","name":"Valle del Alamo","status":"ON"}
  ];

  var a = parseInt (zones.length/numColum, 10);
  var b = parseInt (2*(zones.length/ numColum), 10);
  var c = parseInt (zones.length+1, numColum);

  for (var i = 0; i < a; i++) {
    for (var i = a; i < b; i++) {
      for (var i = b; i < c; i++) {
        if (i==b) {
          places += "<div class='col-md-4'" + (12/numColum) + ">" +
          "<h1>" + zones[i].name + "</h1>";
          document.getElementById('display').innerHTML = places;
        }else {
          places += "<h1>" + zones[i].name + "</h1>" +
          "</div>";
          document.getElementById('display').innerHTML = places;
        }
      }
    }
  }
}