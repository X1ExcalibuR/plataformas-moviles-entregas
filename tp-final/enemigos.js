class Enemigo {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/enemies/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Enemigo.renderEnemigoData(data))
        .catch(error => alert(error));
    }

    static renderEnemigoData(data){
        let enemigo = data;

        enemigo.forEach((id, key) => {
            let URL = `https://api.genshin.dev/enemies/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(enemigo => {
                let contenedor = document.querySelector('#container-enemigos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn color1 text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <img src="https://api.genshin.dev/enemies/${id}/icon" alt="" class="card-img img-fluid">
                                <h5 class="card-title text-center mt-2">
                                    ${enemigo["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header color1">
                                    <h5 class="modal-title text-light">
                                        ${enemigo["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Descripción:
                                            </b>
                                            ${enemigo["description"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Región:
                                            </b>
                                            ${enemigo["region"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Tipo:
                                            </b>
                                            ${enemigo["type"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Familia:
                                            </b>
                                            ${enemigo["family"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Recompensa:
                                            </b>
                                            ${enemigo["mora-gained"]}
                                            <i class="bi bi-coin"></i>
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

Enemigo.fetchFromAPI()
// Falta completar