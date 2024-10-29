



import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import 
import { useCart } from './CartContext';



// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Shoes = () => {
  const { cart, addToCart } = useCart();

  // List of cosmetics products
  const ShoesProducts = [
 { id: 906, name: "Polo Ralph", image:   'https://th.bing.com/th/id/OIP.XOVdjiqU2X36zbtpjaC_6AHaE8?rs=1&pid=ImgDetMain',price: "$2.50" },
 { id: 908, name: "Cole Haan ", image:    'https://th.bing.com/th/id/OIP.i283IbF7TQb-vg5aDlK5-QHaJQ?rs=1&pid=ImgDetMain',price: "$3.00" },
 { id: 909, name: "Under Armour", image:  'https://th.bing.com/th/id/OIP.G1FOJYZaSalhlgXE9u5AggAAAA?rs=1&pid=ImgDetMain', price: "$4.00" },
 { id: 1000, name: "Brooks Men’s ", image:  'https://m.media-amazon.com/images/I/71ypxFFwG+L._AC_UL320_.jpg', price: "$4.00" },
 { id: 1001, name: "Skechers ", image : 'https://m.media-amazon.com/images/I/61Z25CwqSbL._AC_SX500_.jpg',  price: "$4.00" },
 { id: 1002, name: "Stride Rite", image:  'https://th.bing.com/th/id/OIP.qZsLQvBqHteyrfjweV9jtgAAAA?w=320&h=320&rs=1&pid=ImgDetMain',  price: "$4.00" },
 { id: 1003, name: "Simple Joys ", image:  'https://th.bing.com/th/id/OIP.ZSRdkMqKSHxDtGEHckAAHQAAAA?rs=1&pid=ImgDetMain', price: "$4.00" },
 { id: 1004, name: "LAFEGEN Baby Girls ", image:  'https://m.media-amazon.com/images/I/61X9G2qAHeL._AC_SY500_.jpg',  price: "$4.00" },
    
  ]





  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5af15ca6-519e-48be-b084-3655861bc879.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8ebc1588-d367-4905-8e94-0de3e36d8013.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ebf99b1c-4857-4dff-9b30-9ae81e1f6528.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Shoes Collection</h1>
      <div className="products">
        {ShoesProducts.map((product) => (
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

export default Shoes;
