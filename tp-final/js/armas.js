const colorBG = {
    "1": "#77787A",
    "2": "#528D78",
    "3": "#5391B8",
    "4": "#7D69A8",
    "5": "#B67126"
}

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
                            <img src="https://api.genshin.dev/weapons/${id}/icon" alt="" class="card-img img-fluid img-center-weapon">
                            <h5 class="card-title text-center mt-2">
                                ${arma["name"]}
                            </h5>
                        </button>
                    </div>
                </div>
                <div class="modal fade" id="flush-${key}" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: ${colorBG[arma.rarity]};">
                                <h5 class="modal-title text-light">
                                    ${arma["name"]}
                                </h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
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