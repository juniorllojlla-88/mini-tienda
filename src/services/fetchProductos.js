export async function fetchProductos() {
  const respuesta = await fetch(
    "https://dummyjson.com/products?limit=12"
  );

  if (!respuesta.ok) {
    throw new Error("Error al consultar la API");
  }

  const datos = await respuesta.json();

  return datos.products;
}
