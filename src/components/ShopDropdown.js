// components/ShopDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ShopDropdown.css'; // Importing the CSS file

const ShopDropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Shop</button>
      <div className="dropdown-content">
        <Link to="/shop/electronics">Electronics</Link>
        <Link to="/shop/fashion">Fashion</Link>
        <Link to="/shop/groceries">Groceries</Link>
      </div>
    </div>
  );
};

export default ShopDropdown;
