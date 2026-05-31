import {Productos} from "./DB.js";

function Tarjetas(Lista) {
    let Contenedor = document.querySelector(".Tarjetas")
    Contenedor.innerHTML = "";
    Lista.forEach(i => {
        let nuevoDiv = document.createElement("div")
        nuevoDiv.classList.add("Tarjeta")
        nuevoDiv.innerHTML = `
            <img src="${i.img}" alt="Productos">
                <h3 style="font-weight:bold;">${i.nombre}</h3>
                <p>${i.descripcion}</p>
                <h4 style="color: green; font-size:30px; text-shadow: 2px 2px 4px #468432;" class="precio">$${i.precio}</h4>
            <button class="btn btn-warning" type="button" onclick="MostrarCarro()">Agregar Al Carro</button>
        `
        Contenedor.appendChild(nuevoDiv)
    });
}
Tarjetas(Productos);

let filtro = document.querySelector("#filtro")
let Seleccionar = document.querySelector(".Tarjetas")


filtro.addEventListener("keyup", function () {

    let filtrar = Productos.filter(i => i.nombre.toLowerCase().includes(filtro.value.toLowerCase().trim()))
    if (filtrar.length > 0) {
        Tarjetas(filtrar)
    }
    else {
        Seleccionar.innerHTML = "<h2 '>Producto no encontrado</h2>"
    }
})