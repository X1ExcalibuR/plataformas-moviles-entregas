const colorBG = {
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

class Consumible {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/consumables/food';
        fetch(URL)
        .then(response => response.json())
        .then(data => Consumible.renderConsumibleData(data))
        .catch(error => alert(error));
    }

    static renderConsumibleData(data){
        let consumibleComida = data;
        let consumiblePocion = data;

        consumibleComida.forEach((id, key) => {
            let URL = `https://api.genshin.dev/consumables/food/`;
            fetch(URL)
            .then(response => response.json())
            .then(consumibleComida => {
                console.log(consumibleComida)
                let contenedor = document.querySelector('#container-consumibles');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <div class="card-header colorPrincipal text-light">
                                <h5 class="card-title text-center">
                                    ${consumibleComida["name"]}
                                </h5>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading${key}">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${key}" aria-expanded="false" aria-controls="flush-${key}">
                                    Datos: 
                                </button>
                                </h2>
                                <div id="flush-${key}" class="accordion-collapse collapse" aria-labelledby="flush-heading${key}" data-bs-parent="#accordionFlushExample">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Rareza maxima:
                                            </b>
                                            ${consumibleComida["name"]}
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

//Necesita arreglo