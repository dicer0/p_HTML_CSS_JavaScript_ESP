function maximo(){
  var num1 = 0;
  var num2 = 0;
  var resultado = ' ';

  var numUno = document.getElementById('Uno').value;
  var numDos = document.getElementById('Dos').value;

  var num1 = parseInt(numUno, 10);
  var num2 = parseInt(numDos, 10);

  if(num1>num2){
    resultado = "El numero maximo es: " + num1;
    document.getElementById('display').innerHTML = resultado;
  }else{
    resultado = "El numero maximo es: " + num2;
    document.getElementById('display').innerHTML = resultado;
  }
  if (num1==num2){
    resultado = "No hay numero maximo";
    document.getElementById('display').innerHTML = resultado;
  }
}
