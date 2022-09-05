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
                let contenedor = document.querySelector('#container-artefactos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <img src="https://api.genshin.dev/artifacts/${id}/flower-of-life" class="card-img-top img-fluid img-center bg-light" alt="">
                            <div class="card-header color1 text-light">
                                <h5 class="card-title text-center">
                                    ${artefacto.name}
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
                                            ${artefacto.max_rarity}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Bonus de 2 piezas:
                                            </b>
                                            ${artefacto.piece_bonus}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Bonus de 4 piezas:
                                            </b>
                                            ${artefacto.piece_bonus}
                                        </li>
                                        <li class="list-group-item text-center">
                                            <b>
                                                Otros artefactos
                                            </b>
                                        </li>
                                        <li class="list-group-item text-center text-decoration-underline">
                                            <img src="https://api.genshin.dev/artifacts/${id}/flower-of-life" class="img-fluid img-center bg-light" alt="">
                                            Flower of Life
                                        </li>
                                        <li class="list-group-item text-center text-decoration-underline">
                                            <img src="https://api.genshin.dev/artifacts/${id}/plume-of-death" class="img-fluid img-center bg-light" alt="">
                                            Plume of Death
                                        </li>
                                        <li class="list-group-item text-center text-decoration-underline">
                                            <img src="https://api.genshin.dev/artifacts/${id}/sands-of-eon" class="img-fluid img-center bg-light" alt="">
                                            Sands of Eon
                                        </li>
                                        <li class="list-group-item text-center text-decoration-underline">
                                            <img src="https://api.genshin.dev/artifacts/${id}/goblet-of-eonothem" class="img-fluid img-center bg-light" alt="">
                                            Goblet of Eonothen
                                        </li>
                                        <li class="list-group-item text-center text-decoration-underline">
                                            <img src="https://api.genshin.dev/artifacts/${id}/circlet-of-logos" class="img-fluid img-center bg-light" alt="">
                                            Circlet of Logos
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