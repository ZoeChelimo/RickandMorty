fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((data) => cards(data.results));

function cards(stuff){
    const cardcontainer = document.querySelector("#cardGroup")
    // console.log(stuff)
    stuff.forEach(episode => {
        cardcontainer.innerHTML =
        cardcontainer.innerHTML +
         `<div class="card">
         <h2>${episode.name}</h2>
         <h3 class="airdate">Air Date:${episode.air_date}</h3> 
         <h2 class="episode">${episode.episode}</h2>
         </div>
         <br>
         `;
    });
}