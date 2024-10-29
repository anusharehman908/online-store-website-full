
import './App.css'; // Importing the CSS file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes for routing
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import Home component

import Shop from './components/Shop'; // Import Shop component
import About from './components/About'; // Import About component
import Contact from './components/Contact'; // Import Contact component
import Footer from './components/Footer'; // Import Footer component

import Electronics from './components/Electronics'; // Import Electronics component
import Fashion from './components/Fashion'; // Import Fashion component
import Groceries from './components/Groceries'; // Import Groceries component
import Cosmetics from './components/Cosmetics'; // Import Cosmetics component
import Brush from './components/Brush'; // Import Brush component
import Bags from './components/Bags'; // Import Bags component
import BoysDresses from './components/BoysDresses'; // Import BoysDresses component
import GirlsDresses from './components/GirlsDresses'; // Import GirlsDresses component
import Laptops from './components/Laptops'; // Import Laptops component
import Mobiles from './components/Mobiles'; // Import Mobiles component
import  Necklaces from './components/Necklaces '; // Adjust the path if need
import Chair  from './components/Chairs '; // Adjust the path if needed
import Shoes from './components/Shoes'; // Import Shoes component
import Watches from './components/Watches'; // Import Watches component
import Blanket from './components/Blanket'; // Import Blanket component
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component
import ProductsList from './components/ProductsList'; // Import ProductsList component
import ProductSection from './components/ProductSection'; // Import ProductSection component
import OrderConfirmation from './components/OrderConfirmation'; // Import OrderConfirmation component

import Cart from './components/Cart'; // Import Cart component


const App = () => {
  const orderDetails = {
    name: 'John Doe',
    orderNumber: '123456789',
    message: 'Your order has been successfully processed.',
  };

  return (

      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/boys-dresses" element={<BoysDresses />} />
            <Route path="/girls-dresses" element={<GirlsDresses />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/laptops" element={<Laptops />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/necklaces" element={<Necklaces />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/chairs" element={<Chair />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/watches" element={<Watches />} />

            <Route path="/productsection" element={<ProductSection />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* ShopDropdown specific routes */}
            <Route path="/shop/electronics" element={<Electronics />} />
            <Route path="/shop/fashion" element={<Fashion />} />
            <Route path="/shop/groceries" element={<Groceries />} />

            {/* AboutDropdown specific routes */}
            <Route path="/about/cosmetics" element={<Cosmetics />} />
            <Route path="/about/blanket" element={<Blanket />} />
            <Route path="/about/brush" element={<Brush />} />

            {/* Add OrderConfirmation route */}
            <Route
              path="/order-confirmation"
              element={
                <OrderConfirmation
                  name={orderDetails.name}
                  orderNumber={orderDetails.orderNumber}
                  message={orderDetails.message}
                />
              }
            />

            {/* Cart Route */}
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </Router>
 
  );
};

export default App;
























































































