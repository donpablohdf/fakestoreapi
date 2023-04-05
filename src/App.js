import React, { useState, useEffect, useContext } from "react";
import injectContext from './store/appContext';

import { Context } from "./store/appContext";
import { PropagateLoader } from 'react-spinners';
import ErrorModal from './components/ErrorModal'; // Importar el componente ErrorModal
import CategorySelector from "./components/CategorySelector"; // Impostar el selector de categorias
import ProductsList from "./components/ProductsList"; // Importar el componente que muestra los productos
import './css/App.css'

function App() {
  const { store, actions } = useContext(Context);

  // Estado para manejar el estado de carga de datos
  const [loading, setLoading] = useState(true);

  // Estado para manejar si se está redimensionando la ventana del navegador
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    // Se ejecuta al montar el componente
    const fetchAPI = async () => {
      /* 
      Aquí se podrían usar funciones para comprobar 
      si los arrays store.productsList y store.categoriesList
      contienen datos y así cargarlos directamente para minimizar llamadas a la API.
      En este caso, se realiza la llamada a la API directamente y se cargan. */
      try {
        setLoading(true); // Se muestra el estado de carga
        const productsResponse = await actions.getProductsList(); // Se obtienen los productos
        if (productsResponse) { // si hay productos se cargan las categorias
          await actions.getCategoriesList(); // Se obtienen las categorías
        }
        setLoading(false); // Se oculta el estado de carga
      } catch (error) {
        store.error = 'Error al cargar los datos'; // Se muestra un mensaje de error en caso de fallo
        setLoading(false); // Se oculta el estado de carga
      }
    }
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Función para aplicar transparencia al contenedor mientras se está modificando el tamaño de la ventana
    const handleResize = () => {
      setIsResizing(true); // Se activa el estado de redimensionamiento
      setTimeout(() => {
        setIsResizing(false); // Se desactiva el estado de redimensionamiento después de 1100ms
      }, 1100);
    }

    window.addEventListener('resize', handleResize); // Se agrega un event listener para detectar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Se remueve el event listener al desmontar el componente
    }
  }, []);

  return (
    <div className="main-container">

      {loading ? (
        // Spinner para esperar carga de datos de la API
        <div className="spinner">
          <PropagateLoader color="#123abc" loading={loading} />
        </div>
      ) : (

        <div className={`container ${isResizing ? 'resizing' : ''}`}>
          {store.error ? (
            // Componente Modal que actua si existen errores en las peticiones a la API
            <ErrorModal />
          ) : (
            // Si hay datos de la API
            <>
              {/* Componente Selector de categorias. */}
              <CategorySelector />
              {/* Componente  que muestra los productos*/}
              <ProductsList />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default injectContext(App);
