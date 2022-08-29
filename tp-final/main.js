class RandomPersonaje{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://api.genshin.dev/characters/';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomPersonaje.renderPersonajeData(data))
        .catch(error => alert(error));
    }

    static renderPersonajeData(data){
        let personaje = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
            <img src="../plataformas-moviles-entregas/IMG/Genshin Impact.png" alt="">
            <div class="card-body">
                <h5 class="card-title">
                    ${personaje.name}
                </h5>
                <p class="card-text">
                    ${personaje.description}
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    ${personaje.vision}
                </li>
            </ul>
        `;
    }
}

document.getElementById('generador').addEventListener('click', () => {
    RandomPersonaje.fetchFromAPI();
})

RandomPersonaje.fetchFromAPI();