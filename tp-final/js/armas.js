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

const weaponTypeIcon = {
    "Bow": "Bow.png",
    "Catalyst": "Catalyst.png",
    "Claymore": "Claymore.png",
    "Polearm": "Polearm.png",
    "Sword": "Sword.png"
}

const weaponAscensionMaterialIMG = {
    "decarabian": "https://api.genshin.dev/materials/weapon-ascension/scattered-piece-of-decarabian-s-dream",
    "boreal": "https://api.genshin.dev/materials/weapon-ascension/boreal-wolf-s-nostalgia",
    "dandelion": "https://api.genshin.dev/materials/weapon-ascension/dream-of-the-dandelion-gladiator",
    "guyun": "https://api.genshin.dev/materials/weapon-ascension/divine-body-from-guyun",
    "elixir": "https://api.genshin.dev/materials/weapon-ascension/mist-veiled-primo-elixir",
    "aerosiderite": "https://api.genshin.dev/materials/weapon-ascension/chunk-of-aerosiderite",
    "distantant-sea": "https://api.genshin.dev/materials/weapon-ascension/golden-branch-of-a-distant-sea",
    "narukami": "https://api.genshin.dev/materials/weapon-ascension/narukami-s-valor",
    "mask": "https://api.genshin.dev/materials/weapon-ascension/mask-of-the-kijin"
}

const weaponAscensionMaterialTitle = {
    "decarabian": "Decarabian",
    "boreal": "Boreal",
    "dandelion": "Dandelion",
    "guyun": "Guyun",
    "elixir": "Elixir",
    "aerosiderite": "Aerosiderite",
    "distantant-sea": "Distant Sea",
    "narukami": "Narukami",
    "mask": "Mask"
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

class Arma {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/weapons/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Arma.renderArmaData(data))
        .catch(error => alert(error));
    }

    static renderArmaData(data){
        let arma = data;
        
        /*arma = arma.sort((a,b) => {
            return a.name < b.name
        })*/

        arma.forEach((id, key) => {
            let URL = `https://api.genshin.dev/weapons/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(arma => {
                let contenedor = document.querySelector('#container-armas');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                <div class="col">
                    <div class="card">
                        <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                            <img src="https://api.genshin.dev/weapons/${id}/icon" onerror="this.onerror=null, this.src='../IMG/${weaponTypeIcon[arma["type"]]}'" class="card-img img-fluid img-center-weapon">
                            <h5 class="card-title text-center mt-2">
                                ${arma["name"]}
                            </h5>
                        </button>
                    </div>
                </div>
                <div class="modal fade" id="flush-${key}" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: ${colorBG[arma["rarity"]]};">
                                <h5 class="modal-title text-light">
                                    ${arma["name"]}
                                </h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <img src="../IMG/${weaponTypeIcon[arma["type"]]}" class="img-fluid w-25 float-end border-nation rounded-4">
                                        <b>
                                            Tipo:
                                        </b>
                                        ${arma["type"]}
                                    </li>
                                    <li class="list-group-item">
                                        <b>
                                            Rareza:
                                        </b>
                                        ${arma["rarity"]}
                                        <i class="bi bi-stars"></i>
                                    </li>
                                    <li class="list-group-item">
                                        <b>
                                            Ataque base:
                                        </b>
                                        ${arma["baseAttack"]}
                                    </li>
                                    <li class="list-group-item">
                                        <b>
                                            Secundario:
                                        </b>
                                        ${arma["subStat"]}
                                    </li>
                                    <li class="list-group-item">
                                        <img src="${weaponAscensionMaterialIMG[arma["ascensionMaterial"]]}" class="img-fluid w-25 float-end rounded-4">
                                        <b>
                                            Material de Asención:
                                        </b>
                                        ${weaponAscensionMaterialTitle[arma["ascensionMaterial"]]}
                                    </li>
                                    <li class="list-group-item">
                                        <b>
                                            Ubicación:
                                        </b>
                                        ${arma["location"]}
                                    </li>
                                    <li class="list-group-item">
                                        <b>
                                            Pasiva:
                                        </b>
                                        ${arma["passiveName"]}
                                    </li>
                                    <li class="list-group-item">
                                        <b>
                                            Descripción:
                                        </b>
                                        ${arma["passiveDesc"]}
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

Arma.fetchFromAPI();