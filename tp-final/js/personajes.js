class Personaje{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/characters/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Personaje.renderPersonajeData(data))
        .catch(error => alert(error));   
    }

    static renderPersonajeData(data){
        let personaje = data;

        personaje.forEach((id, key) => {
            let URL = `https://api.genshin.dev/characters/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(personaje => {
                let contenedor = document.querySelector('#container-personajes');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <img src="https://api.genshin.dev/characters/${id}/card" class="card-img-top img-fluid img-center bg-light" alt="">
                            <div class="card-header color1 text-light">
                                <h5 class="card-title text-center">
                                    ${personaje.name}
                                </h5>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading${key}">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${key}" aria-expanded="false" aria-controls="flush-${key}">
                                    Descripción: 
                                </button>
                                </h2>
                                <div id="flush-${key}" class="accordion-collapse collapse" aria-labelledby="flush-heading${key}" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        ${personaje.description}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Visión:
                                            </b>
                                            ${personaje.vision}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Arma:
                                            </b>
                                            ${personaje.weapon}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Nación:
                                            </b>
                                            ${personaje.nation}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Afilación:
                                            </b>
                                            ${personaje.affiliation}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Constelación:
                                            </b>
                                            ${personaje.constellation}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${personaje.rarity} estrellas
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

Personaje.fetchFromAPI();