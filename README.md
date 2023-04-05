# FAKE STORE APP

Esta aplicación es una lista de productos con capacidad de filtrado por categoría usando la API <https://fakestoreapi.com>.

- La base se ha creado con *create-react-app*
- La aplicación utiliza *React* y *useContext* para gestionar el estado global de la aplicación, y hace uso de varias librerías adicionales.
- La aplicación muestra todos los productos al iniciarse por primera vez.
- Los usuarios pueden seleccionar una categoría específica en un menú desplegable y ver solo los productos que pertenecen a esa categoría.
- La aplicación muestra un modal de error en caso de que ocurra algún error en la obtención de datos.
- Se utiliza CSS responsive para mostrar correctamente todos los componentes necesarios en cualquier resolución.

## Funcionalidad

La aplicación consta de las siguientes funcionalidades principales:

- **Obtención de datos**: La aplicación obtiene una lista de productos y categorías desde la API externa <https://fakestoreapi.com/> utilizando la libreria *axios* en la funciones *actions.getProductsList()* y *actions.getCategoriesList()* de la librería de contexto *(src/store/appContext.js y src/store/flux.js)*. Los datos se obtienen en el montaje inicial del componente *App* mediante el uso del hook *useEffect*.

- **Filtrado por categoría**: Los usuarios pueden seleccionar una categoría en un menú desplegable (*select-categories)* y los productos se filtran mostrando solo los productos que pertenecen a la categoría seleccionada. Esto se logra mediante el uso del estado local *selectedCategory* y la función *handleCategoryChange()* que se ejecuta cuando se selecciona una nueva categoría.

- **Indicador de carga**: Durante la obtención de datos, se muestra un indicador de carga utilizando la librería *react-spinners*. El estado *loading* se utiliza para controlar la visibilidad del indicador de carga.

- **Transparencia del contenedor**: Mientras se está modificando el tamaño de la ventana del navegador, se aplica una transparencia al contenedor principal *(container)*. Esto se logra mediante el uso del estado local *isResizing* que se establece a *true* cuando se detecta un evento de cambio de tamaño de ventana, y luego se vuelve a *false* después de un breve retraso mediante la función *handleResize()*.

- **Modal de error**: En caso de que ocurra algún error durante la obtención de datos, se muestra un modal de error a través del estado global *store.error* que a su vez se establece en caso de error en la obtención de datos de la API.

## Patrón utilizado

En esta aplicación se utiliza el patrón de diseño *Context API*, que es una forma de gestionar el estado global en aplicaciones de *React* sin tener que pasar *props* a través de múltiples niveles de componentes. Se utiliza el hook *useContext* para acceder al contexto global y obtener datos o realizar acciones desde cualquier componente en la aplicación.

## Librerías utilizadas

- **React**: Una librería de JavaScript para la creación de interfaces de usuario.
- **react-dom**: Es una biblioteca específica de React que proporciona métodos y funcionalidades para interactuar con el DOM (Document Object Model) en aplicaciones web desarrolladas con React.
- **react-scripts**:  Es una dependencia de desarrollo en el ecosistema de React que proporciona un conjunto de scripts y configuraciones preconfiguradas para crear y desarrollar aplicaciones de React.
- **useContext**: Un hook de React que permite acceder al contexto global de la aplicación.
- **react-spinners**: Una librería de spinners animados para mostrar indicadores de carga en la interfaz de usuario.
- **axios**: Una librería para hacer solicitudes HTTP desde el navegador

## Instrucciones de instalación y uso

- Clonar el repositorio o descargar los archivos del proyecto.
- Navegar a la carpeta del proyecto y ejecutar npm install para instalar las dependencias.
- Ejecutar npm start para iniciar la aplicación en un servidor local.
- Abrir un navegador web y acceder a la URL
