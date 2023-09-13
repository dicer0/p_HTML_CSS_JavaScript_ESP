function matrix(){
  var array = [];
  /*Inicializo mi variable array de tipo arreglo*/
  /*Es importante siempre recordar con los arreglos que el length cuenta tal
  cual los lugares que tiene empezando desde 1, pero cuando acceso a las
  posiciones de mi array, estas se empezaran a contar desde 0*/
  array = [
    ['Atos', 'Verde'], //array[0] Nota: aguas con las comas entre los arrays
    ['Golf', 'Rojo'], //array[1]
    ['Tiida', 'Amarillo'], //array[2] , estos son los arrays dentro de mi array
    ['Tsuru', 'Azul', "1992", ["Changos", "Uff"]]
    /*Puedo poner los datos que quiera dentro de mi array con las dimensiones
    que quiera*/
  ]
  /*Le doy valor a mi variable array, pero esta es de 2 dimensiones, osea que en
  cada espacio de mi array hay 2 elementos*/
  for (var i=0; i<array.length; i++) {
    // console.log(array[i]);
    /*Esto lo que hacia es imprimir la matriz externa y saldra como codigo con
    sus elementos dentro*/
    for (var j=0; j<array[i].length; j++) {
      /*El array[i].length me dara la longitud de cada uno de mis arreglos en la
      2da dimension no importando si son de la misma longitud o son de diferente
      como podemos observar en nuestro ejemplo*/
      if(j<=2){
        console.log(array[i][j]);
      }
      if(j==3){
        /*Esto se usa para cuando tengo un array dentro de otro array pero
        solamente en ciertas ocasiones como vemoe en el array[3] de arriba*/
        for (var k=0; k<array[i][3].length; k++) {
          console.log(array[i][j][k]);
        }
      }
    }
    /*Este segundo for lo voy a usar para poder ingresar a la 2da dimension de
    mi arreglo*/
    /*array[i] me dara la longitud o length del cada array que hay dentro de
    mi array, osea que mi 1er array de la 1era dimension tiene length de 3, y
    cada uno tiene length de 2, esa length 2 me la dara array[i]*/
  }
}
