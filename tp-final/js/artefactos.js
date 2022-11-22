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

class Artefacto {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/artifacts/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Artefacto.renderArtefactoData(data))
        .catch(error => alert(error));
    }

    static renderArtefactoData(data){
        let artefacto = data;

        artefacto.forEach((id, key) => {
            let URL = `https://api.genshin.dev/artifacts/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(artefacto => {
                let contenedor = document.querySelector('#container-artefactos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/artifacts/${id}/flower-of-life" onerror="this.onerror=null, this.src='../IMG/Flower_of_Life.webp'" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2">
                                    ${artefacto["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: ${colorBG[artefacto["max_rarity"]]};">
                                    <h5 class="modal-title text-light">
                                        ${artefacto["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Rareza maxima:
                                            </b>
                                            ${artefacto["max_rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Bonus de 2 piezas:
                                            </b>
                                            ${artefacto["2-piece_bonus"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Bonus de 4 piezas:
                                            </b>
                                            ${artefacto["4-piece_bonus"]}
                                        </li>
                                        <li class="list-group-item text-center">
                                            <b>
                                                Set de artefactos
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/artifacts/${id}/flower-of-life" onerror="this.onerror=null, this.src='../IMG/Flower_of_Life.webp'" class="img-fluid w-25 float-end bg-light" alt="">
                                            <b>
                                                Flower of Life
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/artifacts/${id}/plume-of-death" onerror="this.onerror=null, this.src='../IMG/Plume_of_Death.webp'" class="img-fluid w-25 float-end bg-light" alt="">
                                            <b>
                                                Plume of Death
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/artifacts/${id}/sands-of-eon" onerror="this.onerror=null, this.src='../IMG/Sands_of_Eon.webp'" class="img-fluid w-25 float-end bg-light" alt="">
                                            <b>
                                                Sands of Eon
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/artifacts/${id}/goblet-of-eonothem" onerror="this.onerror=null, this.src='../IMG/Goblet_of_Eonothem.webp'" class="img-fluid w-25 float-end bg-light" alt="">
                                            <b>
                                                Goblet of Eonothem
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/artifacts/${id}/circlet-of-logos" onerror="this.onerror=null, this.src='../IMG/Circlet_of_Logos.webp'" class="img-fluid w-25 float-end bg-light" alt="">
                                            <b>
                                                Circlet of Logos
                                            </b>
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

Artefacto.fetchFromAPI();