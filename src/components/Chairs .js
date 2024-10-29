




import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider


// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const  Chair = () => {
  // List of cosmetics products
  const ChairProducts = [
   
 
 
 { id:4008, name: "Basics Metal", image:      'https://th.bing.com/th/id/OIP.rU6YA3Y4tSxEoSH3lEDpKgHaHa?rs=1&pid=ImgDetMain',    price: "$3.00" },
 { id:4009, name: "Dining Chairs Set", image:    'https://th.bing.com/th/id/OIP.mSV-PMrmNT1gWckecKqJigHaHa?w=755&h=755&rs=1&pid=ImgDetMain',      price: "$4.00" },
 { id:5000, name: "COLAMY Upholstered", image:    'https://th.bing.com/th/id/OIP._9Ehd6_nrrRtm5BNtKPKsgAAAA?rs=1&pid=ImgDetMain',     price: "$4.00" },
 
 { id:5002, name: "Roundhill Furniture ", image:      'https://th.bing.com/th/id/OIP.k5tybwXmwxW677srl2rWBAHaE8?rs=1&pid=ImgDetMain',              price: "$4.00" },
 { id:5003, name: "CangLong Mid-Century", image:      'https://th.bing.com/th/id/OIP.5fBJ4rZ7T51Pz_Dv6a8uZQAAAA?w=430&h=430&rs=1&pid=ImgDetMain',              price: "$4.00" },
 
 
    

    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/84df120c-0519-4810-9ec2-ddd361a79a3e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9a1ec94e-e873-4253-a4de-373f23ea6f71.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f1414e2e-de43-40d5-bf84-9c18af5d2e0d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Chair  <span>Collection</span></h1>
      <div className="products">
        {ChairProducts.map((product) => (
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

export default Chair;
