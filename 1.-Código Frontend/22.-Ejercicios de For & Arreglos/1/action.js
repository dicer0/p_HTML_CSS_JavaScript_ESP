function numNat(){
  var noNatural = "";
  noNatural = "El numero introducido no es un numero natural";
  var n = parseInt(document.getElementById('numN').value);
  if (n>0) {
    for (var i=1; i<=n; i++) {
      console.log(i);
    }
  } else {
    console.log(noNatural);
    }
  }
