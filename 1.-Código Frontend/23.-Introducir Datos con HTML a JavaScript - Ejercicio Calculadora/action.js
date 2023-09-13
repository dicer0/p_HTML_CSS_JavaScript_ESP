function operadores(){
  var opps = " ";
  var oppsFinal = " ";
  var numUno = 0;
  var numDos = 0;
  var resultado = 0;
  var numUnoInt = 0;
  var numDosInt = 0;
  /*Variables inicializadas*/
  opps=document.getElementById('operaciones');
  /*Lee todo el codigo HTML del elemento que tenga Id operaciones, osea mi
  select*/
  oppsFinal = opps.options[operaciones.selectedIndex].value;
  /*Lee todo lo almacenado en mi variable opps y le asigna en especifico el
  value del elemento al que le hayan hecho click a mi variable oppsFinal*/
  numUno = document.getElementById('num1').value;
  numDos = document.getElementById('num2').value;
  /*Obtiene el value de lo que haya introducido en mis inputs*/
  var numUnoInt = parseInt(numUno, 10);
  var numDosInt = parseInt(numDos, 10);
  /*Con esto convierto cualquier valor que me regresen en el value mis inputs
  porque al hacer la suma como el programa mismo se adapta a lo que le pida
  en la suma me hara una concatenacion si lo dejo sin el parseInt pero las
  demas operaciones si las hará bien*/
  if (oppsFinal=="suma"){
    resultado=numUnoInt+numDosInt;
    console.log("El resultado de tu suma es: " + resultado);
  }
  /*If para suma usando numUno, numDos y oppsFinal*/
  if (oppsFinal=="resta"){
    resultado=numUnoInt-numDosInt;
    console.log("El resultado de tu resta es: " + resultado);
  }
  /*If para resta usando numUno, numDos y oppsFinal*/
  if (oppsFinal=="multiplicacion"){
    resultado=numUnoInt*numDosInt;
    console.log("El resultado de tu multiplicación es: " + resultado);
  }
  /*If para multiplicación usando numUno, numDos y oppsFinal*/
  if (oppsFinal=="division"){
    resultado=numUnoInt/numDosInt;
    console.log("El resultado de tu división es: " + resultado);
  }
  /*If para división usando numUno, numDos y oppsFinal*/
  /*Tener un chingo de cuidado con el operador logico igual a porque me puedo
  confundir y poner un simple "=" cuando en realidad tiene que ser "=="*/
}
