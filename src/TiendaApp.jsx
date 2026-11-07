import { useState } from "react";

import { useProductos } from "./hooks/useProductos";

import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

function TiendaApp() {

  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    setCarrito((actual) => [...actual, producto]);
  }

  function quitarProducto(id) {
    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  return (
    <div>

      <h1>Mini Tienda 🛍️</h1>

      {cargando && (
        <p className="mensaje">Cargando...</p>
      )}

      {error && (
        <p className="mensaje error">{error}</p>
      )}

      {!cargando && !error && (
        <div className="layout">

          <ProductoList
            productos={productos}
            carrito={carrito}
            onAgregar={agregarProducto}
          />

          <CarritoPanel
            carrito={carrito}
            onQuitar={quitarProducto}
            onVaciar={vaciarCarrito}
          />

        </div>
      )}

    </div>
  );
}

export default TiendaApp;
