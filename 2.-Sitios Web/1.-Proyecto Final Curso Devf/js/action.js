function mandarEvidencias(){
  var evidencias = "";
  evidencias = "<form id='fotosYvideos'>" +
    "<h1 class='textoExplicativo2'>foto1: <input type='file' name='foto1'></h1>" +
    "<h1 class='textoExplicativo2'>foto2: <input type='file' name='foto2'></h1>" +
    "<h1 class='textoExplicativo2'>foto3: <input type='file' name='foto3'></h1>" +
    "<h1 class='textoExplicativo2'>video: <input type='file' name='video'></h1>" +
  "</form>" +
  "<div class='button'>" +
    "<a href='ProcesandoCotizacion.html' style='color:white; text-decoration:none;'>Cotizar</a>" +
  "</div>";
  document.getElementById('display').innerHTML = evidencias;
}

function Contraseña(){
  var contra = "";
  contra = "<div id='poskwey'>" +
      "¡Pues que wey!" +
    "</div>";
  document.getElementById('display2').innerHTML = contra;
}
