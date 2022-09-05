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
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <img src="https://api.genshin.dev/weapons/${id}/icon" class="card-img-top img-fluid img-center bg-light" alt="">
                            <div class="card-header color1 text-light">
                                <h5 class="card-title text-center">
                                    ${arma.name}
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
                                                Tipo:
                                            </b>
                                            ${arma.type}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${arma.rarity} estrellas
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Ataque base:
                                            </b>
                                            ${arma.baseAttack}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Secundario:
                                            </b>
                                            ${arma.subStat}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Ubicación:
                                            </b>
                                            ${arma.location}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Pasiva:
                                            </b>
                                            ${arma.passiveName}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Descripción:
                                            </b>
                                            ${arma.passiveDesc}
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