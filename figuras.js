//Codigo del cuadrado
console.group('Cuadrados');


//const ladoCuadrado = 5;
//console.log('Los lado del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado (lado) {
    return  lado * 4;
}


//console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + ' cm^2');

function areaCuadrado(lado){
    return lado * lado;
} 

//console.log('El area  del cuadrado es: ' + areaCuadrado + ' cm^2');
console.groupEnd();

console.group("Trinagulo")
//Codigo del triangulo
/*const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const baseTriangulo = 4;
const alturatriangulo = 5.5;
console.log('Los lado del triangulo miden: '
+ ladotriangulo1
+ ' cm '
+ ladotriangulo2
+ ' cm '
+ baseTriangulo
+ ' cm '
);

console.log('La altura del triangulo es: ' + alturatriangulo + ' cm');
const perimetroTriangulo = ladotriangulo1+ladotriangulo2+baseTriangulo
console.log('El perimetro del triangulo es: ' + perimetroTriangulo);
const areaTriangulo = (baseTriangulo*alturatriangulo)/2;
console.log('El area del triangulo es: ' + areaTriangulo);
console.groupEnd();
*/


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}




console.group('circulos')
// Radio
/*const radioCirculo= 4;
console.log('El radio del circulo es: ' + radioCirculo + ' cm');*/
//Diametr
function diametroCirculo(radio) {
    return radio *2;
}

/*const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo es: ' + diametroCirculo + ' cm');*/
// PI
const PI = Math.PI;
//console.log('El PI del circulo es: ' + PI);
//Circuferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
/*const perimetroCirculo = diametroCirculo * PI;
console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm');*/
//Area
function areaCirculo(radio){
    return (radio * radio)* PI;
}
/*
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El area del circulo es: ' + areaCirculo + ' cm^2');*/
console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert('El perimetro es ' + perimetro);
} 
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert('El perimetro es ' + perimetro);
}
