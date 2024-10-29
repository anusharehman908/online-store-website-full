




import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import "./Cosmetics.css"; // CSS file for Cosmetics

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Cosmetics = () => {
  // List of cosmetics products
  const cosmeticsProducts = [
  
    { id: 301 , name: "PUR Beauty 4-in-1 Love Your Selfie Foundation", image: "https://m.media-amazon.com/images/I/71Yka487alL._AC_UL320_.jpg", price: "$2.50" },
    { id: 302, name: "YENSA Super ", image: "https://m.media-amazon.com/images/I/61vKMD8VMFL._AC_UL320_.jpg", price: "$1.25" },
    { id: 303, name: "Crepe Erase 2-Step Advanced Body Care", image: "https://m.media-amazon.com/images/I/61fMaQj9vSL._AC_UL320_.jpg", price: "$3.00" },
    { id: 304, name: "IT Cosmetics Your Most", image: "https://m.media-amazon.com/images/I/814ibe1lcpL._AC_UL320_.jpg", price: "$4.00" },
    { id: 305, name: "Revlon Age Defying", image: "https://m.media-amazon.com/images/I/71K-8ggK25L._AC_UL320_.jpg", price: "$4.00" },
    { id: 306, name: "e.l.f. Liquid Metallic Eyeshadow,", image: "https://m.media-amazon.com/images/I/61YVyDv6rbL._AC_UL320_.jpg", price: "$4.00" },
    { id: 307, name: "evlon Concealer Stick,", image: "https://m.media-amazon.com/images/I/61kxTBbLBHL._AC_UL320_.jpg", price: "$4.00" },
    { id: 308, name: "Cheese", image: "https://m.media-amazon.com/images/I/617F0F8N5UL._AC_UL320_.jpg", price: "$4.00" },
    { id: 309, name: "NYX PROFESSIONAL", image: "https://m.media-amazon.com/images/I/61oEkZwnHaL._AC_UL320_.jpg", price: "$4.00" },
    { id: 503, name: "Grande Cosmetics", image: "https://m.media-amazon.com/images/I/71rTWAD0MBL._AC_UL320_.jpg", price: "$4.00" },
    { id: 504, name: "Graftobian Glamour ", image: "https://m.media-amazon.com/images/I/71vLwx43wpL._AC_UL320_.jpg", price: "$4.00" },
    { id: 505, name: "Maybelline Super ", image: "https://m.media-amazon.com/images/I/61w0TOSAwLL._AC_UL320_.jpg", price: "$4.00" },
    { id: 506, name: "Rude Cosmetics ", image: "https://m.media-amazon.com/images/I/61UqnP6hHlL._AC_UL320_.jpg", price: "$4.00" },
    { id: 507, name: "IT Cosmetics CC+", image: "https://m.media-amazon.com/images/I/813QmoDJKEL._AC_UL320_.jpg", price: "$4.00" },
    { id: 508, name: "Almay ", image: "https://m.media-amazon.com/images/I/51F16Z5NcPL._AC_UL320_.jpg", price: "$4.00" },
    { id: 509, name: "SHANY Carry All Makeup ", image: "https://m.media-amazon.com/images/I/71ERXpLVVrL._AC_UL320_.jpg", price: "$4.00" },
  
  
  
  
  
    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/13c171bd-e810-4c2d-b5af-c1d379fa0759.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src=  "https://m.media-amazon.com/images/S/aplus-media-library-service-media/248efd60-a46d-41c6-a7ff-180a433c5773.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src=    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b6fb1b52-b55e-4a64-8ef8-7cf372105897.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Cosmetics Collection</h1>
      <div className="products">
        {cosmeticsProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            {/* Link to product detail page */}
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
