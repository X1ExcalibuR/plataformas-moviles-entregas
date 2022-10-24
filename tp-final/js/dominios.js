class Dominio {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/domains/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Dominio.renderDominioData(data))
        .catch(error => alert(error));
    }

    static renderDominioData(data){
        let dominio = data;

        dominio.forEach((id, key) => {
            let URL = `https://api.genshin.dev/domains/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(dominio => {
                console.log(key)
                let contenedor = document.querySelector('#container-dominios');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <button type="button" class="btn colorPrincipal text-light" data-bs-toggle="modal" data-bs-target="#flush-${key}">
                                <h5 class="card-title text-center m-3">
                                    ${dominio["name"]}
                                </h5>
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="flush-${key}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header colorPrincipal">
                                    <h5 class="modal-title text-light">
                                        ${dominio["name"]}
                                    </h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Descripción:
                                            </b>
                                            ${dominio["description"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Tipo:
                                            </b>
                                            ${dominio["type"]}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Ubicación:
                                            </b>
                                            ${dominio["location"]}
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

Dominio.fetchFromAPI()

//Necesita arreglo