/*
function calcularMediaAritmetica(lista) {
 // let sumaLista = 0;

  /*for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];

  //Array.reduce(function(valor1 = 0, nuevoValor){return valor1 + nuevoValor;});
  const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nevoElement){
        return valorAcumulado + nevoElement;
      }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
  
}*/

function calcularMediaAritmetica(lista) {
    
     const sumaLista = lista.reduce(
         function (valorAcumulado = 0, nevoElement){
           return valorAcumulado + nevoElement;
         }
     );
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
     
   }


// Sacando la mediana 
const lista1 = [
    400,
    200,
    150,
    50000,
    
];

const mitadLista1 = parseInt(lista1.length /2);
function espar(numero){
    if (numero % 2 === 0) {
        return true;
    }else {
        return false;
    }
}
let mediana;
if (espar(lista1.length) ) {
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];

    const promedio1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedio1y2;
    

}else {
    mediana = lista1[mitadLista1];
}




