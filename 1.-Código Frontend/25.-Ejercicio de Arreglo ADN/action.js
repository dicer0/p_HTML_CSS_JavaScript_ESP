function ADN(){
 var adn = [];

 // var a1 = 0;
 // var t1 = 0;
 // var g1 = 0;
 //
 // var t2 = 0;
 // var g2 = 0;
 // var a2 = 0;
 var tresEnTres1 = [];

 adn =['T', 'T' , 'A' ,'A' , 'T', 'G', 'T', 'C', 'C', 'C', 'T', 'A' ,'T' ,'G', 'A', 'T', 'A', 'C', 'T',
  'A', 'A', 'T', 'G', 'C', 'G', 'A', 'A', 'A', 'T', 'T', 'A', 'A', 'A', 'T', 'C', 'G', 'A', 'A', 'T'];

 // a1 = adn.indexOf('A');
 // t1 = adn.indexOf('T');
 // g1 = adn.indexOf('G');
 // document.getElementById('display').innerHTML = a1+" "+t1+" "+g1;
  for (var i=0; i<adn.length; i++){
    /*Aqui lee todo mi arreglo*/
   if (adn[i] == "A") {
     /*Aqui evalua en que posiciones hay un caracter A*/
     if(adn[i+1]=="T"){
       /*Aqui evalua en que posiciones hay un caracter T*/
       // console.log(adn[i]+adn[i+1]);
       if(adn[i+2]=="G"){
         /*Aqui evalua en que posiciones hay un caracter G*/
         console.log(adn[i]+adn[i+1]+adn[i+2]);
         for (var j=i+3; j<adn.length; j+=3) {
           /*EL j+=3 lo que hace es brincarse de3 en 3, pero como dentro del
           push le meti adn[j] + adn[j+1] + adn[j+2] leera ese numero, se ira
           al otro y al otro de alado y los metera en el mismo lugar del arreglo
           asi agrupandolos de 3 en 3*/
           tresEnTres1.push(adn[j]+adn[j+1]+adn[j+2]);
           console.log(tresEnTres1);

           if(tresEnTres1 == "TGA"){
             j = adn.length + 1;
           }
         }
       }
     }
   }
 }
}
