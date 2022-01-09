const list1 = [1, 2, 3, 6, 8,8,5,2,4,6,4,2,5,7,8,8];

const list1Count ={};

list1.map(
    function(elemento){
        
        if(list1Count[elemento]){
            list1Count[elemento] += 1;
        } else {
            list1Count[elemento] = 1;
        }
        
    }
);

const list1Array = Object.entries(list1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = list1Array[list1Array.length - 1]