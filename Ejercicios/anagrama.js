// Dado un string crear una función que determine si es un anagrama o no
// output => isAnagram('oso') => true
// output => isAnagram('hola') => false


function esAnagrama(palabra, posibleAnagrama){
    if(palabra.toLowerCase() === posibleAnagrama.toLowerCase()) return false;
    
    return palabra.toLowerCase().split("").sort().join("") === posibleAnagrama.toLowerCase().split("").sort().join("");
  }
  
  var palabrasYPosiblesAnagramas = [
      {
        palabra: "Hola",
        posibleAnagrama: "Aloh"
      },
      {
        palabra: "oso",
        posibleAnagrama: "soo"
      },
      {
        palabra: "nacionalista",
        posibleAnagrama: "altisonancia"
      },
    ];
    
  for(var x = palabrasYPosiblesAnagramas.length - 1; x >= 0; x--){
    var palabra = palabrasYPosiblesAnagramas[x].palabra,
      posibleAnagrama = palabrasYPosiblesAnagramas[x].posibleAnagrama,
      resultado = esAnagrama(palabra, posibleAnagrama);
      
    console.log("¿%s es anagrama de %s? %s", posibleAnagrama, palabra, resultado);
  }