import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from React 18
import App from './App';
import { CartProvider } from './components/CartContext';

// Create the root using createRoot (React 18's method)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

    <CartProvider>
      <App />
    </CartProvider>
 
);
