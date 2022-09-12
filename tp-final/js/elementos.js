class Elemento {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/elements/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Elemento.renderElementoData(data))
        .catch(error => alert(error));
    }

    static renderElementoData(data){
        let elemento2 = data;

        elemento2.forEach((id, key) => {
            let URL = `https://api.genshin.dev/elements/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(elemento2 => {
                let contenedor = document.querySelector('#container-elementos');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <img src="https://api.genshin.dev/elements/${id}/icon" class="card-img-top img-fluid img-center bg-light" alt="">
                            <div class="card-header color1 text-light">
                                <h5 class="card-title text-center">
                                    ${elemento2.name}
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
                                            ${elemento2.reactions}
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

Elemento.fetchFromAPI();

// Falta completar