// declaration from html
const getButton = document.getElementById("button");
const result = document.getElementById("result");
// set action for button
getButton.addEventListener('click', async() => {
    // fetching main data
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36", {
        method: "GET"
    })
    const json = await response.json();
    const data = json.results;
    for(let i = 0; i < data.length; i++){
        const identification = data[i].url;
        // fetching detail data from main data
        await fetch(identification)
            .then(response => response.json())
            .then(data => {
                // declaration of data from detail data
                const pokemonNumber = data.id;
                const pokemonName = data.name;
                const pokemonPic = data.sprites.front_default;
                const pokemonType = data.types[0].type.name;

                // declaration for content
                const detailResult = document.createElement("div");
                const pokemonIdentity = document.createElement("p");
                const pokemonImage = document.createElement("img");
                const pokemonDisplayType = document.createElement("p");

                // DOM declaration for content
                detailResult.id = "pokeDetail";
                detailResult.className = pokemonType;

                // content
                pokemonIdentity.innerHTML = `${pokemonNumber} : ${pokemonName}`;
                pokemonImage.src = `${pokemonPic}`;
                pokemonDisplayType.innerHTML = `Type: ${pokemonType}`;

                // displaying content to html
                result.appendChild(detailResult);
                detailResult.appendChild(pokemonIdentity);
                detailResult.appendChild(pokemonImage);
                detailResult.appendChild(pokemonDisplayType);
            }) 
    }
})
