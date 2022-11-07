//Imagenes de fondo
const nacionFondo = {
    "Inazuma": "https://images7.alphacoders.com/118/1189484.jpg",
    "Liyue": "https://images.alphacoders.com/116/1169181.jpg",
    "Mondstadt": "https://images8.alphacoders.com/116/1169180.jpg"
}

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

class Nacion{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/nations/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Nacion.renderNacionData(data))
        .catch(error => alert(error));   
    }

    static renderNacionData(data){
        let nacion = data;

        nacion.forEach((id) => {
            let URL = `https://api.genshin.dev/nations/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(nacion => {
                let contenedor = document.querySelector('#container-naciones');
                let elemento = document.createElement("div")
                elemento.innerHTML = `    
                    <div class="card my-4 rounded-0">
                        <img src="${nacionFondo[nacion.name]}" alt="">
                        <div class="card-img-overlay text-light">
                        <h1 class="card-title text-center">
                        <img src="https://api.genshin.dev/nations/${id}/icon" class="img-fluid w-25 float-start border-nation rounded-4">
                                ${nacion["name"]}
                            </h1>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-3">
                            <div class="col text-center mb-3">
                                <b>
                                    Elemento
                                </b>
                                <br>
                                ${nacion["element"]}
                            </div>
                            <div class="col text-center mb-3">
                                <b>
                                    Arconte
                                </b>
                                <br>
                                ${nacion["archon"]}
                            </div> 
                            <div class="col text-center mb-3">
                                <b>
                                    Entidad controladora
                                </b>
                                <br>
                                ${nacion["controllingEntity"]}
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

Nacion.fetchFromAPI();

// Falta completar