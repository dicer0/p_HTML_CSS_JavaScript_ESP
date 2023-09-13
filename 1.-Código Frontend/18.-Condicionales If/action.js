function operadores(){
  /*Condicionales que usara mis variables*/
  var edad= 0;
  var edadLegal = 0;
  /*Inicializar variables*/
  var edad=13;
  var edadLegal = 18;

  /*Darle valor a variables*/
  edad = document.getElementById("Edad").value;
  /*Con esto hare que se pueda sobreescribir el valor de edad con un input*/
  if(edad>= edadLegal){
    if(edad<35){
      console.log("Puedes pasar")
    }else{
      console.log("Ábrase ñor");
    }
    /*Este es un if anidado, asi se consideran 2 condiciones para que puedan
    cumplirse los 2 if*/
  }else{
    console.log("Ábrete como almeja chamaco");
  }
  
  /*Parte que reconoce la operación realizada*/
  var operador = " ";
  var operadorFinal = " ";
  /*A la variable operador la puse como string porque quiero obtener el value
  de las diferentes options de mi select*/
  operador=document.getElementById('operador');
  /*Con esto llamo a todo el select con su Id y lo que almacena dentro de la
  variable operador es todo el codigo html que hay dentro de select*/
  console.log(operador);
  operadorFinal = operador.options[operador.selectedIndex].value;
  /*Esto lo que hace es leer el codigo html que esta guardado dentro de la
  variable operador que estaba guardado dentro del elemento con Id operador de
  mi html osea mi select y va a asignarle a operadorFinal el value o text o lo
  que yo elija que me regrese, esto lo indico despues del punto, en este caso
  quise que me regresara el value, pero me regresara en especifico el value de
  la option a la que yo le haya dado click*/
  console.log(operadorFinal);
}
