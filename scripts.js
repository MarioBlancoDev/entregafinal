console.log("ok");
const productos = [
    {
        nombre: "Superman",
        descripcion: "Figura Superman version española vintage",
        imagen: "imagenes/superman.jpeg",
        precio: 9000
    },
    {
        nombre: "Mickey y Goofy",
        descripcion: "Mickey and the roadster racers",
        imagen: "imagenes/mickey.jpeg",
        precio: 5000
        
    },
    {
        nombre: "Raiden",
        descripcion: "Figura Raiden Mortal Kombat McFarlane",
        imagen: "imagenes/raiden.jpeg",
        precio: 5000

    },
    {
        nombre: "Grua y operario Lego",
        descripcion: "Figura Grua armable marca Lego",
        imagen: "imagenes/lego.jpeg",
        precio: 15000

    },
    {
        nombre: "Princesa Leia",
        descripcion: "Figura antigua coleccionable de Princesa Leia Star Wars",
        imagen: "imagenes/leia.jpeg",
        precio: 55000

    }
] 
let productosHTML="";
for(let indice = 0; indice < productos.length; indice++){
     productosHTML += `
    <div class="card">
              <img src=${productos[indice].imagen}>
              <h3>${productos[indice].nombre}</h3>
              <p>${productos[indice].descripcion}</p>
              <h3>Precio: $${productos[indice].precio}</h3>
              <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
            </div>
            `; 
}

const contenedorProductos = document.getElementById("contenedorProductos");
contenedorProductos.innerHTML = productosHTML;
const botonAgregar = document.querySelectorAll(".boton-agregar-carrito");
const listaCarrito= document.querySelector("#carrito ul");
const totalCarrito = document.querySelector("#carrito p");
const mensajePagarCarrito = document.getElementById("mensaje");
let totalPagar = 0;
for(let indice = 0; indice < botonAgregar.length; indice++){
    function agregarElemCarrito(){
        console.log("click " + indice);
        const elementoLi = document.createElement("li");
        elementoLi.innerText = `Producto ${productos[indice].nombre} $${productos[indice].precio}`;
        listaCarrito.appendChild(elementoLi);
        totalPagar += productos[indice].precio;
        totalCarrito.innerText = "Total a pagar: $ " + totalPagar;


    }
    botonAgregar[indice].addEventListener("click", agregarElemCarrito)
}
const botonBorrar = document.querySelector("#boton-borrar");



function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalPagar = 0;
    mensajePagarCarrito.innerText = "";
}
botonBorrar.addEventListener("click", borrarCarrito);

const botonPagar = document.querySelector("#boton-pagar");
function irPagar(){
if(listaCarrito.innerText === ""){
    mensajePagarCarrito.innerText = "No has seleccionado ningun producto"

} else {
 window.location.href = "./pagos.html"
}

   
}
botonPagar.addEventListener("click", irPagar) 


        