import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			productsList: [],
			categoriesList: [],
			selectedCategory: "",
			filteredProducts: [],
			error: '',
		},

		actions: {
			handleAPIError: (error) => {
				switch (true) {
					case error.response && error.response.status === 400:
						setStore({ error: "Solicitud incorrecta. Revise los parámetros de la solicitud." });
						return false
					case error.response && error.response.status === 401:
						setStore({ error: "No estás autorizado para acceder a esta información." });
						return false
					case error.response && error.response.status === 403:
						setStore({ error: "No tienes permiso para acceder a esta información." });
						return false
					case error.response && error.response.status === 404:
						setStore({ error: "No se pudo encontrar la información solicitada." });
						return false
					case error.response && error.response.status === 429:
						setStore({ error: "Demasiadas solicitudes" });
						return false
					case error.response && error.response.status === 500:
						setStore({ error: "Se produjo un error interno en el servidor." });
						return false
					case error.response && error.response.status === 503:
						setStore({ error: "El servicio no está disponible en este momento. Inténtelo de nuevo más tarde." });
						return false
					case error.request && error.request.status === 0:
						setStore({ error: "No se pudo establecer una conexión con el servidor. Verifique su conexión a Internet." });
						return false
					case error.request:
						setStore({ error: "No se pudo procesar la solicitud debido a un error de red." });
						return false
					default:
						setStore({ error: "Se produjo un error al procesar la solicitud." });
						return false
				}
			},
			getProductsList: async () => {
				const action = getActions()
				try {
					const response = await axios.get('https://fakestoreapi.com/products');
					setStore({ productsList: response.data });
					setStore({ filteredProducts: response.data });
					return true;
				} catch (error) {
					console.log(error) 
					return action.handleAPIError(error)
				}
			},
			getCategoriesList: async () => {
				const action = getActions()
				try {
					const response = await axios.get('https://fakestoreapi.com/products/categories');
					setStore({ categoriesList: response.data });
					return true;
				} catch (error) {
					console.log(error)
					return action.handleAPIError(error)
				}
			},
			handleCategoryChange: (event) => {
				const store = getStore();
				const selectedCategory = event.target.value;
				setStore({ selectedCategory: selectedCategory });
				const filteredProducts = store.productsList.filter(product => selectedCategory === "" || product.category === selectedCategory);
				setStore({ filteredProducts: filteredProducts });
			}

		}
	};
};

export default getState;
