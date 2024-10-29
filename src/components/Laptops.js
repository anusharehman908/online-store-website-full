





import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import "./Laptop.css"; // CSS file for Cosmetics

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Laptop = () => {
  // List of cosmetics products
  const LaptopProducts = [
   
 { id: 1005, name:"Business Laptop,", image:    'https://th.bing.com/th/id/OIP.pEoFcD0zW4S9i1pBtSIrKQHaE8?rs=1&pid=ImgDetMain',  price: "$2.50" },
 { id: 1006, name: "SAMSUNG 14", image:          'https://m.media-amazon.com/images/I/71JMU2KiBlL._AC_UF894,1000_QL80_.jpg',    price: "$1.25" },
 { id: 1007, name: "ASUS Chromebook", image:          'https://th.bing.com/th/id/R.77d5faea9859ba8c6d943d2b191cfd86?rik=Lo7UduGL7y8pWQ&pid=ImgRaw&r=0',   price: "$3.00" },
 { id: 1008, name: "HP Notebook Laptop,", image:         'https://th.bing.com/th/id/OIP.vZkSb7GIHGDs0BJp_fH6BgAAAA?w=450&h=450&rs=1&pid=ImgDetMain',  price: "$4.00" },
 { id: 1009, name: "Lenovo ThinkPad ", image:           'https://th.bing.com/th/id/OIP.TVeFxDMexsxBpbRQIPmnPQHaEd?rs=1&pid=ImgDetMain',       price: "$4.00" },
 { id: 2000, name: "Lenovo 2024", image :          'https://th.bing.com/th/id/OIP.PXjReLfF3BAfVvIg_Ml1ogHaE-?rs=1&pid=ImgDetMain',    price: "$4.00" },
 { id: 2001, name: "Lenovo Newest V15 ", image:        'https://th.bing.com/th/id/OIP.A9lfLLmrKhDM8kX0fMs5HQHaHa?rs=1&pid=ImgDetMain',  price: "$4.00" },
 { id: 2002, name: "Dell Latitude 7420 FHD", image:        'https://th.bing.com/th/id/OIP.wckuzgtznVwplh9G7ZfF1AAAAA?w=336&h=336&rs=1&pid=ImgDetMain',     price: "$4.00" },
 { id: 2003, name: "Laptop Computer", image:             'https://m.media-amazon.com/images/I/61IJV5Xzg4L._AC_SY355_.jpg',   price: "$4.00" },
   
   
   
   
   
   
    

    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cf27282e-f15a-4e59-8dca-6c4b40ef7b24.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/68e7b924-cb0e-4c32-9c44-1caa717fb932.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d2c958f8-5d35-4d66-a47e-f68bf42bf821.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Laptop Collection</h1>
      <div className="products">
        {LaptopProducts.map((product) => (
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

export default Laptop;
