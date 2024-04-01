fetch("https://rickandmortyapi.com/api/location")
    .then((response) => response.json())
    .then((data) => cards(data.results));

function cards(stuff){
    const cardcontainer = document.querySelector("#cardGroup")
    // console.log(stuff)
    stuff.forEach(location => {
        cardcontainer.innerHTML =
        cardcontainer.innerHTML +
         `<div class="card">
         <h2 class ="locationname">${location.name}</h2>
         <h3 class = "typeoflocation">Type of Location:${location.type}</h3> 
         <h3 class = "typeofdimension">Type of Dimension:${location.dimension}</h3>
         </div>
         <br>
         `;
    });
}