// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   // Load initial cart from localStorage or use an empty array
//   const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   // Update localStorage whenever the cart state changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Function to add products to the cart
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         // Increase quantity if product already in cart
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // Function to decrease product quantity in the cart
//   const decreaseQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === productId
//             ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Prevent negative quantity
//             : item
//         )
//         .filter((item) => item.quantity > 0) // Remove product if quantity is 0
//     );
//   };

//   // Function to remove product from the cart
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
























































import React, { createContext, useContext, useState } from 'react';

// Create a Cart Context
const CartContext = createContext();

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State to hold cart items

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If the product does not exist, add it to the cart with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to decrease quantity of a product
  const decreaseQuantity = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        // If quantity is greater than 1, decrease the quantity
        setCart(cart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ));
      } else {
        // If quantity is 1, remove the product from the cart
        removeFromCart(productId);
      }
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Return the context provider with values
  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

