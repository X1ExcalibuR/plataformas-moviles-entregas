class Consumible {
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/consumables/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Consumible.renderConsumibleData(data))
        .catch(error => alert(error));
    }

    static renderConsumibleData(data){
        let consumible = data;

        consumible.forEach((id, key) => {
            let URL = `https://api.genshin.dev/consumables/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(consumible => {
                console.log(consumible)
                let contenedor = document.querySelector('#container-consumibles');
                let elemento = document.createElement("div")
                elemento.innerHTML = `
                    <div class="col accordion accordion-flush">
                        <div class="card h-100">
                            <div class="card-header color1 text-light">
                                <h5 class="card-title text-center">
                                    ${consumible["name"]}
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
                                            ${consumible["name"]}
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

Consumible.fetchFromAPI();

//Necesita arreglo