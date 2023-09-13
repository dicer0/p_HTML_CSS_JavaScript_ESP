function colorear(){
  var colorR = '';
  var colorV = '';
  var colorA = '';
  var colorFinal = '';
  /*Aqui puedo usar las comillas que yo quiera ya sean dobles " " o simples
  ' ' en lo unico que debo poner atencion es cuando el nombre tal cual tiene
  comillas en donde debo poner unas adentro de otras en el orden que quiera
  ya sea "' '" ó '" "'*/

  /*red = valor.radiobutton1;
  Este es pseudocodigo, osea que no es codigo real solo es para darme una idea
  de que va a hacer mi codigo.
  green = valor.radiobutton2;
  blue = valor.radiobutton3;*/

  colorR = document.getElementById("r1R").checked;
  colorV = document.getElementById("r1G").checked;
  colorA = document.getElementById("r1B").checked;
  /*Con esto jalo el valor true o false de mis radiobuttons y lo asigno a la
  variable que yo quiera*/

  if (colorR == true){
    colorR='ff';
  }else{
    colorR= '00';
    // colorR = parseInt(red, 10);
    /*Esto es para convertir ese 00 que la verdad no se en que valor vaya a
    llegar y tranformarlo a numerico*/
  }

  if (colorV == true){
    colorV='ff';
  }else{
    colorV= '00';
    // colorV = parseInt(red, 10);
  }

  if (colorA == true){
    colorA='ff';
  }else{
    colorA= '00';
    // colorA = parseInt(red, 10);
  }
  /*Todo esto fue para poder asignar un color en forma hexagesimal osea: #rrggbb
  donde rr es rojo, gg es verde y bb es azul y van de 00 a ff*/

  colorFinal = "#" + colorR + colorV + colorA;
  document.getElementById('display').style.background = colorFinal;

}
