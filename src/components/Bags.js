





import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import "./Bags.css"; // CSS file for Cosmetics

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Bags = () => {
  // List of cosmetics products
  const BagsProducts = [
    
    { id: 704, name: "Calvin Klein Boys", image:  'https://m.media-amazon.com/images/I/91tJWpX5oGL._AC_UL320_.jpg', price: "$2.50" },
{ id: 705, name: "Formal Suit Set,", image:   'https://m.media-amazon.com/images/I/81Um5n0GxJL._AC_UL320_.jpg', price: "$1.25" },
{ id: 706, name: "Simple Joys", image:   'https://m.media-amazon.com/images/I/61mkAdhVeOL._AC_UL320_.jpg', price: "$3.00" },
{ id: 707, name: "CYHTWSDJ Shoulder", image: 'https://m.media-amazon.com/images/I/61gAZSGsx8L._AC_UL320_.jpg', price: "$4.00" },
{ id: 708, name: "Wogarl 4PCS ", image: 'https://m.media-amazon.com/images/I/918jQqNvVkL._AC_UL320_.jpg', price: "$4.00" },
{ id: 709, name: "ETRONIK Gym Bag", image: 'https://m.media-amazon.com/images/I/614zPClAs4L._AC_UL320_.jpg', price: "$4.00" },
{ id: 800, name: "GUESS Noelle ", image: 'https://m.media-amazon.com/images/I/71ZcH1Tdn6L._AC_UL320_.jpg', price: "$4.00" },
{ id: 801, name: "PU Leather Backpack", image: 'https://m.media-amazon.com/images/I/71JHxpJL9DL._AC_UL320_.jpg', price: "$4.00" },
{ id: 802, name: "sqlp Large Work", image: 'https://m.media-amazon.com/images/I/51psoco8fSL._AC_UL320_.jpg', price: "$4.00" },
{ id: 803, name: "Gladdon Quilted Leather", image: 'https://m.media-amazon.com/images/I/8196So5nFAL._AC_UL320_.jpg', price: "$4.00" },




    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/594a9c61-8b77-4710-a259-93cd45fc050f.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/14ed9973-1c9b-4d18-9b8e-dc67247dbf04.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/6406cb2f-ab6b-428e-bd4e-ef54509e44b4.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>BagsCollection</h1>
      <div className="products">
        {BagsProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            
          <Link to={`/product/${product.id}`}>
            <button>View Details</button> 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bags;











































































