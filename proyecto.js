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
  
//----------------------------------------------------


class Persona {
  constructor(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
  }

  presentarse() {
    console.log(`Hola me llamo ${this.nombre}, tengo ${this.edad} años y vivo en ${this.calle}.`);
  }
}

const persona1 = new Persona({ nombre: "Heber", edad: 29, calle: "Av.Siempreviva 742" });
const persona2 = new Persona({ nombre: "Bart", edad: 15, calle: "Av.Siempreviva 742" });

persona1.presentarse();
persona2.presentarse();

let nombre = "Polo";
console.log(nombre.toUpperCase());



// Storage
localStorage.setItem("nombre", "Mateo");
console.log(localStorage.getItem("edad"));
localStorage.removeItem("edad");
localStorage.clear();
localStorage.setItem("psw", "admin1234");
sessionStorage.setItem("nombre", "Nicolas");



// JSON

localStorage.setItem("persona", JSON.stringify(persona1));
console.log(JSON.parse(localStorage.getItem("persona")));

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// carrito && cargarHTML(carrito);

localStorage.setItem(
  "carrito",
  JSON.stringify([
    { id: 1, nombre: "remera", precio: 1500 },
    { id: 2, nombre: "pantalon", precio: 2500 },
    { id: 3, nombre: "zapato", precio: 3500 },
    { id: 4, nombre: "gorra", precio: 4500 }
  ])
);

function mayorQue(n) {
  return (m) => m > n;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

console.log(12 > 10);
console.log(mayorQueDiez(12)); 
console.log(mayorQueDiez(8)); 
console.log(mayorQueVeinte(10));
console.log(mayorQueVeinte(25));

// Recibir funciones por parámetro

let numeros = [1, 2, 3, 4, 5];

const mostrar = (array, fn) => {
  for (let num of array) {
    fn(num);
  }
};

mostrar(numeros, (m) => {
  console.log(m > 2);
});


// forEach 

let productos = [
  { id: 1, nombre: "Remera", precio: 20 },
  { id: 2, nombre: "Pantalon", precio: 30 },
  { id: 3, nombre: "Campera", precio: 50 },
  { id: 4, nombre: "Medias", precio: 10 }
];

productos.forEach((prod) => {
  console.log(prod);
});


// filter 

let prodEncontrado = productos.filter((prod) => {
  return prod.precio <= 30;
});

console.log(prodEncontrado);


// some //

console.log(
  productos.some((prod) => {
    return prod.nombre === "Camisa";
  })
);

// map //

let prodsModificados = productos.map((prod) => {
  return {
    ...prod,
    precio: prod.precio * 1.21
  };
});

console.log(prodsModificados);


// reduce //

let totalProductos = productos.reduce((acc, prod) => {
  return acc + prod.precio;
}, 0);

console.log(totalProductos);

// sort //

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 }
];
items.sort((a, b) => {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  // a es igual a b
  return 0;
});

console.log(items);

let productosLista = [
  { id: 1, nombre: "Remera", precio: 20 },
  { id: 2, nombre: "Pantalon", precio: 30 },
  { id: 3, nombre: "Campera", precio: 50 },
  { id: 4, nombre: "Medias", precio: 10 }
];

let carritoSimulador = [];

let seguir = true;
while (seguir) {
  let option = prompt(`Seleccione una opción:
    1. Ver productos
    2. Filtrar productos por precio
    3. Agregar producto
    4. Eliminar producto
    5. Salir`);

  switch (option) {
    case "1":
      alert(productosLista.map((prod) => `Id: ${prod.id} - Nombre: ${prod.nombre} - Precio: $${prod.precio}`).join("\n"));
      break;
    case "2":
      let precioMax = parseInt(prompt("Ingrese el precio máximo:"));
      let prodsFiltrados = productosLista.filter((prod) => prod.precio <= precioMax);
      console.log(prodsFiltrados);
      break;
    case "3":
      let id = parseInt(prompt("Ingrese el ID del producto a agregar:"));
      let prodEncontrado = productosLista.find((prod) => prod.id === id);
      prodEncontrado ? carritoSimulador.push(prodEncontrado) : alert("El producto no existe");
      console.log(carritoSimulador);
      break;
    case "4":
      let idAEliminar = parseInt(prompt("Ingrese el ID del producto a eliminar:"));
      carritoSimulador = carritoSimulador.filter((prod) => prod.id !== idAEliminar);
      console.log(carritoSimulador);
      break;
    case "5":
      seguir = false;
      alert("¡Gracias por tu compra!");
      break;
    default:
      alert("Opción no válida");
      break;
  }
}







  
  
  
  
  
  