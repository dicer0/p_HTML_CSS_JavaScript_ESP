function saludar(sujeto){
  /*sujeto es el parametro de entrada de la funcion*/
  //console.log("Hola " + sujeto);
  /*Esto se va a comunicar con la consola y va a hacer que lo que haya dentro
  del parentesis de mi método onclick que se encuentra en mi div, cuando llame a
  mi función saludar se imprima en la consola, la cual podemos visualizar con el
  inspector de mi navegador*/
  /*poner el signo + se llama concatenar y es para mezclar texto con otras
  variables, cuando hago esto todos las variables que meta no importando qué
  eran al concatenarlas se convertiran en texto*/

  var respuesta = "Hola " + sujeto;
  return respuesta;
  /* tambien se puede poner como

     return (respuesta);

     o como

     return var respuesta = "Hola " + sujeto;

     o como

     return (var respuesta = "Hola " + sujeto);
  */
  /*Es importante saber que las variables declaradas dentro de una función solo
  existen dentro de esta función, si intento llamar una variable declarada
  dentro de una función desde otra función o simplemente desde fuera de la
  función tendremos un error. Al alcance que puede tener una función se le llama
  scope*/
  /*Con la sentencia return lo que estoy haciendo es permitir que el valor de mi
  variable respuesta pueda ser visible y/o convocado por otra funcion o que
  pueda ser guardado en otra variable que este afuera de mi función*/
  /*Cuando dentro de una función lleguemos a la sentencia return, la función se
  dejará de ejecutar hasta ese punto, osea que maximo puede haber un return por
  función*/
  /*Para poder acceder al valor del return lo que se debe hacer es poner el
  nombre de la funcion y los parámetros si es que esta tenía. Ejemplo:
  var x = myFunction(4, 3);
  Haciendo que en x se guarde el valor de la variable a la que le puse return,
  esto obviamente se haría fuera de la función*/
}

function sumar(){
  var result=0;
  /*Esto se llama inicializar, osea darle un valor, cuando es
  numerico 0 y cuando es un String darle '' vacio y no se debe
  indicar de que tipo primitivo es, aunque por default todas
  las variables son String*/
  /*Se inicializa la variable para que se sepa que tipo de valor
  es*/
  /*Aqui ya no se debe indicar tampoco si es float, double, etc
  el programa lo decide por si solo dependiendo de cual le
  convenga*/
  var person='';
  var result2=0;
  result=4*5;
  var person='Pepe Mid';
  console.log("Hola " + person + ", el resultado es " + result);
  /*Ahorita estamos usando la consola solo para poder visualizar en forma de
  prueba lo que estamos haciendo, despues imprimiremos el resutlado en otro
  lado*/
  saludar('Chango' + person);
  /*Al llegar a esta instruccion se brincara a la funcion saludar y cuando
  termine de ejecutar la funcion sumar va a seguir con el resto de la funcion
  sumar*/
  /*Asi llamo a la funcion saludar dentro de la funcion sumar, pero como esta
  esperando un parametro de entrada se lo debo poner y este puede ser la
  variable ya declarada llamada person o ponerle algun otro valor entre
  comillas como 'Juan' o se pueden contatenar las 2, como yo quiera*/
  var numA=0;
  var numB=0;
  /*Usualmente es mejor declarar todas mis variables en el mismo lugar pero
  ahorita para el ejemplo las declaro aquí*/
  numA = document.getElementById('numA').value;
  /*El document.getElementById se debe escribir exactamente asi para que
  funcione*/
  /*Aqui le estamos dando un valor a la variable numA*/
  /*document hace que se meta al documento donde esta corriendo todo mi programa
  que es mi html, despues le digo que me busque un elemento que tenga el id de
  numA y hasta ahi le daria el valor <input type="text" id="numA"> y me dira
  que es undefined, por eso se pondra primero un valor numerico dentro del
  input y con eso hara la operacion que yo le diga*/
  numB = document.getElementById('numB').value;
  /*Le puse que me regrese el value de mi input numB porque siempre los inputs
  al yo meter cualquier cosa dentro de ellos me lo recibira como un value y este
  interpretara que tipo de elemento es despues cuando lo intente usar*/
  result2 = numA*numB;
  console.log("El resultado es " + result2 + " wey");

  var saludo = '';
  saludo = saludar(person);
  /*Así le doy valor a una funcion con otra funcion y aunque esta ya tenga valor
  como es la ultima linea de codigo que lee de arriba para abajo le cambia el
  valor que ya tenia*/

  var resultadoFinal ='';
  resultadoFinal = saludo + ", el resultado es " + result2;
  /*Con esto estoy asignando un valor a la variable resultadoFinal*/
  document.getElementById('display').innerHTML = resultadoFinal;
  /*Con esta ultima linea lo que hago es buscar en mi documento mi div llamado
  display y le voy a asignar el valor de resultadoFinal*/
}
