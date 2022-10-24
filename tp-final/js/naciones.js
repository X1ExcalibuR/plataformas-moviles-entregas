const nacionFondo = {
    "Inazuma": "https://images7.alphacoders.com/118/1189484.jpg",
    "Liyue": "https://images.alphacoders.com/116/1169181.jpg",
    "Mondstadt": "https://images8.alphacoders.com/116/1169180.jpg"
}

class Nacion{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/nations/';
        fetch(URL)
        .then(response => response.json())
        .then(data => Nacion.renderNacionData(data))
        .catch(error => alert(error));   
    }

    static renderNacionData(data){
        let nacion = data;

        nacion.forEach((id) => {
            let URL = `https://api.genshin.dev/nations/${id}`;
            fetch(URL)
            .then(response => response.json())
            .then(nacion => {
                let contenedor = document.querySelector('#container-naciones');
                let elemento = document.createElement("div")
                elemento.innerHTML = `    
                    <div class="card my-4 rounded-0">
                        <img src="${nacionFondo[nacion.name]}" alt="">
                        <div class="card-img-overlay text-light">
                            <h1 class="card-title text-center">
                                ${nacion["name"]}
                            </h1>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-3">
                            <div class="col text-center mb-3">
                                <b>
                                    Elemento
                                </b>
                                <br>
                                ${nacion["element"]}
                            </div>
                            <div class="col text-center mb-3">
                                <b>
                                    Arconte
                                </b>
                                <br>
                                ${nacion["archon"]}
                            </div> 
                            <div class="col text-center mb-3">
                                <b>
                                    Entidad controladora
                                </b>
                                <br>
                                ${nacion["controllingEntity"]}
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

Nacion.fetchFromAPI();

// Falta completar