// Seleciconamos el formulario, input y contenedor de las tareas
const formulario = document.querySelector('#formulario')
const inputTarea = document.querySelector('#tarea')
const listaTareas = document.querySelector('#lista-tareas')

// Definimos el array que guardará las tareas. En este caso, tiene 3 tareas por defecto
let tareas = [
    { id: 1, texto: "Tarea 1", completa: false },
    { id: 2, texto: "Tarea 2", completa: true },
    { id: 3, texto: "Tarea 3", completa: false }
]

// Función para cargar las tareas en pantalla
const renderTareas = ()=> {
    // Crea una variable para guardar temporalmente el contenido
    let html = ""

    // Por cada tarea del array, genera un elemento li, el cual tiene una ID que usaremos
    // para identificar cada tarea y manipular el array. Gracias a un operador ternario
    // se agrega condicionalmente una clase para las tareas completadas
    tareas.forEach((tarea)=> {
        html += `
            <li id="${tarea.id}">
                <span class="${tarea.completa ? 'completa' : ''}">${tarea.texto}</span>
                <button class="completar">Completar</button>
                <button class="eliminar">Eliminar</button>
            </li>
        `
    })

    // Se carga el contenido en pantalla
    listaTareas.innerHTML = html

    // Agregamos los eventos que tendrán los botones
    completarTareas()
    eliminarTareas()
}

// Funcion para agregar la accion de completar una tarea
const completarTareas = ()=> {
    // Seleccionamos todos los botones completar
    const botones = document.querySelectorAll("#lista-tareas .completar")

    // Por cada boton, agregamos un evento click
    botones.forEach((btn)=> {
        btn.addEventListener('click', ()=> {
            // Cuando el evento ocurra, buscaremos gracias a la ID el index en el array de la tarea correspondiente
            // Como en el elemento HTML la ID pertenece al padre del boton, utilizamos parentNode
            const index = tareas.findIndex((elemento)=> elemento.id == btn.parentNode.id)

            // Al tener el index, podemos acceder al array de tareas en esa posicion, acceder al campo completa
            // y modificar su valor. Como es booleano, podemos reasignarlo a su opuesto para gener un toggle
            tareas[index].completa = !tareas[index].completa
            
            // Volvemos a llamar a renderTareas para generar una versión actualizada del listado de tareas
            renderTareas()
        })
    })
}

// Funcion para agregar la acción de eliminar una tarea
const eliminarTareas = ()=> {
    // Seleccionamos los botones de eliminar
    const botones = document.querySelectorAll("#lista-tareas .eliminar")

    // Por cada boton, agregamos un evento click
    botones.forEach((btn)=> {
        btn.addEventListener("click", ()=> {
            // Para eliminar la tarea podemos buscar el index de la tarea correspondiente y luego utilizar splice
            // o podemos utilizar filter para devolver todas las tareas cuya ID no sea la de la tarea a eliminar

            // const index = tareas.findIndex((elemento)=> elemento.id == btn.parentNode.id)
            // tareas.splice(index, 1)
            tareas = tareas.filter((elemento)=> elemento.id != btn.parentNode.id)

            // Actualizamos el listado de tareas en patanlla
            renderTareas()
        })
    })
}


// Al cargar la página, agregamos el evento al formulario
formulario.addEventListener('submit', (e)=> {
    e.preventDefault()

    // Creamos un nuevo objeto tarea que tiene una ID, el contenido y su campo completa como false
    const nuevaTarea = {
        id: Date.now(),
        texto: inputTarea.value,
        completa: false
    }
    // Guardamos esta nueva tarea en el array de tareas
    tareas.push(nuevaTarea)

    // Hacemos un reset del input
    inputTarea.value = ""

    // Actualizamos el listado de tareas en pantalla
    renderTareas()
})

// Como tenemos tareas por defecto, debemos ejecutar renderTareas al momento de cargar la página
// para mostrar las tareas que ya vienen en el array
renderTareas()
