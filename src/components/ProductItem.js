// src/components/ProductItem.js
import React from 'react';
import { useCart } from './CartContext';

const ProductItem = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        console.log('Product being added:', product);  // Log product to ensure it's valid
        if (product) {
            addToCart(product);
        } else {
            console.log('Product is undefined');
        }
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
