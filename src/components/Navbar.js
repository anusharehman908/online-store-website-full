

// // // src/components/Navbar.js
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { useCart } from '../components/CartContext';
// // import { FaShoppingCart } from 'react-icons/fa'; 

// // import ShopDropdown from './ShopDropdown';
// // import AboutDropdown from './AboutDropdown';
// // import './Navbar.css';

// // const Navbar = () => {
// //   const { cart } = useCart();
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     console.log('Search Query:', searchQuery);
// //   };
// //   useEffect(() => {
// //     console.log('Navbar rendered, cart length:', cart.length);
// //   }, [cart]);
  
// //   return (
// //     <nav className="navbar">
// //       <div className="container">
// //         <div className="logo">ONLINE STORE</div>
        
// //         <form className="search-form" onSubmit={handleSearch}>
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className="search-input"
// //           />
// //           <button type="submit" className="search-button">Search</button>
// //         </form>

// //         <div className="toggle-icon" onClick={toggleMenu}>
// //           {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
// //         </div>
        
// //         <div className={`nav-links ${isOpen ? 'open' : ''}`}>
// //           <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
// //           <div onClick={toggleMenu}>
// //             <ShopDropdown /> {/* Close the menu when ShopDropdown is clicked */}
// //           </div>
// //           <div onClick={toggleMenu}>
// //             <AboutDropdown /> {/* Close the menu when AboutDropdown is clicked */}
// //           </div>
// //           <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>
// //           <Link to="/cart" className="nav-item" onClick={toggleMenu}>   <FaShoppingCart size={30} /> ({totalItems}) </Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;






















































// // src/components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../components/CartContext';
// import { FaShoppingCart } from 'react-icons/fa'; 

// import ShopDropdown from './ShopDropdown';
// import AboutDropdown from './AboutDropdown';
// import './Navbar.css';

// const Navbar = () => {
//   const { cart } = useCart();
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Search Query:', searchQuery);
//   };

//   useEffect(() => {
//     console.log('Navbar rendered, cart length:', cart.length);
//   }, [cart]);
  
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">ONLINE STORE</div>
        
//         <form className="search-form" onSubmit={handleSearch}>
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="search-input"
//           />
//           <button type="submit" className="search-button">Search</button>
//         </form>

//         <div className="toggle-icon" onClick={toggleMenu}>
//           {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
//         </div>
        
//         <div className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
          
//           {/* Wrap each dropdown in a div to control visibility */}
//           <div className="dropdown-wrapper">
//             <ShopDropdown />
//           </div>
//           <div className="dropdown-wrapper">
//             <AboutDropdown />
//           </div>
          
//           <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>
//           <Link to="/cart" className="nav-item" onClick={toggleMenu}>
//             <FaShoppingCart size={30} /> ({totalItems})
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













































































// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; 

import ShopDropdown from './ShopDropdown';
import AboutDropdown from './AboutDropdown';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  useEffect(() => {
    console.log('Navbar rendered, cart length:', cart.length);
  }, [cart]);
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">ONLINE STORE</div>
        
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>

        <div className="toggle-icon" onClick={toggleMenu}>
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </div>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
          <div className="dropdown-wrapper">
            <ShopDropdown />
          </div>
          <div className="dropdown-wrapper">
            <AboutDropdown />
          </div>
          <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>
        </div>

        {/* Shopping Cart Link (displayed only when the menu is open) */}
        {isOpen && (
          <div className="mobile-cart">
            <Link to="/cart" className="nav-item" onClick={toggleMenu}>
              <FaShoppingCart size={30} /> ({totalItems})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
