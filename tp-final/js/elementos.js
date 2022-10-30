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

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressScroll").style.width = scrolled + "%";
  }
  
window.onscroll = function () {
    progressBarScroll();
};

let brandFooter1 = document.getElementById("brandFooter1").style.backgroundColor = colorBG["Discord"];
let brandFooter2 = document.getElementById("brandFooter2").style.backgroundColor = colorBG["Reddit"];
let brandFooter3 = document.getElementById("brandFooter3").style.backgroundColor = colorBG["Twitch"];
let brandFooter4 = document.getElementById("brandFooter4").style.backgroundColor = colorBG["Youtube"];
let brandFooter5 = document.getElementById("brandFooter5").style.backgroundColor = colorBG["Facebook"];
let brandFooter6 = document.getElementById("brandFooter6").style.backgroundColor = colorBG["Twitter"];
let brandFooter7 = document.getElementById("brandFooter7").style.backgroundColor = colorBG["Instagram"];

class Elemento {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/elements/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Elemento.renderElementoData(data))
        .catch(error => alert(error));
    }

    static renderElementoData(data){
        let elemento2 = data;

        elemento2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/elements/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(elemento2 => {
                let elemento3 = Object.entries(elemento2)
                console.log(elemento3)
                let contenedor = document.querySelector('#container-elementos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col-md-8 col-sm-10 col-12 offset-md-2 offset-sm-1">
                        <div class="card">
                            <button type="button" class="btn text-light" style="background-color: ${colorBG[elemento2.name]};" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/elements/${id}/icon" class="img-fluid float-end bg-light m-2 rounded-4" width="64px" height="64px" alt="">
                                <h5 class="card-title text-start ms-3 my-4">
                                    ${elemento3[0][1]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: ${colorBG[elemento2.name]};">
                                    <h5 class="modal-title text-light">
                                        ${elemento3[0][1]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <b>
                                                Reacciones
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${elemento3[2][1][0]["name"]}
                                            <br>
                                            <b>
                                                Combinado con:
                                            </b>
                                            <br>
                                            <b>
                                                Descripción:
                                            </b>
                                            ${elemento3[2][1][0]["description"]}
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

Elemento.fetchFromAPI();

// Falta completar