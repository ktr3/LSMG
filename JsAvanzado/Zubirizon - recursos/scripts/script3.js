function logOut() {
    // Limpiar el array de productos y actualizar la lista de productos
    products = [];
    updateProductList();

    // Redirigir la página a index.html
    window.location.href = "../index.html";
}
