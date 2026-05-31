import {Productos} from "./DB.js";

function Tarjetas(Lista) {
    let Contenedor = document.querySelector(".Tarjetas")
    Contenedor.innerHTML = "";
    Lista.forEach(i => {
        let nuevoDiv = document.createElement("div")
        nuevoDiv.classList.add("Tarjeta")
        nuevoDiv.innerHTML = `
            <img src="${i.img}" alt="Imagen">
            <div>
                <p>${i.nombre}</p>
                <p class="precio">$${i.precio}</p>
            </div>
            <button type="button" class="btn btn-outline-light" onclick="MostrarCarro()">Agregar Al Carro</button>
        `
        Contenedor.appendChild(nuevoDiv)
    });
}
Tarjetas(Productos)