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

let personajesIndex1 = document.getElementById("personajesIndex1").style.backgroundColor = colorBG["Geo"];
let personajesIndex2 = document.getElementById("personajesIndex2").style.backgroundColor = colorBG["Electro"];
let personajesIndex3 = document.getElementById("personajesIndex3").style.backgroundColor = colorBG["Anemo"];
let personajesIndex4 = document.getElementById("personajesIndex4").style.backgroundColor = colorBG["Cryo"];
let personajesIndex5 = document.getElementById("personajesIndex5").style.backgroundColor = colorBG["Pyro"];
let personajesIndex6 = document.getElementById("personajesIndex6").style.backgroundColor = colorBG["Hydro"];

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

/*
Armas: Arreglar imagenes
Artefactos: Completo
Consumibles: Completo
Dominios: Dejarlos mas bonitos
Elementos: Hacer que se repitan
Enemigos: Completo
Materiales: Corregir varias cosas
Naciones: Completo
Personajes: Completo
*/