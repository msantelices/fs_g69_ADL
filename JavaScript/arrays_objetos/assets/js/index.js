// En el script de la página, tenemos el array de productos y ejecutamos la función necesaria para cargarlos
const productos = [
    {
        id: 43,
        titulo: "Cafetera magnética",
        precio: 23990,
        color: "azul",
        agotado: false,
        src: "https://placedog.net/500",
        descripcion: `Calienta tu café matutino con la nueva tecnología magnética`
    },
    {
        id: 44,
        titulo: "Cafetera magnética",
        precio: 23990,
        color: "rojo",
        agotado: true,
        src: "https://placedog.net/500",
        descripcion: `Calienta tu café matutino con la nueva tecnología magnética`
    },
    {
        id: 45,
        titulo: "Cafetera magnética",
        precio: 23990,
        color: "azul",
        agotado: false,
        src: "https://placedog.net/500",
        descripcion: `Calienta tu café matutino con la nueva tecnología magnética`
    },
    {
        id: 46,
        titulo: "Cafetera magnética",
        precio: 23990,
        color: "azul",
        agotado: false,
        src: "https://placedog.net/500",
        descripcion: `Calienta tu café matutino con la nueva tecnología magnética`
    }
]

crearGaleriaProductos("#productos", productos)


