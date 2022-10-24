const colorBG = {
    "1": "#77787A",
    "2": "#528D78",
    "3": "#5391B8",
    "4": "#7D69A8",
    "5": "#B67126"
}

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
                console.log(artefacto)
                let contenedor = document.querySelector('#container-artefactos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/artifacts/${id}/flower-of-life" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2">
                                    ${artefacto["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header" style="background-color: ${colorBG[artefacto.max_rarity]};">
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
                                            <b>
                                                Flower of Life
                                            </b>
                                            <img src="https://api.genshin.dev/artifacts/${id}/flower-of-life" class="img-fluid w-25 float-end bg-light" alt="">
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Plume of Death
                                            </b>
                                            <img src="https://api.genshin.dev/artifacts/${id}/plume-of-death" class="img-fluid w-25 float-end bg-light" alt="">
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Sands of Eon
                                            </b>
                                            <img src="https://api.genshin.dev/artifacts/${id}/sands-of-eon" class="img-fluid w-25 float-end bg-light" alt="">
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Goblet of Eonothen
                                            </b>
                                            <img src="https://api.genshin.dev/artifacts/${id}/goblet-of-eonothem" class="img-fluid w-25 float-end bg-light" alt="">
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Circlet of Logos
                                            </b>
                                            <img src="https://api.genshin.dev/artifacts/${id}/circlet-of-logos" class="img-fluid w-25 float-end bg-light" alt="">
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