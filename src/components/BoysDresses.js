

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from './CartContext';
import Slider from "react-slick"; // Import Slider
import "./BoysDresses.css"; // CSS file for Cosmetics

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const BoysDresses = () => {
  const { cart, addToCart } = useCart();
  // List of cosmetics products
  const BoysDressesProducts = [
 { id: 905, name: "Calvin Klein Boys'", image:  'https://th.bing.com/th/id/OIP.hF0uj54cKjpHCE5xh1568wAAAA?rs=1&pid=ImgDetMain', price: "$2.50" },
 { id: 807, name: "Van Heusen Boys'", image:   'https://th.bing.com/th/id/OIP.qolYCvNPsXRiUMdTKURPkAHaJx?w=500&h=660&rs=1&pid=ImgDetMain', price: "$1.25" },
 { id: 809, name: "Nautica Boys' ", image:  'https://th.bing.com/th/id/OIP.tnDOKRSsykEo7xzszPiFbgHaHa?w=1280&h=1280&rs=1&pid=ImgDetMain/', price: "$4.00" },
 { id: 900, name: "Kenneth Cole", image:    'https://i.pinimg.com/originals/e1/cd/e4/e1cde4bd9113ef343b08bc9bf1ea7519.jpg', price: "$4.00" },
 { id:901, name: "IZOD Boys' ", image:    'https://i.pinimg.com/originals/23/8b/df/238bdfb976ad8b57b536aae8a0354b13.jpg', price: "$4.00" },
 { id:902, name: "Flat Front Dress", image:    'https://th.bing.com/th/id/R.4e3c7e693c71be9c1f7d2c78e0668894?rik=MKl6HDJHZAiuYw&pid=ImgRaw&r=0', price: "$4.00" },
 { id: 903, name: "The Children's", image:'https://m.media-amazon.com/images/I/71aQMATxGBL._AC_SX342_.jpg',price: "$4.00" },
 { id: 904, name: "Big School Uniform Short", image:'https://th.bing.com/th/id/R.ccc226f5d45abdb857e1525dd6135a2b?rik=Wh49njwdndT2kw&pid=ImgRaw&r=0', price: "$4.00" },

  ]





  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4e87acde-315c-41a9-b6bf-0b919d376bc5.__CR0,0,2021,625_PT0_SX970_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/04bd12e8-cc08-462b-8432-b313099a9f22.__CR0,0,2021,625_PT0_SX970_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/03aa3085-fd66-42a1-b228-cff663a359a1.__CR0,0,2021,625_PT0_SX970_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Boys Collection</h1>
      <div className="products">
        {BoysDressesProducts.map((product) => (
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

export default BoysDresses;
