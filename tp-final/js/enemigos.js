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
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <img src="https://api.genshin.dev/enemies/${id}/icon" class="card-img-top img-fluid img-center bg-light" alt="">
                            <div class="card-header color1 text-light">
                                <h5 class="card-title text-center">
                                    ${enemigo.name}
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
                                                Reacciones:
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
}

Enemigo.fetchFromAPI()
// Falta completar