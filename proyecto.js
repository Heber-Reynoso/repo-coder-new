let NombreUser = prompt("ingrese su nombre");
console.log("Hola " + NombreUser);

let edadIngresada = prompt("ingrese su edad");
if (edadIngresada >= 25) { console.log("puede pasar al vip"); }
else if (edadIngresada >= 18) { console.log("puede pasar pero no al vip") }
else { console.log("no puede pasar"); }

let continuar = confirm("¿Deseás continuar?");
if (continuar) {
    console.log("El usuario decidió continuar.");
} else {
    console.log("El usuario canceló la acción.");
}

for (let i = 0; i < 5; i++) {
console.log("hola mundo: " + i);
}
let contador = 5;

let frutas = ["manzana", "banana", "naranja", "pera"];
console.log(frutas);
console.log(frutas[0]); 
console.log(frutas[2]); 

function precios(precio) {
    let resultado = precio * 1.25
    return resultado	
  }



  
  let precioIngresado = prompt("Ingrese el precio sin IVA:")
  precioIngresado = parseFloat(precioIngresado)
  let precioConIva = precios(precioIngresado)
  alert ("El precio con IVA es: " + precioConIva)




  let total = 0;
let seleccion;

do {
  seleccion = prompt("Bienvenido/a a la tienda de ropa, elija una opción: \n1. Remera\n2. Pantalón\n3. Campera\n4. Finalizar compra");

  switch (seleccion) {
    case "1":
      total = total + 8000;
      console.log("Agregaste una remera. Tu total hasta el momento es: $" + total);
      break;
    case "2":
      total = total + 15000;
      console.log("Agregaste un pantalón. Tu total hasta el momento es: $" + total);
      break;
    case "3":
      total = total + 22000;
      console.log("Agregaste una campera. Tu total hasta el momento es: $" + total);
      break;
    case "4":
      console.log("Gracias por tu compra. El total final es: $" + total);
      break;
    default:
      console.log("Opción incorrecta. Ingresá un número del 1 al 4.");
      break;
  }
} while (seleccion !== "4");
  
  
  
  
  
  
  