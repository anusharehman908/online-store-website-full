







// src/components/ProductsList.js
import React from 'react';
import Products from '../components/Products'; // Ensure correct import path
import ProductItem from '../components/ProductItem'; // Import the ProductItem component

const ProductsList = () => {
    return (
        <div className="products-list">
            {Products.map((product) => (
                <ProductItem key={product.id} product={product} /> // Render ProductItem
            ))}
        </div>
    );
};

export default ProductsList;









































































