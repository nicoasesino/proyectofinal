let juegos = [
    {id: 1, nombre: "Minecraft", precio: 19.000, categoria: "sandbox", imgUrl: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-xbox-one.jpg", stock: 15},
    {id: 2, nombre: "GTA V", precio: 19.000, categoria: "survival", imgUrl: "https://images.g2a.com/1024x768/1x1x0/grand-theft-auto-v-pc-rockstar-key-global-i10000000788017/59e5efeb5bafe304c4426c47", stock: 15},
    {id: 3, nombre: "Counter Strike GO", precio: 19.000, categoria: "shooter", imgUrl: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427", stock: 15}
    ,{id: 1, nombre: "Minecraft", precio: 19.000, categoria: "sandbox", imgUrl: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-xbox-one.jpg", stock: 15},
    {id: 2, nombre: "GTA V", precio: 19.000, categoria: "survival", imgUrl: "https://images.g2a.com/1024x768/1x1x0/grand-theft-auto-v-pc-rockstar-key-global-i10000000788017/59e5efeb5bafe304c4426c47", stock: 15},
    {id: 3, nombre: "Counter Strike GO", precio: 19.000, categoria: "shooter", imgUrl: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427", stock: 15}
    ,{id: 1, nombre: "Minecraft", precio: 19.000, categoria: "sandbox", imgUrl: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-xbox-one.jpg", stock: 15},
    {id: 2, nombre: "GTA V", precio: 19.000, categoria: "survival", imgUrl: "https://images.g2a.com/1024x768/1x1x0/grand-theft-auto-v-pc-rockstar-key-global-i10000000788017/59e5efeb5bafe304c4426c47", stock: 15},
    {id: 3, nombre: "Counter Strike GO", precio: 19.000, categoria: "shooter", imgUrl: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427", stock: 15}
]


let contenedor = document.getElementById("contenedorProductos")


    
for (const producto of juegos) {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "productos"
        tarjetaProducto.id = producto.id

        tarjetaProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Quedan ${producto.stock} u.</p>
        <p>Cuesta $${producto.precio.toFixed(3)}</p>
        <img src=${producto.imgUrl}>
        <br>
        <button>Añadir al carrito</buton>
      `
    
      contenedor.appendChild(tarjetaProducto)
    
}
    










