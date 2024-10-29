




import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import "./Groceries.css"; // CSS file for Groceries

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Groceries = () => {
  // List of grocery products
  const groceryProducts = [

    { id:  401, name: "RITZ Original Crackers, Party Size, 1LB, 11.4 oz", image: "https://m.media-amazon.com/images/I/71UuBoYoUBL._AC_UL320_.jpg", price: "$2.50" },
 { id:  402, name: "Kraft Easy Mac", image: "https://m.media-amazon.com/images/I/612SX+0Rx7L._AC_UL320_.jpg", price: "$1.25" },
 { id:  403 , name: "Drink Low-Calorie ", image: "https://m.media-amazon.com/images/I/71OdLGrFa6L._AC_UL320_.jpg", price: "$3.00" },
 { id:  404, name:"The Only Bean Crunchy", image: "https://m.media-amazon.com/images/I/81rorFXZawL._AC_UL320_.jpg", price: "$4.00" },
 { id: 405 , name: "BODYARMOR Sports Drink", image: "https://m.media-amazon.com/images/I/61k9HbyCu1L._AC_UL320_.jpg", price: "$4.00" },
 { id:  406, name: "Ziploc Sandwich Bags, ", image: "https://m.media-amazon.com/images/I/81KCbZO2UlL._AC_UL320_.jpg", price: "$4.00" },
 { id:  407, name: "Ziploc Quart Food ", image: "https://m.media-amazon.com/images/I/81wUGqJh6OL._AC_UL320_.jpg", price: "$4.00" },
 { id:  408, name: "Splash Refresher ", image: "https://m.media-amazon.com/images/I/81YRD0+mytL._AC_UL320_.jpg", price: "$4.00" },
 { id:  409, name: "Snyder's of Hanover Pretzels,", image: "https://m.media-amazon.com/images/I/813Vz6f0uZL._AC_UL320_.jpg", price: "$4.00" },
 { id:  500, name: " 365 by Whole Foods Market,", image: "https://m.media-amazon.com/images/I/81QxhEXrzSL._AC_UL320_.jpg", price: "$4.00" },
 { id:  501, name: "OREO Cakesters ", image: "https://m.media-amazon.com/images/I/81-97poWuCS._AC_UL320_.jpg", price: "$4.00" },
 { id:  502, name: "Cheese", image: "https://m.media-amazon.com/images/I/71tbl52KzsL._AC_UL320_.jpg", price: "$4.00" },
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // Add other grocery products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media/vc/85f47394-fb51-44d3-b562-a1fdcc861a17.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Grocery Header 1" />
          </div>
          <div>
          <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f4e7f1c3-1f47-4a2f-b16b-b84cac649901.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Grocery Header 1" />
          </div>
      
        </Slider>
      </div>

      {/* Grocery Section */}
      <h1>Grocery Collection</h1>
      <div className="products">
        {groceryProducts.map((product) => (
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

export default Groceries;
