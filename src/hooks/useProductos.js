
import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;

    async function cargarProductos() {
      try {
        setCargando(true);
        setError("");

        const datos = await fetchProductos();

        if (activo) {
          setProductos(datos);
        }
      } catch (err) {
        console.error("Error:", err);

        if (activo) {
          setError("No se pudieron cargar los productos. Revisa tu internet.");
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarProductos();

    return () => {
      activo = false;
    };
  }, []);

  return { productos, cargando, error };
}
