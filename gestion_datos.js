console.log("Gestion de Datos con Objetos, Maps y Sets.");

const productos = {
    1: {id: 1, nombre: "laptop", precio: 1500},
    2: {id: 2, nombre: "mouse", precio: 25},
    3: {id: 3, nombre: "teclado", precio: 50},
    4: {id: 4, nombre: "teclado", precio: 50},
    5: {id: 5, nombre: "savia", precio: 50}
};
console.log("Objeto Productos", productos);

//Creacion de Set 
const setProductos = new Set();
for (clave in productos){
    let producto = productos[clave];
    setProductos.add(producto.nombre);
}
console.log("Set Productos Únicos", setProductos);

//Creacion Map
const mapProductos = new Map();
for (clave in productos){
    let producto = productos[clave];
    mapProductos.set(producto.id, producto);
}
console.log("Map de Productos y Categorias:", mapProductos);


//Recorrer el objeto productos
for (const id in productos) {
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

//Recorrer el Set
for (const producto of setProductos) {
    console.log("Producto único:", producto);
}

//Recorrer Map
mapProductos.forEach((producto, categoria) => {
    console.log(`categoria: ${categoria}, Producto: ${producto}`);
});

//Validaciones
console.log("Pruebas completas de gestion de datos");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos unicos (Set):", setProductos);
console.log("Categorias y productos (Map):", mapProductos);
