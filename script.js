let productos = [
    { nombre: 'huevos', imagen: 'Imagenes/Huevos.jpg', precio: '$10.00' },
    { nombre: 'auriculares', imagen: 'Imagenes/auriculares.jpg', precio: '$20.00' },
    { nombre: 'teclados', imagen: 'Imagenes/teclado blutus.jpg', precio: '$20.00' },
    { nombre: 'producto', imagen: 'Imagenes/vasos.jpg', precio: '$20.00' },
    { nombre: 'producto', imagen: 'Imagenes/Huevos.jpg', precio: '$10.00' },
    { nombre: 'producto', imagen: 'Imagenes/auriculares.jpg', precio: '$20.00' },
    { nombre: 'producto', imagen: 'Imagenes/teclado blutus.jpg', precio: '$20.00' },
    { nombre: 'producto', imagen: 'Imagenes/vasos.jpg', precio: '$20.00' },
    { nombre: 'producto', imagen: 'Imagenes/Huevos.jpg', precio: '$10.00' },
    { nombre: 'producto', imagen: 'Imagenes/auriculares.jpg', precio: '$20.00' },
    { nombre: 'producto', imagen: 'Imagenes/teclado blutus.jpg', precio: '$20.00' },
    { nombre: 'producto', imagen: 'Imagenes/vasos.jpg', precio: '$20.00' },
    // Agregar más productos si es necesario
];

let paginaActual = 0;
const productosPorPagina = 8;

function mostrarProductos() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; // Limpiar los productos anteriores

    const inicio = paginaActual * productosPorPagina;
    const fin = Math.min(inicio + productosPorPagina, productos.length);
    const productosPagina = productos.slice(inicio, fin);

    productosPagina.forEach(producto => {
        const item = document.createElement('div');
        item.className = 'product-item';
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
        `;
        grid.appendChild(item);
    });
}

function cambiarPagina(direccion) {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    paginaActual = Math.max(0, Math.min(paginaActual + direccion, totalPaginas - 1));
    mostrarProductos();
}

// Inicializar la primera página
mostrarProductos();
