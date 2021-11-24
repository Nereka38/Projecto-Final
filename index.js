function filtrarProductos() {
  const inputFiltro = document.querySelector("#barra-busqueda");
  const listaProductos = document.querySelector("#lista-productos");
  const filtroEnMinuscula = inputFiltro.value.toLowerCase();

  for (const liProducto of listaProductos.children) {
    const textoDelProductoEnMinuscula = liProducto.textContent.toLowerCase();

    if (!textoDelProductoEnMinuscula.includes(filtroEnMinuscula)) {
      liProducto.style.display = "none";
    } else {
      liProducto.style.display = "block";
    }
  }
}
