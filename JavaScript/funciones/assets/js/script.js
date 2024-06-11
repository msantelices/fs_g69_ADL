// La función enviarDatos toma nombre y apellido, genera un mensaje y lo muestra mediante un alert
const enviarDatos = (nombre, apellido)=> {
    const mensaje = "Hola " + nombre + " " + apellido + ". Tus datos se han enviado."
    alert(mensaje)
}

// Seleccionamos el formulario
const formulario = document.querySelector("#formulario")

// En el caso de un formualario, podemos escuchar el evento submit
formulario.addEventListener("submit", (e)=> {
    // Es importante capturar el evento dentro de la función anonima
    // ya que el comportamiento por defecto del formulario es recargar página
    // con e.preventDefault() evitamos esto
    e.preventDefault()

    // Traemos los inputs nombre y apellido y capturamos el valor que tienen
    const nombre = document.querySelector("#nombre").value 
    const apellido = document.querySelector("#apellido").value 

    // Si el campo nombre esta vacio, mostramos un mensaje de error
    if(!nombre) {
        alert("El nombre es obligatorio")
        // Como el evento ejecuta una función, podemos utilizar return
        // para detener su ejecución. En este caso, si el campo nombre
        // está vació, mostramos mensaje y nos detenemos aca
        return
    }

    // Lo mismo para el apellido. Una recomendación al validar campos
    // es buscar el caso que genere error, de esta forma podemos detener
    // la ejecución de la función con return y evitar continuar
    if(!apellido) {
        alert("El apellido es obligatorio")
        return
    }

    // Si los campos tienen contenido, invocamos la función enviarDatos
    // y pasamos los argumentos necesarios
    enviarDatos(nombre, apellido)
})




// Capturar el evento dentro de la función anónima no solo permite
// ejecutar preventDefault(), tambien podemos acceder al elemento
// que inició ese evento utilizando e.target
// En otros eventos, como eventos de teclado, podemos saber que tecla
// fue presionada
const btn = document.querySelector("#btn")
btn.addEventListener('click', (e)=> {
   e.target.style.background = "red"
})
