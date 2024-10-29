


import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import './Watches.css'

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Watches = () => {
  // List of cosmetics products
  const WatchesProducts = [
   
 { id: 2004, name: "Runway Men's Watch,", image:     'https://m.media-amazon.com/images/I/61mwxJmJT0L._AC_UL320_.jpg',  price: "$2.50" },
 { id: 2005, name: "Watch with Diamond Dial", image:      'https://m.media-amazon.com/images/I/81W2Q7mzHzS._AC_UL320_.jpg',     price: "$1.25" },
 { id: 2006, name: "Nine West Women's ", image:      'https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_UL320_.jpg',      price: "$3.00" },
 { id: 2007, name: "Automatic Watch", image:      'https://m.media-amazon.com/images/I/61poVCqlHCL._AC_UL320_.jpg',    price: "$4.00" },
 { id: 2008, name: "Watch, Patterned Dial,", image:      'https://m.media-amazon.com/images/I/81JVXUTHKVL._AC_UL320_.jpg',       price: "$4.00" },
 { id: 2009, name: "Slim Quartz 40mm Watch |", image :     'https://m.media-amazon.com/images/I/71CCvrJ5JBL._AC_UL320_.jpg',         price: "$4.00" },
 { id: 3000, name: "Dial Bangle Watch", image:      'https://m.media-amazon.com/images/I/81LnQKCQBZL._AC_UL320_.jpg',           price: "$4.00" },
 { id: 3001, name: "Nine West", image:      'https://m.media-amazon.com/images/I/61AQr8vOg5L._AC_UL320_.jpg',           price: "$4.00" },
 { id: 3002, name: "Strap Watch", image:     'https://m.media-amazon.com/images/I/51RuNa4Ti4L._AC_UL320_.jpg',      price: "$4.00" },
 { id: 3003, name: "Women's Watch with Crystal", image:     'https://m.media-amazon.com/images/I/61i5KulhUBL._AC_UL320_.jpg',      price: "$4.00" },
 
 

   
   
   
   
   
   
    

    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/aec4caa2-d8ee-4373-83d1-634448c5a059.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1409fd06-5777-4c33-b786-49d09213057b.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/cc729e3b-5c95-43f3-bc39-5e4dcd21eb10.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Watches Collection</h1>
      <div className="products">
        {WatchesProducts.map((product) => (
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

export default Watches;
