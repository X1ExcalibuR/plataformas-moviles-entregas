//Colores para fondos
const colorBG = {
    "1": "#77787A",
    "2": "#528D78",
    "3": "#5391B8",
    "4": "#7D69A8",
    "5": "#B67126",

    "Discord": "#5865F2",
    "Reddit": "#FF4500",
    "Twitch": "#9147FF",
    "Youtube": "#FF0000",
    "Facebook": "#1977F3",
    "Twitter": "#1D9BF0",
    "Instagram": "#F04C5B"
}

let brandFooter1 = document.getElementById("brandFooter1").style.backgroundColor = colorBG["Discord"];
let brandFooter2 = document.getElementById("brandFooter2").style.backgroundColor = colorBG["Reddit"];
let brandFooter3 = document.getElementById("brandFooter3").style.backgroundColor = colorBG["Twitch"];
let brandFooter4 = document.getElementById("brandFooter4").style.backgroundColor = colorBG["Youtube"];
let brandFooter5 = document.getElementById("brandFooter5").style.backgroundColor = colorBG["Facebook"];
let brandFooter6 = document.getElementById("brandFooter6").style.backgroundColor = colorBG["Twitter"];
let brandFooter7 = document.getElementById("brandFooter7").style.backgroundColor = colorBG["Instagram"];

//Barra de progreso
function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressScroll").style.width = scrolled + "%";
  }

//Boton hacia el principio
let btnTop = document.getElementById("btn-back-to-top");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 && window.innerWidth >= 768) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btnTop.addEventListener("click", backToTop);

window.onscroll = function () {
    progressBarScroll()
    scrollFunction();
};

class Consumible {
    constructor(){}

    static fetchFromAPI(){
        let URL1 = 'https://api.genshin.dev/consumables/food';
        let URL2 = 'https://api.genshin.dev/consumables/potions';
        fetch(URL1)
        .then(response => response.json())
        .then(data => Consumible.renderComidaData(data))
        .catch(error => alert(error));
        fetch(URL2)
        .then(response => response.json())
        .then(data => Consumible.renderPocionData(data))
        .catch(error => alert(error));
    }

    static renderComidaData(data){
        let comida = data;
        let comida2 = Object.entries(comida)
        comida2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/consumables/food/`;
            fetch(URL)
            .then(response => response.json())
            .then(comida2 => {
                let contenedor = document.querySelector('#container-comidas');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush1-${key}">
                                <img src="https://api.genshin.dev/consumables/food/${id[0]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${id[1]["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush1-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: ${colorBG[id[1]["rarity"]]};">
                                    <h5 class="modal-title text-light">
                                        ${id[1]["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Descripción:
                                            </b>
                                            ${id[1]["description"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Efectos:
                                            </b>
                                            ${id[1]["effect"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Tipo:
                                            </b>
                                            ${id[1]["type"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id[1]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Automatización:
                                            </b>
                                            ${id[1]["proficiency"]} platos perfectos
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                contenedor.appendChild(elemento)
            })
            .catch(error => alert(error));
        });
    }

    static renderPocionData(data){
        let pocion = data;
        let pocion2 = Object.entries(pocion)
        pocion2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/consumables/potions/`;
            fetch(URL)
            .then(response => response.json())
            .then(pocion2 => {
                let contenedor = document.querySelector('#container-pociones');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush2-${key}">
                                <img src="https://api.genshin.dev/consumables/potions/${id[0]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${id[1]["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush2-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: ${colorBG[id[1]["rarity"]]};">
                                    <h5 class="modal-title text-light">
                                        ${id[1]["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Efectos:
                                            </b>
                                            ${id[1]["effect"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id[1]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                contenedor.appendChild(elemento)
            })
            .catch(error => alert(error));
        });
    }
}

Consumible.fetchFromAPI();