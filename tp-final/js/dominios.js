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
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <div class="card-header color1 text-light">
                                <h5 class="card-title text-center">
                                    ${dominio.name}
                                </h5>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading${key}">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${key}" aria-expanded="false" aria-controls="flush-${key}">
                                    Datos: 
                                </button>
                                </h2>
                                <div id="flush-${key}" class="accordion-collapse collapse" aria-labelledby="flush-heading${key}" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    ${dominio.description}
                                </div>    
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <b>
                                                Tipo:
                                            </b>
                                            ${dominio.type}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Ubicación:
                                            </b>
                                            ${dominio.location}
                                        </li>
                                        <li class="list-group-item">
                                            <b>
                                                Requisitos:
                                            </b>
                                            ${dominio.requirements} 
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