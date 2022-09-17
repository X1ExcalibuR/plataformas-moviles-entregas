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
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn color1 text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/characters/${id}/icon-big" alt="" class="card-img img-fluid img-center-character">
                                <h5 class="card-title text-center mt-2">
                                    ${personaje["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header color1">
                                    <h5 class="modal-title text-light">
                                        ${personaje["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://api.genshin.dev/characters/${id}/card" alt="" class="img-fluid w-100 rounded">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Visión:
                                            </b>
                                            ${personaje["vision"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Arma:
                                            </b>
                                            ${personaje["weapon"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Nación:
                                            </b>
                                            ${personaje["nation"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Afilación:
                                            </b>
                                            ${personaje["affiliation"]}
                                        </li>
                                        <li class="list-group-item align-middle">
                                            <b>
                                                Constelación:
                                            </b>
                                            ${personaje["constellation"]}
                                            <img src="https://api.genshin.dev/characters/${id}/constellation" alt="" class="img-fluid w-25 float-end rounded-4">
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Rareza:
                                            </b>
                                            ${personaje["rarity"]}
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
}

Personaje.fetchFromAPI();