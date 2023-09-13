function Datos() {
  var cImpresion = '';
  var zonas = [
       { "id":"0000","estado":"Seleccione Estado"},
       { "id":"0001","estado":"Álvaro Obregón"},
       { "id":"0002","estado":"Atizapán de Zaragoza"},
       { "id":"0003","estado":"Azcapotzalco"},
       { "id":"0004","estado":"Benito Juárez"},
       { "id":"0005","estado":"Chimalhuacán"},
       { "id":"0006","estado":"Ciudad Nezahualcóyotl"},
       { "id":"0007","estado":"Coacalco"},
       { "id":"0008","estado":"Coyoacán"},
       { "id":"0009","estado":"Cuajimalpa"},
       { "id":"0010","estado":"Cuauhtémoc"},
       { "id":"0011","estado":"Cuautitlán"},
       { "id":"0013","estado":"Ecatepec de Morelos"},
       { "id":"0014","estado":"Gustavo A. Madero"},
       { "id":"0015","estado":"Huixquilucan"},
       { "id":"0016","estado":"Iztacalco"},
       { "id":"0017","estado":"Iztapalapa"},
       { "id":"0018","estado":"Magdalena Contreras"},
       { "id":"0019","estado":"Miguel Hidalgo"},
       { "id":"0020","estado":"Naucalpan"},
       { "id":"0021","estado":"Tláhuac"},
       { "id":"0022","estado":"Tlalnepantla"},
       { "id":"0023","estado":"Tlalpan Norte"},
       { "id":"0024","estado":"Tultitlan"},
       { "id":"0025","estado":"Venustiano Carranza"},
       { "id":"0026","estado":"Xochimilco"},
       { "id":"0027","estado":"Alcalde Barranquitas"},
       { "id":"0028","estado":"Americana"},
       { "id":"0029","estado":"Arcos Guadalupe"},
       { "id":"0030","estado":"Arcos Vallarta"},
       { "id":"0031","estado":"Atemajac del valle"},
       { "id":"0032","estado":"Atlas"},
       { "id":"0033","estado":"Bosques de la victoria"},
       { "id":"0034","estado":"Chapultepec Country"},
       { "id":"0035","estado":"Colomos Providencia"},
       { "id":"0036","estado":"Cuidad de los niños"},
       { "id":"0037","estado":"Cuidad del sol"},
       { "id":"0038","estado":"Ferrocarril"},
       { "id":"0039","estado":"Hermosa Provincia"},
       { "id":"0040","estado":"Jardines Alcalde"},
       { "id":"0041","estado":"Jardines de San Ignacio"},
       { "id":"0042","estado":"Jardines del Bosque"},
       { "id":"0043","estado":"Jardines del Sol"},
       { "id":"0044","estado":"Jardines Universidad"},
       { "id":"0045","estado":"Jardnes de la Paz"},
       { "id":"0046","estado":"Jardnes de Santa Maria"},
       { "id":"0047","estado":"La calma"},
       { "id":"0048","estado":"Ladron de Guevara"},
       { "id":"0049","estado":"Las Aguilas"},
       { "id":"0050","estado":"Las fuentes"},
       { "id":"0051","estado":"Lomas de Paradero"},
       { "id":"0052","estado":"Lomas de San Pedro"},
       { "id":"0053","estado":"Lomas de Tlaquepaque"},
       { "id":"0054","estado":"Mexicaltzingo"},
       { "id":"0055","estado":"Moderna"},
       { "id":"0056","estado":"Olimpica"},
       { "id":"0057","estado":"Patria Universidad"},
       { "id":"0058","estado":"Prados Providencia"},
       { "id":"0059","estado":"Prados Tepeyac"},
       { "id":"0060","estado":"Puerta del Bosque"},
       { "id":"0061","estado":"Puerta Plata"},
       { "id":"0062","estado":"Real San Javier"},
       { "id":"0063","estado":"Residencial Chapalita"},
       { "id":"0064","estado":"Rinconada del sol"},
       { "id":"0065","estado":"Rinconada Tabachines"},
       { "id":"0066","estado":"San Elias"},
       { "id":"0067","estado":"San Isidro Oblatos"},
     ];

     var sexo = [
      { "id":"01","name":"Seleccione Sexo"},
      { "id":"02","name":"Femenino"},
      { "id":"03","name":"Masculino"}
    ];

    cImpresion = "<div>" +
     "<input type='text' placeholder='Nombre' id='name'/>" +
     "<br>" +
     "<input type='text' placeholder='Apellido' id='lastname'/>" +
     "<br>" +
     "<input type='number' placeholder='Edad' id='age'/>" +
     "<br>" +
     "<input type='text' placeholder='Ocupación' id='ocupation'/>" +
     "<br>" +
     "</div>" +
    "<select name='ciudades'>";
    for (var i=0; i < zonas.length; i++) {
       cImpresion = cImpresion + "<option value="+ zonas[i].id + ">" + zonas[i].estado+"</option>";
    }
    cImpresion = cImpresion + "</select> <br>";

     cImpresion += "<select name='sexo'>";
     for (var j=0; j < sexo.length; j++) {
        cImpresion = cImpresion + "<option value="+ sexo[j].id + ">" + sexo[j].name+"</option>";
     }
     cImpresion = cImpresion + "</select>";
     document.getElementById("display").innerHTML = cImpresion;
     /*Siempre que yo mande a imprimir a un elemento de mi html, este borrara
     lo que habia impreso en ese mismo elemento anteriormente*/
}

function mandarDatos() {
   
}
