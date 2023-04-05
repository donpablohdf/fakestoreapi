import React, { useContext } from "react";
import { Context } from "../store/appContext";
import '../css/ProductsList.css'

const ProductsList = () => {
    const { store} = useContext(Context);

    return (
        <div className="products-wrapper">
            {store.filteredProducts.length > 0 && store.filteredProducts.map(product => (
                <div className="product-card" key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Price: {product.price} €</p>
                    <img src={product.image} alt={product.title} />
                </div>
            ))}
        </div>
    )
}
export default ProductsList;