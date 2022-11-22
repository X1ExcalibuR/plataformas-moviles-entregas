//Colores para fondos
const colorBG = {
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

class Enemigo {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/enemies/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Enemigo.renderEnemigoData(data))
        .catch(error => alert(error));
    }

    static renderEnemigoData(data){
        let enemigo = data;

        enemigo.forEach((id, key) => {
            let URL = `https://api.genshin.dev/enemies/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(enemigo => {
                let contenedor = document.querySelector('#container-enemigos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/enemies/${id}/icon" alt="" class="card-img img-fluid">
                                <h5 class="card-title text-center mt-2">
                                    ${enemigo["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${enemigo["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Descripción:
                                            </b>
                                            ${enemigo["description"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Región:
                                            </b>
                                            ${enemigo["region"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Tipo:
                                            </b>
                                            ${enemigo["type"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Familia:
                                            </b>
                                            ${enemigo["family"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Recompensa:
                                            </b>
                                            ${enemigo["mora-gained"]}
                                            <i class="bi bi-coin"></i>
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

Enemigo.fetchFromAPI()