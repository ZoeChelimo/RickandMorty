fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => cards(data.results));

function cards(stuff){
    const cardcontainer = document.querySelector("#cardGroup")
    // console.log(stuff)
    stuff.forEach(character => {
        cardcontainer.innerHTML =
        cardcontainer.innerHTML +
         `<div class="card">
         <h2>${character.name}</h2>
         <h4>Status:${character.status}</h4> 
         <h4>Species:${character.species}</h4>
         <img src=${character.image} class ="cardimgtop"></img>
         </div>
         <br>
         `;
    });
}