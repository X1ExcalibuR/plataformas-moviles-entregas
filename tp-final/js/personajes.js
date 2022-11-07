//Colores para fondos
const colorBG = {
    "Anemo": "#299B90",
    "Cryo": "#83AADA",
    "Dendro": "#B2EA2B",
    "Electro": "#7554C1",
    "Geo": "#DA973E",
    "Hydro": "#208FBA",
    "Pyro": "#B72528",

    "Discord": "#5865F2",
    "Reddit": "#FF4500",
    "Twitch": "#9147FF",
    "Youtube": "#FF0000",
    "Facebook": "#1977F3",
    "Twitter": "#1D9BF0",
    "Instagram": "#F04C5B"
}

const vision = {
    "Anemo": "https://api.genshin.dev/elements/anemo/icon",
    "Cryo": "https://api.genshin.dev/elements/cryo/icon",
    "Dendro": "https://api.genshin.dev/elements/dendro/icon",
    "Electro": "https://api.genshin.dev/elements/electro/icon",
    "Geo": "https://api.genshin.dev/elements/geo/icon",
    "Hydro": "https://api.genshin.dev/elements/hydro/icon",
    "Pyro": "https://api.genshin.dev/elements/pyro/icon"
}

const nacionIcono = {
    "Inazuma": "https://api.genshin.dev/nations/inazuma/icon",
    "Liyue": "https://api.genshin.dev/nations/liyue/icon",
    "Mondstadt": "https://api.genshin.dev/nations/mondstadt/icon"
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
  
window.onscroll = function () {
    progressBarScroll();
};

//Boton hacia el principio
let btnTop = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 && window.innerWidth >= 768) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

btnTop.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

class Personaje{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/characters/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Personaje.renderPersonajeData(data))
        .catch(error => alert(error));   
    }

    static renderPersonajeData(data){
        let personaje = data;

        personaje.forEach((id, key) => {
            let URL = `https://api.genshin.dev/characters/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(personaje => {
                let contenedor = document.querySelector('#container-personajes');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/characters/${id}/icon-big" onerror="this.onerror=null, this.src='https://api.genshin.dev/characters/${id}/icon-big-lumine'" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill" style="background-color: ${colorBG[personaje["vision"]]};">
                                    ${personaje["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: ${colorBG[personaje["vision"]]};">
                                    <h5 class="modal-title text-light">
                                        ${personaje["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://api.genshin.dev/characters/${id}/card" alt="" class="img-fluid w-100 rounded" height"255">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <img src="${vision[personaje["vision"]]}" class="img-fluid float-end rounded-4" style="background-color: ${colorBG[personaje["vision"]]};">
                                            <b>
                                                Visión:
                                            </b>
                                            ${personaje["vision"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Arma:
                                            </b>
                                            ${personaje["weapon"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="${nacionIcono[personaje["nation"]]}" class="img-fluid w-25 float-end border-nation rounded-4">
                                            <b>
                                                Nación:
                                            </b>
                                            ${personaje["nation"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Afilación:
                                            </b>
                                            ${personaje["affiliation"]}
                                        </li>
                                        <li class="list-group-item align-middle">
                                            <img src="https://api.genshin.dev/characters/${id}/constellation" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Constelación:
                                            </b>
                                            ${personaje["constellation"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${personaje["rarity"]}
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

Personaje.fetchFromAPI();