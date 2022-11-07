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

const characterAscensionTitle = {
    "anemo": "Anemo",
    "cryo": "Cryo",
    "electro": "Electro",
    "geo": "Geo",
    "hydro": "Hydro",
    "pyro": "Pyro",
    "traveler": "Traveler"
}

const characterExperienceIMG = {
    "wanderer's-advice": "wanderer-s-advice",
    "adventurer's-experience": "adventurer-s-experience",
    "hero's-wit": "hero-s-wit"
}

const commonAscensionTitle = {
    "slime": "Slime",
    "hilichurl-masks": "Hilichurl Masks",
    "hilichurl-arrowheads": "Hilichurl Arrowheads",
    "samachurl-scrolls": "Samachurl Scrolls",
    "treasure-hoarder-insignias": "Treasure Hoarder Insignias",
    "fatui-insignias": "Fatui Insignias",
    "whopperflower-nectar": "Whopperflower Nectar",
    "hilichurl-horns": "Hilichurl Horns",
    "ley-line": "Ley Line",
    "bone-shards": "Bone Shards",
    "mist-grass": "Mist Grass",
    "fatui-knives": "Fatui Knives",
    "chaos-parts": "Chaos Parts"
}

const commonAscensionIMG = {
    "recruit's-insignia": "recruit-s-insignia",
    "sergeant's-insignia": "sergeant-s-insignia",
    "lieutenant's-insignia": "lieutenant-s-insignia",
    "fossilized-bone-shard": "sturdy-bone-shard",
    "hunter's-sacrificial-knife": "hunter-s-sacrificial-knife",
    "agent's-sacrificial-knife": "agent-s-sacrificial-knife",
    "inspector's-sacrificial-knife": "inspector-s-sacrificial-knife"
}

const nationIcon = {
    "inazuma": "https://api.genshin.dev/nations/inazuma/icon",
    "liyue": "https://api.genshin.dev/nations/liyue/icon",
    "mondstadt": "https://api.genshin.dev/nations/mondstadt/icon"
}

const localSpecialitiesTitle = {
    "inazuma": "Inazuma",
    "liyue": "Liyue",
    "mondstadt": "Mondstadt"
}

const talentBookTitle = {
    "freedom": "Freedom",
    "resistance": "Resistance",
    "ballad": "Ballad",
    "prosperity": "Prosperity",
    "diligence": "Diligence",
    "gold": "Gold",
    "transience": "Transience",
    "elegance": "Elegance",
    "light": "Light"
}

const talentBossIMG = {
    "dvalin's-plume": "dvalin-s-plume",
    "dvalin's-claw": "dvalin-s-claw",
    "dvalin's-sigh": "dvalin-s-sigh",
    "dragon-lord's-crown": "dragon-lord-s-crown",
}

