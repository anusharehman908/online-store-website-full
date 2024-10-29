











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

const  Necklaces = () => {
  // List of cosmetics products
  const NecklacesProducts = [
   
 { id:3006 , name: "weel Gift! Gold ", image:    'https://m.media-amazon.com/images/I/41UNWfwnA6L._AC_.jpg',       price: "$2.50" },
 { id: 3007, name: "Vintage Art Deco Style", image:     'https://m.media-amazon.com/images/I/71fwp8qql6S._AC_UL320_.jpg',   price: "$1.25" },
 { id: 3008, name: "Tasiso Dainty Layered", image:     'https://th.bing.com/th/id/OIP.cknTCMEAC9gEQurNAh-ROQHaHa?rs=1&pid=ImgDetMain',    price: "$3.00" },
 { id: 3009, name: "Suplight 925 Sterling Silver", image:   'https://m.media-amazon.com/images/I/41lo9iEjRoL._AC_UL320_.jpg',    price: "$4.00" },
 { id: 4000, name: "Bridal Jewelry ", image:   'https://i.pinimg.com/originals/bd/9e/20/bd9e201381ef8f0ff978c511b98bdea4.jpg'   ,    price: "$4.00" },
 { id: 4001, name: "Women's Wedding Bridal Crystal", image :  'https://th.bing.com/th/id/OIP.rIEYlArW1pNbKerRo2NwZAAAAA?rs=1&pid=ImgDetMain',price: "$4.00" },
 { id: 4002, name: "PAGOW Red Flower ", image:   'https://m.media-amazon.com/images/I/41m1rx7JUGL._SX300_SY300_QL70_FMwebp_.jpg ',     price: "$4.00" },
 { id: 4003, name: "BriLove Women's", image:   'https://m.media-amazon.com/images/I/81497gjw8rL._AC_SY500_.jpg',      price: "$4.00" },
 { id: 4004, name: "Molie Youfir Bridal ", image:   'https://th.bing.com/th/id/OIP.VlU_8As82uH1yMjZs0OMjwHaHa?rs=1&pid=ImgDetMain' ,     price: "$4.00" },
 { id: 4005, name: "Women's Wedding ", image:   'https://i.pinimg.com/474x/d4/77/c8/d477c8313058ee587fc053fe199cb2b1.jpg',price: "$4.00" },
    

    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fccaf866-9a63-44e0-a5aa-1704ce5dfdd8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1ed73483-ef5c-4f1d-a5b2-8b4e59042f66.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3bd5c48b-4b3a-4afc-974a-446ac6ed4d35.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Necklace  <span>Collection</span></h1>
      <div className="products">
        {NecklacesProducts.map((product) => (
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

export default Necklaces;
