


function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100
    return precioConDescuento;
}
//console.log(`El precio original es: ${precioOriginal} y eldescuento es: ${descuento} y el precio final es de: ${precioConDescuento}`)

function priceDiscount() {
    const precio = document.getElementById("inputPrice");
    const descuento = document.getElementById("inputDescuento");
    const valuePrecio = precio.value;
    const valueDescuento = descuento.value;
    const resultDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento);
    const labelResultado = document.getElementById("Precio");
    const showResultado = (labelResultado.innerText = `$` + resultDescuento)
}