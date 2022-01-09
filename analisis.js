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

console.log(medianaSalarioCol(salarioColSorted));