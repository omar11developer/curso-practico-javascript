//Codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log('Los lado del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado) {
  return lado * 4;
}

//console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + ' cm^2');

function areaCuadrado(lado) {
  return lado * lado;
}

//console.log('El area  del cuadrado es: ' + areaCuadrado + ' cm^2');
console.groupEnd();

console.group("Trinagulo");
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

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.group("circulos");
// Radio
/*const radioCirculo= 4;
console.log('El radio del circulo es: ' + radioCirculo + ' cm');*/
//Diametr
function diametroCirculo(radio) {
  return radio * 2;
}

/*const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo es: ' + diametroCirculo + ' cm');*/
// PI
const PI = Math.PI;
//console.log('El PI del circulo es: ' + PI);
//Circuferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
/*const perimetroCirculo = diametroCirculo * PI;
console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm');*/
//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
/*
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El area del circulo es: ' + areaCirculo + ' cm^2');*/
console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert("El perimetro es " + perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = areaCuadrado(value);
  alert("El perimetro es " + perimetro);
}



function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputLado1");
  const inputLado2 = document.getElementById("InputLado2");
  const inputBase = document.getElementById("InputBase");
  const labelResultado = document.getElementById("resultadoTriangulo");
  const value1 = inputLado1.valueAsNumber;
  const value2 = inputLado2.valueAsNumber;
  const valueBase = inputBase.valueAsNumber;
  const perimetro = perimetroTriangulo(value1, value2, valueBase);
  const resultado = (labelResultado.innerHTML = ` El perimetro del triangulo es: ${perimetro}`);
}

function calcularAreatriangulo(){
    const inputAltura = document.getElementById("inputAltura");
    const inputBase = document.getElementById("inputBase2");
    const valueAltura = inputAltura.valueAsNumber;
    const valueBase = inputBase.valueAsNumber;
    const area= areaTriangulo(valueBase, valueAltura);
    const inputresult = document.getElementById("resultadoTrianguloArea");
    const resultado = (inputresult.innerHTML = `El area del triangulo es: ${area}`)
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const showResult = document.getElementById("resultadoCirculoPerimetro");
    const valueRadio = inputRadio.value;
    const perimetro = perimetroCirculo(valueRadio);
    const resultado = (showResult.innerHTML = `El perimetro es: ${perimetro}`);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadio2");
    const showResult = document.getElementById("resultadoCirculoArea");
    const valueRadio = inputRadio.value;
    const area = areaCirculo(valueRadio);
    const resultado = (showResult.innerHTML = `El perimetro es: ${area}`);
}
