// src/components/Product.js
import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
     
      <img src={product.image} alt={product.name} style={{ width: '100px' }} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
