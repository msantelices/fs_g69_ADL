// Creamos una funcion que permita tomar la ID del elemento padre y la data a utilizar
// para generar contenido dinámico

const crearGaleriaProductos = (id, productos)=> {
    // Seleccionamos el el elemento padre en base a su ID
    const seccionProductos = document.querySelector(id)

    // Creamos una variable que permita guardar el contenido HTML creado como una string
    let html = ""
    
    // Iteramos sobre el array de productos generando un nuevo bloque de HTML por cada uno
    for(let producto of productos) {
        html += /*html*/`
        <article class="producto">
            <img src="${producto.src}">
            <h4>${producto.titulo}</h4>
            <p>${producto.descripcion}</p>
            <p>Color: <span class="indicador ${producto.color}"></span></p>

            <!-- Podemos utilizar operadores ternarios para agregar clases de forma condicional o para cambiar el texto de forma condicional -->
            <p class="agotado ${producto.agotado ? 'mostrar' : ''}">Agotado</p>
            <h3>$ ${producto.precio}</h3>
            <a href="/articulo/${producto.id}">Ver más</a>
        </article>
    `
    }
    
    // Finalmente cargamos todos los elementos creados en el elemento padre
    seccionProductos.innerHTML = html
}

