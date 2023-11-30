// PRODUCTOS
const productos = [
    // Starwars
    {
        id: "starwars-01",
        titulo: "Pop! Rey",
        imagen: "./img/starwars/1.png",
        categoria: {
            nombre: "Star Wars",
            id: "starwars"
        },
        precio: 19990
    },
    {
        id: "starwars-02",
        titulo: "Pop! Cobb Vanth",
        imagen: "./img/starwars/2.png",
        categoria: {
            nombre: "Star Wars",
            id: "starwars"
        },
        precio: 18990
    },
    {
        id: "starwars-03",
        titulo: "Pop! Luke Skywalker",
        imagen: "./img/starwars/3.png",
        categoria: {
            nombre: "Star Wars",
            id: "starwars"
        },
        precio: 21990
    },
    {
        id: "starwars-04",
        titulo: "Pop! Darth Maul",
        imagen: "./img/starwars/4.png",
        categoria: {
            nombre: "Star Wars",
            id: "starwars"
        },
        precio: 22990
    },
    {
        id: "starwars-05",
        titulo: "Pop! Dark Trooper",
        imagen: "./img/starwars/5.png",
        categoria: {
            nombre: "Star Wars",
            id: "starwars"
        },
        precio: 17990
    },
    {
        id: "starwars-06",
        titulo: "Pop! Han Solo",
        imagen: "./img/starwars/6.png",
        categoria: {
            nombre: "Star Wars",
            id: "starwars"
        },
        precio: 23990
    },
    {
        id: "starwars-07",
        titulo: "Pop! Anakyn",
        imagen: "./img/starwars/7.png",
        categoria: {
            nombre: "Star Wars",
            id: "starwars"
        },
        precio: 22990
    },
    // Pokemon
    {
        id: "pokemon-01",
        titulo: "Pop! Scorbunny",
        imagen: "./img/pokemon/8.png",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 14990
    },
    {
        id: "pokemon-02",
        titulo: "Pop! Arcanine",
        imagen: "./img/pokemon/9.png",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 14990
    },
    {
        id: "pokemon-03",
        titulo: "Pop! Charizard",
        imagen: "./img/pokemon/10.png",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 24990
    },
    {
        id: "pokemon-04",
        titulo: "Pop! Pyduck",
        imagen: "./img/pokemon/11.png",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 14990
    },
    {
        id: "pokemon-05",
        titulo: "Pop! Evee",
        imagen: "./img/pokemon/12.png",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 15990
    },
    {
        id: "pokemon-06",
        titulo: "Pop! Alakazam",
        imagen: "./img/pokemon/13.png",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 15990
    },
    // Marvel
    {
        id: "marvel-01",
        titulo: "Pop! Party Thor",
        imagen: "./img/marvel/20.png",
        categoria: {
            nombre: "Marvel",
            id: "marvel"
        },
        precio: 19990
    },
    {
        id: "marvel-02",
        titulo: "Pop! Zombie Iron Man",
        imagen: "./img/marvel/21.png",
        categoria: {
            nombre: "Marvel",
            id: "marvel"
        },
        precio: 18990
    },
    {
        id: "marvel-03",
        titulo: "Pop! Thanos",
        imagen: "./img/marvel/22.png",
        categoria: {
            nombre: "Marvel",
            id: "marvel"
        },
        precio: 24990
    },
    {
        id: "marvel-04",
        titulo: "Pop! Iron Man",
        imagen: "./img/marvel/23.png",
        categoria: {
            nombre: "Marvel",
            id: "marvel"
        },
        precio: 31990
    },
    {
        id: "marvel-05",
        titulo: "Pop! Hulk",
        imagen: "./img/marvel/24.png",
        categoria: {
            nombre: "Marvel",
            id: "marvel"
        },
        precio: 18990
    },
    {
        id: "marvel-06",
        titulo: "Pop! Thor",
        imagen: "./img/marvel/25.png",
        categoria: {
            nombre: "Marvel",
            id: "marvel"
        },
        precio: 17990
    },
     // Disney
    {
        id: "disney-01",
        titulo: "Pop! Raya",
        imagen: "./img/disney/14.png",
        categoria: {
            nombre: "Disney",
            id: "disney"
        },
        precio: 15990
    },
    {
        id: "disney-02",
        titulo: "Pop! Zero",
        imagen: "./img/disney/15.png",
        categoria: {
            nombre: "Disney",
            id: "disney"
        },
        precio: 13990
    },
    {
        id: "disney-03",
        titulo: "Pop! Eve",
        imagen: "./img/disney/16.png",
        categoria: {
            nombre: "Disney",
            id: "disney"
        },
        precio: 18990
    },
    {
        id: "disney-04",
        titulo: "Pop! Stitch",
        imagen: "./img/disney/17.png",
        categoria: {
            nombre: "Disney",
            id: "disney"
        },
        precio: 17990
    },
    {
        id: "disney-05",
        titulo: "Pop! Merida",
        imagen: "./img/disney/18.png",
        categoria: {
            nombre: "Disney",
            id: "disney"
        },
        precio: 15990
    },
    {
        id: "disney-06",
        titulo: "Pop! Goofy",
        imagen: "./img/disney/19.png",
        categoria: {
            nombre: "Disney",
            id: "disney"
        },
        precio: 17990
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")

// MUESTRA LOS PRODUCTOS 
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);


// DIVIDE LOS PRODUCTOS EN CADA CATERORIA PARA QUE SE VEA SEGUN EL TIPO DE FUNKO
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto =>producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto =>producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los Funko Pops!";
            cargarProductos(productos);
        }

    })
});

// SUMA LOS PRODUCTOS PARA EL CARRITO DE COMPRA
function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
} 

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++ 
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// MODIFICA EL NUMERO QUE FIGURA EN EL CARRITO EN BASE A LO QUE VAMOS SELECCIONANDO DE LOS PRODCUTOS QUE QUEREMOS COMPRAR
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
