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

class Elemento {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/elements/';
        fetch(URL)
        .then(response => response.json())
        .then(data => {Elemento.renderElementoData(data)})
        .catch(error => alert(error));
    }

    static renderElementoData(data){
        let elementoGI = data;
        elementoGI.forEach((id, key) => {
            let URL = `https://api.genshin.dev/elements/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(elementoGI => {
                let contenedor = document.querySelector('#container-elementos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col-md-8 col-sm-10 col-12 offset-md-2 offset-sm-1">
                        <div class="card">
                            <button type="button" class="btn text-light" style="background-color: ${colorBG[elementoGI.name]};" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/elements/${id}/icon" class="img-fluid float-end bg-light m-2 rounded-4" width="64px" height="64px" alt="">
                                <h5 class="card-title text-start ms-3 my-4">
                                    ${elementoGI.name}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: ${colorBG[elementoGI.name]};">
                                    <h5 class="modal-title text-light">
                                        ${elementoGI.name}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul id="container-reacciones-${elementoGI.name}" class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <b>
                                                Reacciones
                                            </b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                contenedor.appendChild(elemento);

                let elementoReaccion = elementoGI["reactions"]
                elementoReaccion.forEach((id, key) => {
                    let contenedor2 = document.getElementById(`container-reacciones-${elementoGI.name}`);
                    let elemento2 = document.createElement("div");
                    let elementoReaccionElemento = elementoReaccion[key]["elements"]
                    elemento2.innerHTML = `
                        <li class="list-group-item">
                            <b>
                                Nombre:
                            </b>
                            ${elementoReaccion[key]["name"]}
                            <br>
                            <b>
                                Combinado con:
                            </b>
                            ${elementoReaccionElemento}, 
                            <div id="container-reacciones-elemento-${elementoGI.name}"></div>
                            <br>
                            <b>
                                Descripción:
                            </b>
                            ${elementoReaccion[key]["description"]}
                        </li>
                    `;
                    console.log(elementoGI["name"] + "\nCombinado con:\n"  + elementoReaccionElemento)    
                    contenedor2.appendChild(elemento2);
                });

                /*elementoReaccionElemento.forEach((id, key) =>{
                    let contenedor3 = document.getElementById(`container-reacciones-elemento-${elementoGI.name}`);
                    let elemento3 = document.createElement("div");
                    elemento3.innerHTML = `
                        ${elementoReaccionElemento[key]}
                    `;
                    contenedor3.appendChild(elemento3);
                })*/
            })
            .catch(error => alert(error));
        });
    }
}

Elemento.fetchFromAPI();

// Falta completar
