import React, { useState } from 'react';
import './ProductSection.css';
import { useCart } from './CartContext';

const ProductSection = ({ title, products, link }) => {
  const titleParts = title.split(' ');
  const { addToCart, cart } = useCart();  // Get addToCart and cart from CartContext
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);  // Debugging log
    setSelectedProduct(product); // Set the selected product when a product is clicked
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      console.log("Adding product to cart:", selectedProduct);
      addToCart(selectedProduct);  // Call addToCart from CartContext
      setSelectedProduct(null); // Clear the selected product after adding to cart
    }
  };

  return (
    <div className="product-section">
      <h2 className="section-title">
        {titleParts[0]} <span>{titleParts[1]}</span>
      </h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-item"
            onClick={() => handleProductClick(product)} // Handle click to select product
          >
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <a href={link} className="view-more-link">More</a>

      {/* Display selected product details */}
      {selectedProduct && (
        <div className="product-details">
          <h3>Product Details</h3>
          <div className='p-img'>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
          </div>
          <h4>{selectedProduct.name}</h4>
          <p>{selectedProduct.price}</p>
          <p>Description: WELCOME TO THE MY WEBSITE for product description and reviews.</p>
          <button type="button" onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={() => setSelectedProduct(null)} className="close-button">Close</button>
        </div>
      )}

      {/* Display cart items using global cart from CartContext */}
      {cart.length > 0 && (
        <div className="cart">
          <h3>Your Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
