/*
    Operadores de comparación:
    ==  Igual que (valores)
    === Igual que (valor y tipo)
    !=  No es igual (valores)
    !== No es igual (valor y tipo)
    <   Menor que
    <=  Menor o igual que
    >   Mayor que
    >=  Mayor o igual que
    !   Negación
    &&  Y
    ||  O
*/

const num1 = 10
const num2 = 20

if(num1 < num2) {
    alert("El número 1 es menor que el número 2")
}


/*
    Si pasamos directamente una variable a la condición, sin
    utilizar operadores, JavaScript evaluará si es verdadera o falsa
    en el caso de ser de tipo booleano
*/

const admin = true
if(admin) {
    alert("Eres administrador")
}

/* 
    Si no es de tipo booleano, evaluará si tiene contenido, lo que dará como
    resultado true o si es un valor vacío (false)

    Una string vacia (""), el número 0 o el valor null evaluan como false
*/

const username = ""
if(!username) {
    alert("Ingresa tu nombre de usuario")
}



/*
    Si utilizamos else podemos ejecutar código cuando la condición
    no se cumpla
*/

const edad = 21
if(edad >= 18) {
    alert("Eres mayor de dad")
} else {
    alert("No eres mayor de edad")
}


/* 
    Si necesitamos evaluar varias condiciones podemos utilizar else if
    Las condiciones se evaluan en orden y cuando una de ellas se cumple,
    se ejecutará ese bloque de código y saltará el resto. Si ninguna condicion
    se cumple, entonces ejecutará el código del bloque else
*/

const viewport = 500

if(viewport < 576) {
    alert('xs')
} else if(viewport < 768) {
    alert("sm")
} else if(viewport < 992) {
    alert("md")
} else {
    alert("xl")
}


// Ejemplo con manipulación del DOM
const pass = document.querySelector("#pass")
const btn = document.querySelector("#btn")
const msg = document.querySelector("#msg")

btn.addEventListener("click", ()=> {
    if(pass.value === "secreto") {
        msg.innerHTML = "Ingresaste!"
    } else {
        msg.innerHTML = "La contraseña es incorrecta"
    }
})