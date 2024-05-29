/* 
    Definir variables:

    Para definir variables utilizamos las palabras reservadas let (si el valor cambiará a futuro)
    o const (para valores constantes)
*/
let a = 10
const b = 20

/* 
    Podemos realizar operaciones matematicas con las variables e incluso ir guardando los resultados
    en nuevas variables.

    Para utilizar una variable solo se llama por su nombre.
*/
const resultado = a + b 
console.log(resultado)


/* 
    Se debe tener cuidado cuando se trata de sumar números y texto. Por defecto, si sumamos dos o más variables
    de tipo String (texto), sus valores serán concatenados (unidos). Cuando uno de estos valores es numérico, JS
    lo trasnformará primero a texto.
*/
const num1 = 10
const num2 = "20"

// En este ejemplo, suma será igual 1020
const suma = num1 + num2 

// Para convertir una variable de tipo a texto a número, podemos utilizar la función Number
const sumaCorregida = num1 + Number(num2)


/* 
    Seleccionar elementos desde el DOM

    Podemos tomar elementos existentes en el documento HTML y almacenarlos en una variable para manipularlos
    utilizando JavaScript

    Hay diferentes métodos. Uno de ellos es utilizando document.querySelector() quien tomará un selector tipo CSS
    y devolverá el primer elemento que encuentre
*/
const titulo = document.querySelector('#title')
const parrafo = document.querySelector('p')


/* 
    Manipulando elementos con JS

    Una vez tenemos un elemento seleccionado, podemos realizar varias manipulaciones. Algunos ejemplos son:
*/
// Cambiar contenido
titulo.innerHTML = "Chao mundo"

// Agregar CSS inline - Las propiedas CSS que se escriben con un guión, como font-family, se deben escribir en camelCase
titulo.style.color = "#ff0000"
titulo.style.fontFamily = "Arial"

// Agregar una clase
titulo.classList.add('text-style')

// Quitar una clase
titulo.classList.remove('text-style')

// Alternar clases - Si no la tiene, agrega la clase especificada, si ya la tiene, la quita del elemento
titulo.classList.toggle('text-style')



/*
    Agregando eventos

    JavaScript funciona mediante eventos. Se asocia un evento a un elemento y cuando dicho evento ocurre,
    se ejecuta un bloque de código
*/
const inputNum1 = document.querySelector('#num1')
const inputNum2 = document.querySelector('#num2')
const spanResultado = document.querySelector('#resultado')
const btnSumar = document.querySelector('#btn')

// Agregar el evento - Cuando haga click en el botón se ejecutará cierto código
btnSumar.addEventListener('click', ()=> {
    // Podemos acceder al valor de input utilizando .value
    const suma = Number(inputNum1.value) + Number(inputNum2.value)

    spanResultado.innerHTML = suma
})