const weaponAscensionTitle = {
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

const weaponAscensionIMG = {
    "tile-of-decarabian's-tower": "tile-of-decarabian-s-tower",
    "debris-of-decarabian's-city": "debris-of-decarabian-s-city",
    "fragment-of-decarabian's-epic": "fragment-of-decarabian-s-epic",
    "scattered-piece-of-decarabian's-dream": "scattered-piece-of-decarabian-s-dream",
    "boreal-wolf's-milk-tooth": "boreal-wolf-s-milk-tooth",
    "boreal-wolf's-cracked-tooth": "boreal-wolf-s-cracked-tooth",
    "boreal-wolf's-broken-fang": "boreal-wolf-s-broken-fang",
    "boreal-wolf's-nostalgia": "boreal-wolf-s-nostalgia",
    "narukami's-wisdom": "narukami-s-wisdom",
    "narukami's-joy": "narukami-s-joy",
    "narukami's-affection": "narukami-s-affection",
    "narukami's-valor": "narukami-s-valor",
    "mask-of-the-tiger's-bite": "mask-of-the-tiger-s-bite"
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

class Material{
    constructor(){}

    static fetchFromAPI(){
        let URL1 = 'https://api.genshin.dev/materials/boss-material';
        let URL2 = 'https://api.genshin.dev/materials/character-ascension';
        let URL3 = 'https://api.genshin.dev/materials/character-experience';
        let URL4 = 'https://api.genshin.dev/materials/common-ascension';
        let URL5 = 'https://api.genshin.dev/materials/cooking-ingredients';
        let URL6 = 'https://api.genshin.dev/materials/local-specialties';
        let URL7 = 'https://api.genshin.dev/materials/talent-book';
        let URL8 = 'https://api.genshin.dev/materials/talent-boss';
        let URL9 = 'https://api.genshin.dev/materials/weapon-ascension';
        let URL10 = 'https://api.genshin.dev/materials/weapon-experience';
        fetch(URL1)
        .then(response => response.json())
        .then(data => Material.renderBossMaterialData(data))
        .catch(error => alert(error));
        fetch(URL2)
        .then(response => response.json())
        .then(data => Material.renderCharacterAscensionData(data))
        .catch(error => alert(error));
        fetch(URL3)
        .then(response => response.json())
        .then(data => Material.renderCharacterExperienceData(data))
        .catch(error => alert(error));
        fetch(URL4)
        .then(response => response.json())
        .then(data => Material.renderCommonAscensionData(data))
        .catch(error => alert(error));
        fetch(URL5)
        .then(response => response.json())
        .then(data => Material.renderCookingIngredientsData(data))
        .catch(error => alert(error));
        fetch(URL6)
        .then(response => response.json())
        .then(data => Material.renderLocalSpecialitiesData(data))
        .catch(error => alert(error));
        fetch(URL7)
        .then(response => response.json())
        .then(data => Material.renderTalentBookData(data))
        .catch(error => alert(error));
        fetch(URL8)
        .then(response => response.json())
        .then(data => Material.renderTalentBossData(data))
        .catch(error => alert(error));
        fetch(URL9)
        .then(response => response.json())
        .then(data => Material.renderWeaponAscensionData(data))
        .catch(error => alert(error));
        fetch(URL10)
        .then(response => response.json())
        .then(data => Material.renderWeaponExperienceData(data))
        .catch(error => alert(error));
    }

    static renderBossMaterialData(data){        //Arreglar
        let bossMaterial = data;
        let bossMaterial2 = Object.entries(bossMaterial)
        bossMaterial2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/boss-material`;
            fetch(URL)
            .then(response => response.json())
            .then(bossMaterial2 => {
                let contenedor = document.querySelector('#container-bossMaterial');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush1-${key}">
                                <img src="https://api.genshin.dev/materials/boss-material/${id[0]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${id[1]["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush1-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${id[1]["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Origen:
                                            </b>
                                            ${id[1]["source"]}
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

    static renderCharacterAscensionData(data){      //Arreglar
        let characterAscension = data;
        let characterAscension2 = Object.entries(characterAscension)
        characterAscension2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/character-ascension`;
            fetch(URL)
            .then(response => response.json())
            .then(characterAscension2 => {
                let contenedor = document.querySelector('#container-characterAscension');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush2-${key}">
                                <img src="https://api.genshin.dev/materials/character-ascension/${id[1]["gemstone"]["id"]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${characterAscensionTitle[id[0]]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush2-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${characterAscensionTitle[id[0]]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <b>
                                                Tipos de fragmentos
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/character-ascension/${id[1]["sliver"]["id"]}" class="img-fluid w-25 float-end rounded-4" style="background-color: ${colorBG[id[1]["sliver"]["rarity"]]};">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1]["sliver"]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id[1]["sliver"]["rarity"]} 
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/character-ascension/${id[1]["fragment"]["id"]}" class="img-fluid w-25 float-end rounded-4" style="background-color: ${colorBG[id[1]["fragment"]["rarity"]]};">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1]["fragment"]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id[1]["fragment"]["rarity"]} 
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/character-ascension/${id[1]["chunk"]["id"]}" class="img-fluid w-25 float-end rounded-4" style="background-color: ${colorBG[id[1]["chunk"]["rarity"]]};">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1]["chunk"]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id[1]["chunk"]["rarity"]} 
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/character-ascension/${id[1]["gemstone"]["id"]}" class="img-fluid w-25 float-end rounded-4" style="background-color: ${colorBG[id[1]["gemstone"]["rarity"]]};">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1]["gemstone"]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id[1]["gemstone"]["rarity"]} 
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

    static renderCharacterExperienceData(data){     //Completo
        let characterExperience = data;
        let characterExperience2 = Object.entries(characterExperience)
        let characterExperience3 = characterExperience2[0][1]
        characterExperience3.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/character-experience`;
            fetch(URL)
            .then(response => response.json())
            .then(characterExperience3 => {
                let contenedor = document.querySelector('#container-characterExperience');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush3-${key}">
                                <img src="https://api.genshin.dev/materials/character-experience/${characterExperienceIMG[id["id"]]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${id["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush3-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${id["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Experiencia:
                                            </b>
                                            ${id["experience"]} exp
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id["rarity"]}
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

    static renderCommonAscensionData(data){     //Arreglar
        let commonAscension = data;
        let commonAscension2 = Object.entries(commonAscension)
        commonAscension2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/common-ascension`;
            fetch(URL)
            .then(response => response.json())
            .then(commonAscension2 => {
                let contenedor = document.querySelector('#container-commonAscension');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush4-${key}">
                                <img src="https://api.genshin.dev/materials/common-ascension/${id[1]["items"][2]["id"]}" onerror="this.onerror=null, this.src='https://api.genshin.dev/materials/common-ascension/${commonAscensionIMG[id[1]["items"][2]["id"]]}'" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${commonAscensionTitle[id[0]]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush4-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${commonAscensionTitle[id[0]]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Experiencia:
                                            </b>
                                            ${id}
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

    static renderCookingIngredientsData(data){      //Arreglar
        let cookingIngredients = data;
        let cookingIngredients2 = Object.entries(cookingIngredients)
        cookingIngredients2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/cooking-ingredients`;
            fetch(URL)
            .then(response => response.json())
            .then(cookingIngredients2 => {
                let contenedor = document.querySelector('#container-cookingIngredients');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush5-${key}">
                                <img src="https://api.genshin.dev/materials/cooking-ingredients/${id[0]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${id[1]["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush5-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
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

    static renderLocalSpecialitiesData(data){       //Arreglar
        let localSpecialities = data;
        let localSpecialities2 = Object.entries(localSpecialities)
        localSpecialities2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/local-specialities`;
            fetch(URL)
            .then(response => response.json())
            .then(localSpecialities2 => {
                let contenedor = document.querySelector('#container-localSpecialities');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush6-${key}">
                                <img src="${nationIcon[id[0]]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${localSpecialitiesTitle[id[0]]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush6-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${localSpecialitiesTitle[id[0]]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][0]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][0]["name"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][1]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][1]["name"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][2]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][2]["name"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][3]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][3]["name"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][4]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][4]["name"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][5]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][5]["name"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][6]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][6]["name"]}
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/local-specialties/${id[1][7]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                            ${id[1][7]["name"]}
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

    static renderTalentBookData(data){       //Arreglar
        let talentBook = data;
        let talentBook2 = Object.entries(talentBook)
        talentBook2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/talent-book`;
            fetch(URL)
            .then(response => response.json())
            .then(talentBook2 => {
                let contenedor = document.querySelector('#container-talentBook');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush7-${key}">
                                <img src="https://api.genshin.dev/materials/talent-book/${id[1]["items"][2]["id"]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${talentBookTitle[id[0]]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush7-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${talentBookTitle[id[0]]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <b>
                                                Serie de libros
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/talent-book/${id[1]["items"][0]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                                ${id[1]["items"][0]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                                ${id[1]["items"][0]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/talent-book/${id[1]["items"][1]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                                ${id[1]["items"][1]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                                ${id[1]["items"][1]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/talent-book/${id[1]["items"][2]["id"]}" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                                ${id[1]["items"][2]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                                ${id[1]["items"][2]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Origen:
                                            </b>
                                                ${id[1]["source"]}
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

    static renderTalentBossData(data){       //Arreglar
        let talentBoss = data;
        let talentBoss2 = Object.entries(talentBoss)
        talentBoss2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/talent-boss`;
            fetch(URL)
            .then(response => response.json())
            .then(talentBoss2 => {
                let contenedor = document.querySelector('#container-talentBoss');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush8-${key}">
                                <img src="https://api.genshin.dev/materials/talent-boss/${id[0]}" onerror="this.onerror=null, this.src='https://api.genshin.dev/materials/talent-boss/${talentBossIMG[id[0]]}'" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${id[1]["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush8-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${id[1]["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Personajes que lo utilizan
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

    static renderWeaponAscensionData(data){       //Arreglar
        let weaponAscension = data;
        let weaponAscension2 = Object.entries(weaponAscension)
        weaponAscension2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/weapon-ascension`;
            fetch(URL)
            .then(response => response.json())
            .then(weaponAscension2 => {
                let contenedor = document.querySelector('#container-weaponAscension');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush9-${key}">
                                <img src="https://api.genshin.dev/materials/weapon-ascension/${id[1]["items"][3]["id"]}" onerror="this.onerror=null, this.src='https://api.genshin.dev/materials/weapon-ascension/${weaponAscensionIMG[id[1]["items"][3]["id"]]}'" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${weaponAscensionTitle[id[0]]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush9-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${weaponAscensionTitle[id[0]]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <b>
                                                Serie de artefactos
                                            </b>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/weapon-ascension/${id[1]["items"][0]["id"]}" onerror="this.onerror=null, this.src='https://api.genshin.dev/materials/weapon-ascension/${weaponAscensionIMG[id[1]["items"][0]["id"]]}'" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                                ${id[1]["items"][0]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                                ${id[1]["items"][0]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/weapon-ascension/${id[1]["items"][1]["id"]}" onerror="this.onerror=null, this.src='https://api.genshin.dev/materials/weapon-ascension/${weaponAscensionIMG[id[1]["items"][1]["id"]]}'" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                                ${id[1]["items"][1]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                                ${id[1]["items"][1]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/weapon-ascension/${id[1]["items"][2]["id"]}" onerror="this.onerror=null, this.src='https://api.genshin.dev/materials/weapon-ascension/${weaponAscensionIMG[id[1]["items"][2]["id"]]}'" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                                ${id[1]["items"][2]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                                ${id[1]["items"][2]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <img src="https://api.genshin.dev/materials/weapon-ascension/${id[1]["items"][3]["id"]}" onerror="this.onerror=null, this.src='https://api.genshin.dev/materials/weapon-ascension/${weaponAscensionIMG[id[1]["items"][3]["id"]]}'" class="img-fluid w-25 float-end rounded-4">
                                            <b>
                                                Nombre:
                                            </b>
                                                ${id[1]["items"][3]["name"]}
                                            <br>
                                            <b>
                                                Rareza:
                                            </b>
                                                ${id[1]["items"][3]["rarity"]}
                                            <i class="bi bi-stars"></i>
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Origen:
                                            </b>
                                                ${id[1]["source"]}
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

    static renderWeaponExperienceData(data){       //Completo
        let weaponExperience = data;
        let weaponExperience2 = Object.entries(weaponExperience)
        let weaponExperience3 = weaponExperience2[0][1]
        
        weaponExperience3.forEach((id, key) => {
            let URL = `https://api.genshin.dev/materials/weapon-experience`;
            fetch(URL)
            .then(response => response.json())
            .then(weaponExperience3 => {
                let contenedor = document.querySelector('#container-weaponExperience');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush10-${key}">
                                <img src="https://api.genshin.dev/materials/weapon-experience/${id["id"]}" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2 rounded-pill">
                                    ${id["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush10-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${id["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${id["rarity"]}
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

Material.fetchFromAPI()
// Ver apartados por sector