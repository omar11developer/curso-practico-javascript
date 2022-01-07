const coupons = ["JuanGamer", "GamplayRey", "PabloPlay"];
const precio = 80;
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function aplicarCupon() {
  const inputCupon = document.getElementById("inputCupon");
  const valueCupon = inputCupon.value;
  const showError = document.getElementById("labelError");
  let descuento;

   for (let i = 0; i < coupons.length; i++) {
       const element = coupons[i];
       
       if (valueCupon === element) {
        switch (valueCupon) {
            case coupons[0]:
              descuento = 15;
              break;
            case coupons[1]:
              descuento = 30;
              break;
            case coupons[2]:
              descuento = 25;
              break;
          }
          
         
          const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
          const error = (showError.innerText = "")
          
         
          break;
       } else {
           
           
           const error = (showError.innerText= "Lo sentimos el cupon que colocastes es incorrecto")
           break;
       }
   }

  
  
  /*if (valueCupon == "juan") {
        alert("Extio")
    }else {
        alert("cupon invalidpo")
    }*/
}
