function sumarN(){
/*Ejercicio nones*/
  var n = parseFloat(document.getElementById('inputA').value);
  var suma=0;

  if(n > 0){
    for(var i=1; i<=n; i++){
      if(i%2!=0){
        /*Esto de i%2==0 lo que hace se llama modulo y lo que significa es
        dividir i/2 y el numero que tomare en cuenta es el residuo, si este
        da cero como el divisor es 2 significa que es par, si da uno es impar
        por mas loco que parezca esto siempre se cumple esta condicion con el
        residuo donde par= residuo 0; impar= residuo diferente a cero*/
        suma  = suma + i;
        console.log(suma);
      }
    }
  }else{
    console.log("No es un numero natural");
  }
  console.log(suma);
}

function escalera1(){
  var n = parseInt(document.getElementById('inputA').value);
  var piso = "";

  for(var i=0; i<n; i++){
    piso = piso + '*';
    console.log(piso);
  }
}

function escalera2(){
  var m= parseInt(document.getElementById('inputA').value);
  var escalon= '';
  var espacios = '';
  /*Se pueden usar cualquiera de las 2 comillas para indicar que es String*/

  for (var i=0; i<m; i++) {
    escalon += "* ";
    for (var j=1; j<m-i; j++) {
     espacios += '-';
    }
    var pisos = espacios + escalon;
    console.log(pisos);
    espacios= '';
    /*Esto es para limpiar osea hacer nada a la variable espacios*/
    pisos ='';
    /*Esto es para limpiar osea hacer nada, nisiquiera espacio a la variable
    pisos*/
  }
}

function arreglo(){
  var amigos = ["Hugo", "Paco", "Luis"];
  var listaAmigos='';
  for (var i=0; i<amigos.length; i++) {

    /*document.getElementById('display').innerHTML = amigos[i];
    Esto no jala asi porque al yo hacer esto si se imprimiran todos los
    elementos del array amigos pero despues de que imprima uno, imprimira
    el otro borrando el pasado por lo que solo saldra impreso el ultimo valor
    del array*/

    listaAmigos += "<h1>" + amigos[i] + "</h1>";
    // o se puede poner
    //listaAmigos = listaAmigos + "<h1>" + amigos[i] + "</h1>";
    /*El += es importante porque asi imprime la misma variable varias veces
    en vez de borrarla y ponerle el valor que sigue en mi arreglo, osea
    le asignare a la variable listaAmigos = <h1> amigos[0] </h1> y despues
    repetira esta variable y le agregara la siguiente <h1> amigos[1] </h1> y
    asi consecutivamente, si no pongo el += pondra la primera variable, luego
    la borrara y pondra el siguiente valor, por lo que al final quedara
    solamente <h1>amigos[2]</h1>, imprimiendo solo el ultimo elemento de mi
    array*/
    /*Aqui si le estoy mandando texto a mi div que tiene id="display" pero todos
    los archivos html aceptan texto y despues lo interpreta el navegador como
    codigo html, por eso se puede programar para cualquier archivo html en
    cualquier editor de texto sin necesidad de un compilador, el compilador
    es el mismo navegador por eso aunque mande mi etiqueta <H1> como texto, mi
    div la interpreta como codigo y esto hace que se pongan todos los elementos
    del array amigos*/
    console.log(listaAmigos);
    document.getElementById('display').innerHTML = listaAmigos;
  }
}
