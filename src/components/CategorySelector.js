import React, { useContext } from "react";
import { Context } from "../store/appContext";
import '../css/CategorySelector.css'

const CategorySelector = () => {
    const { store, actions } = useContext(Context);
    const { categoriesList } = store;

    return (
        <div className="categories-wrapper">
            <select className="select-categories" onChange={actions.handleCategoryChange}>
                <option value="">All categories</option>
                {categoriesList.map(category => (
                    <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
