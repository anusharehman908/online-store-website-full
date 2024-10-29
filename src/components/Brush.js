





import React from "react";
import { Link } from "react-router-dom";
import { useCart } from './CartContext';
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

const Brush = () => {
  // List of cosmetics products
  const { cart, addToCart } = useCart();
  const BrushProducts = [
    { id: 600, name: "EcoTools Start", image: "https://m.media-amazon.com/images/I/81tH7Nvr1dL._AC_UL320_.jpg", price: "$2.50" },
    { id: 601, name: "Real Perfection ", image: "https://m.media-amazon.com/images/I/71QIniLpSmL._AC_UL320_.jpg", price: "$1.25" },
    { id: 602, name: "Makeup Brush Set - 16", image: "https://m.media-amazon.com/images/I/718+7Pp51oL._AC_UL320_.jpg", price: "$3.00" },
    { id: 603, name: "Real Techniques ", image: "https://m.media-amazon.com/images/I/816ZArfjolL._AC_UL320_.jpg", price: "$4.00" },
    { id: 604, name: "Au Naturale Makeup", image: "https://m.media-amazon.com/images/I/81j6JEo5jnL._AC_UL320_.jpg", price: "$4.00" },
    { id: 605, name: ",Eyeliner", image: "https://m.media-amazon.com/images/I/81VDlvU2pRL._AC_UL320_.jpg", price: "$4.00" },
    { id: 606, name: "Real Techniques 11", image: "https://m.media-amazon.com/images/I/71N8fr1VkYL._AC_UL320_.jpg", price: "$4.00" },
    { id: 607, name: "Real Techniques Extra", image: "https://m.media-amazon.com/images/I/71Z-H2x2o4L._AC_UL320_.jpg", price: "$4.00" },
    { id: 608, name: "Makeup Brushes, 18 Pcs ", image: "https://m.media-amazon.com/images/I/61PHfKx5v+L._AC_UL320_.jpg", price: "$4.00" },
    { id: 609, name: "e.l.f. Complexion", image: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/3e376514-92c7-404d-ad92-ef8e0b28c79a._CR0,0,1200,628_SX920_QL70_.jpg", price: "$4.00" },
    { id: 700, name: "20 Pieces Makeup Brush Set", image: "https://m.media-amazon.com/images/I/51trnyGyb3L._SX300_SY300_QL70_FMwebp_.jpg", price: "$4.00" },
    { id: 701, name: "SHANY Makeup Brushes", image: "https://m.media-amazon.com/images/I/51h2RWukrEL._AC_UF480,480_SR480,480_.jpg", price: "$4.00" },
    { id: 702, name: "Enther & LaFeel", image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/893f7776-33a4-4b4b-ab3b-8a0536d6d4ba.__CR83,0,1333,1500_PT0_SX200_V1___.jpg", price: "$4.00" },
    { id: 703, name: "EcoTools New Natural Conceal, ", image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3bfc59b8-e2fd-4747-812c-ab9354772046.__CR111,0,1778,2000_PT0_SX200_V1___.jpg", price: "$4.00" }
    
    
    
    
    
    
    
    

    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fae6b138-5c89-4094-87fa-be1fa2a8c89e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1a780ccc-14ed-4543-9b82-cf8581cdd0d9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/552e6f6d-cb7d-4276-96be-2342c76cdc27.__CR0,0,1464,625_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>BRUSH Collection</h1>
      <div className="products">
        {BrushProducts.map((product) => (
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

export default Brush;
