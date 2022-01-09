// Helpers 

function esPar(numero) {
    return( numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nevoElement){
          return valorAcumulado + nevoElement;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
  }
//calculadora de mediana salario
function medianaSalarioCol(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1= lista[mitad -1];
        const personaMitad2= lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Calculando la mediana general
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);


const medianaGenralCol = medianaSalarioCol(salarioColSorted);

// mediana del top 10%

const spliceStart= (salarioColSorted.length * 90) / 100;
const spliceCount= salarioColSorted.length - spliceStart;
const salarioTop = salarioColSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10Col = medianaSalarioCol(salarioTop);





console.log(
    medianaGenralCol,
    medianaTop10Col,
);