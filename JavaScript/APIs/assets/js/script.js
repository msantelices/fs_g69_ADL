// Seleccionamos los elementos a utilizar
const buscar = document.querySelector("#buscar")
const input = document.querySelector("#input-buscar")
const pokemonContainer = document.querySelector("#pokemon")

// Función para traer los datos de un pokemon
const getPokemon = async(name)=> {
    try {
        // Realizamos la petición, pasando el nombre a la ruta de forma variable
        // y retornamos el resultado como un JSON
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const json = await res.json()

        return json
    } catch(error) {
        // Si ocurre un error, retornaremos un Not Found
        console(error)
        return "Not found"
    }
}

// Función que toma el array de tipos proveniente de los datos
// y genera un span por cada elemento. En este caso, retorna
// la string de HTML para cargarla en otro lado.
const renderTypes = (types)=> {
    let html = ""
    types.forEach((type)=> {
        html += /*html*/`
            <span class="type">${type.type.name}</span>
        `
    })

    return html
}

// Función para mostrar los datos del pokemon en pantalla
// Crea la string de HTML que incluye imagen, número, nombre
// y un div que mostrará los spans generados por renderTypes
// El resultado es cargado en el contenedor correspondiente
const renderPokemon = (data)=> {
    html = /*html*/`
        <img src="${data.sprites.front_default}">
        <h3>N° ${data.id} - <span class=name>${data.name}</span></h3>
        <div>${ renderTypes(data.types) }</div>
    `

    pokemonContainer.innerHTML = html
}

// Evento submit del buscador
buscar.addEventListener("submit", async(e)=> {
    e.preventDefault()

    // Tomamos el valor del input y lo procesamos llevando todo a minusculas
    // y quitando espacion adicionales
    const name = input.value.toLowerCase().trim()

    // Solicitamos la data utilizando el nombre del pokemon
    const data = await getPokemon(name)

    // Si el resultado es Not Found, mostraremos un mensaje de error en el
    // contenedor y retornamos
    if(data === "Not found") {
        pokemonContainer.innerHTML = "<h3>Pokémon no encontrado</h3>"
        return
    }

    // Si todo esta OK, redenrizamos el pokemon en pantalla
    renderPokemon(data)
})