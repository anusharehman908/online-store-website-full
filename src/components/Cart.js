// import React from 'react';
// import { useCart } from '../components/CartContext';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// import './Cart.css'; // Import a CSS file for styling

// const Cart = () => {
//   const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
//   const navigate = useNavigate(); // Initialize navigate

//   // Function to handle navigation to the contact page when "Buy Now" is clicked
//   const handleBuyNow = () => {
//     navigate('/contact'); // Navigate to the contact page
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div className="cart-items">
//           {cart.map((product, index) => {
//             // Move the console.log here
//             console.log(product);

//             return (
//               <div key={index} className="cart-card">
//                 {/* Display product image */}
//                 <img
//                   src={product.image ? product.image : product.imageUrl}
//                   alt={product.name}
//                   className="cart-image"
//                 />
//                 <div className="cart-details">
//                   <h4>{product.name}</h4>
//                   <p>Price: ${product.price}</p>
//                   <div className="cart-quantity-controls">
//                     {/* Decrease quantity button */}
//                     <button onClick={() => decreaseQuantity(product.id)}>-</button>

//                     {/* Display product quantity */}
//                     <span className="product-quantity">{product.quantity}</span>

//                     {/* Increase quantity button */}
//                     <button onClick={() => addToCart(product)}>+</button>
//                   </div>
//                 </div>

//                 {/* Remove product button */}
//                 <button onClick={() => removeFromCart(product.id)} className="remove-button">
//                   Remove
//                 </button>
//               </div>
//             );
//           })}
//           {/* Add Buy Now button */}
//           <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
//         </div>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// };

// export default Cart;




























































































































import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Function to handle navigation to the contact page when "Buy Now" is clicked
  const handleBuyNow = () => {
    navigate('/contact');
  };

  // Calculate total price based on cart contents
  const totalPrice = cart.reduce((total, product) => {
    const price = parseFloat(product.price);
    return total + (isNaN(price) ? 0 : price * product.quantity);
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((product, index) => {
            // Calculate total price for each product based on quantity
            const productTotalPrice = parseFloat(product.price) * product.quantity;

            return (
              <div key={index} className="cart-card">
                <img
                  src={product.image ? product.image : product.imageUrl}
                  alt={product.name}
                  className="cart-image"
                />
                <div className="cart-details">
                  <h4>{product.name}</h4>
                  <p>Price per item: ${parseFloat(product.price).toFixed(2) || 'N/A'}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total Price for this product: ${productTotalPrice.toFixed(2) || 'N/A'}</p>
                  <div className="cart-quantity-controls">
                    <button onClick={() => decreaseQuantity(product.id)} disabled={product.quantity <= 1}>-</button>
                    <span className="product-quantity">{product.quantity}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="remove-button">
                  Remove
                </button>
              </div>
            );
          })}

          {/* Detailed price list for each product */}
          <div className="detailed-price-list">
            <h3>Price Summary</h3>
            <ul>
              {cart.map((product, index) => {
                const productTotalPrice = parseFloat(product.price) * product.quantity;
                return (
                  <li key={index}>
                    {product.name}: ${productTotalPrice.toFixed(2)} (Quantity: {product.quantity})
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Display total price for all products */}
          <div className="total-price">
            <h3>Total Price for all products: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
