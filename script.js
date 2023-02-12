let juegos = [
  {id: 1, nombre: "Minecraft", precio: 19000, categoria: "sandbox", imgUrl: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-xbox-one.jpg", stock: 15},
  {id: 2, nombre: "GTA V", precio: 19000, categoria: "survival", imgUrl: "https://images.g2a.com/1024x768/1x1x0/grand-theft-auto-v-pc-rockstar-key-global-i10000000788017/59e5efeb5bafe304c4426c47", stock: 15},
  {id: 3, nombre: "Counter Strike GO", precio: 19000, categoria: "shooter", imgUrl: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427", stock: 15}
  ,{id: 4, nombre: "Fifa 23", precio: 19000, categoria: "sandbox", imgUrl: "https://comuesp.com/wp-content/uploads/2022/10/K1PPf4VvIh56fU2vIYM8xR6x-1-1170x658.jpg", stock: 15},
  {id: 5, nombre: "Call Of Duty", precio: 19000, categoria: "survival", imgUrl: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg", stock: 15},
  {id: 6, nombre: "Mortal Combat", precio: 19000, categoria: "shooter", imgUrl: "https://play-lh.googleusercontent.com/FHyo-8OuAN3P6_wJi21bayf8KltZ_ZWpE7n6M5lROrl-U3QeSjvbgi8clOhdaY_M5jY", stock: 15}
]


let contenedor = document.getElementById("contenedorProductos")
let contenedorCarrito = document.getElementById("contenedorCarrito")

renderizarProductos(juegos)

let carrito = []
if (localStorage.getItem("carrito")){
  carrito = JSON.parse(localStorage.getItem("carrito"))
}
renderizarCarrito(carrito)

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtradorJuegos)

function filtradorJuegos() {
  let juegosFiltrados = juegos.filter(producto => producto.nombre.toLocaleLowerCase().includes(buscador.value.toLocaleLowerCase()) || producto.categoria.toLocaleLowerCase().includes(buscador.value.toLocaleLowerCase()))
  renderizarProductos(juegosFiltrados)
}


function renderizarProductos(arrayProductos) {``

  contenedor.innerHTML = ""

  for (const producto of arrayProductos) {
          let tarjetaProducto = document.createElement("div")
          tarjetaProducto.className = "productos"
          tarjetaProducto.id = producto.id

          tarjetaProducto.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>Quedan ${producto.stock} u.</p>
          <p>Cuesta $${producto.precio} CLP</p>
          <img src=${producto.imgUrl}>
          <br>
          <button class=boton id=${producto.id} >Añadir al carrito</buton>
        `

        contenedor.appendChild(tarjetaProducto)

  }
  let botones = document.getElementsByClassName("boton")
  for (const boton of botones) {
    boton.addEventListener("click", agregarAlCarrito)
  }
}


function agregarAlCarrito(e) {
  let productoBuscado = juegos.find(producto => producto.id == e.target.id)
  let posicionDelProductoBuscado = carrito.findIndex(producto => producto.id == productoBuscado.id)
  if (posicionDelProductoBuscado != -1) {
    carrito[posicionDelProductoBuscado].unidades++
    carrito[posicionDelProductoBuscado].subtotal = carrito[posicionDelProductoBuscado].unidades * carrito[posicionDelProductoBuscado].precioUnitario
  }
  else {
    carrito.push({id: productoBuscado.id, imgUrl: productoBuscado.imgUrl, nombre: productoBuscado.nombre, precioUnitario: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio})
  }
  localStorage.setItem("carrito", JSON.stringify(carrito))
  renderizarCarrito(carrito)
}

function renderizarCarrito(arrayDeProductos) {
  contenedorCarrito.innerHTML = ''
  for (const producto of arrayDeProductos) {
    contenedorCarrito.innerHTML += `
      <div class="carrito1">
          <div class="carrito2">
            <h3>${producto.nombre}</h3>
            <img src=${producto.imgUrl}>
            <p>Precio: ${producto.precioUnitario}</p>
            <p>Cantida: ${producto.unidades}</p>
            <p>Subtotal: ${producto.subtotal}</p>
          </div>
      </div>
    `
  }

  let total = carrito.reduce((acc, valorActual) => acc + valorActual.subtotal, 0)
  contenedorCarrito.innerHTML += `
    <h3 class=total >TOTAL $${total}</h3>
  `
}

let comprar = document.getElementById("comprar")

comprar.addEventListener("click", () => {
  localStorage.removeItem("carrito")
  carrito = []
  renderizarCarrito(carrito)
})

let vaciador = document.getElementById("vaciador")

vaciador.addEventListener("click", vaciadorCarrito)

function vaciadorCarrito() {
  carrito = []
  renderizarCarrito(carrito)
  
}