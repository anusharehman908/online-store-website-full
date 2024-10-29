// import React from 'react';

// const Mobiles = () => {
//   return (
//     <div className="product-page">
//       <h1>Mobile Collection</h1>
//       <div className="product-grid">
//         {[
//           'https://th.bing.com/th/id/OIP.6CPaekwukrQ185HLdMmlzwHaGz?w=730&h=670&rs=1&pid=ImgDetMain',
//           'https://th.bing.com/th/id/OIP.tWcGDXpQiKikyCZ5AqvTjQHaHa?rs=1&pid=ImgDetMain',
//           'https://th.bing.com/th/id/R.4d226c5713814ddbbe3e89e39c8f559f?rik=wHPZeNtYhoHQOw&pid=ImgRaw&r=0',
//           'https://i.ytimg.com/vi/ko6TzM8f314/maxresdefault.jpg',
//           'https://th.bing.com/th/id/R.fbef9e3eb499e78f9ad2ecf3d594b661?rik=gC771Z7KtnkGcQ&pid=ImgRaw&r=0',
//           'https://th.bing.com/th?id=OIF.DDEqM0WD%2fe7yRmedVDmmSQ&rs=1&pid=ImgDetMain',
//           'https://th.bing.com/th?id=OIF.pDXGGUB4z9TvUUcud%2bBiew&rs=1&pid=ImgDetMain',
//           'https://th.bing.com/th/id/OIP.vI-QcgyxLMfi8udfxWctUwHaJR?w=479&h=600&rs=1&pid=ImgDetMain',
//           'https://th.bing.com/th?id=OIF.%2fU7HKR1%2bF%2fky7byb7mI9yA&rs=1&pid=ImgDetMain',
//           'https://th.bing.com/th/id/R.0a9e791bab7562d6cc004eb03485c4b7?rik=O0yQM62hZkRmcA&pid=ImgRaw&r=0'
//           // Add more images here
//         ].map((imageUrl, index) => (
//           <div key={index} className="product-card">
//             <img src={imageUrl} alt={`Mobile ${index + 1}`} />
//             <p>Mobile {index + 1}</p>
//             <p>$799.99</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mobiles;










































































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

const  Mobiles = () => {
  // List of cosmetics products
  const MobilesProducts = [
   
 { id:6006, name: "SAMSUNG Galaxy ", image:    'https://m.media-amazon.com/images/I/71-EnPs+uQL._AC_SX385_.jpg',       price: "$2.50" },
 { id:6007, name: "Motorola Moto ", image:     'https://m.media-amazon.com/images/I/61vgbLrWDyL._AC_SX522_.jpg',   price: "$1.25" },
 { id:6008, name: "OnePlus Nord ", image:     'https://m.media-amazon.com/images/I/610qFsdenLL._AC_SX522_.jpg',    price: "$3.00" },
 { id:6009, name: "SAMSUNG Galaxy", image:   'https://m.media-amazon.com/images/I/41vU1u8DZXL._AC_SX522_.jpg',    price: "$4.00" },
 { id:7000, name: "OnePlus 12,12GB", image:   'https://m.media-amazon.com/images/I/71NW2QaIzlL.__AC_SX300_SY300_QL70_FMwebp_.jpg'   ,    price: "$4.00" },
 { id:7001, name: " A Series Cell", image :  'https://m.media-amazon.com/images/I/61A+wkddftL._AC_SX522_.jpg',price: "$4.00" },
 { id:7002, name: "OtterBox Samsung", image:   'https://m.media-amazon.com/images/I/71pQNlgpHvL._AC_SY355_.jpg ',     price: "$4.00" },
 { id:7003, name: "Motorola Moto", image:   'https://m.media-amazon.com/images/I/613O43y5UsL.__AC_SX300_SY300_QL70_FMwebp_.jpg',      price: "$4.00" },
 { id:7004, name: "iOttie Velox Pro ", image:   'https://m.media-amazon.com/images/I/61DavGI6RLL._AC_SY450_.jpg' ,     price: "$4.00" },
 { id:7005, name: "PopSockets Phone", image:   'https://m.media-amazon.com/images/I/41WyiWOMq0L._AC_SX522_.jpg',price: "$4.00" },
    

    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0e3a88d7-4128-42b2-89ff-4c04988d1a96.__CR0,0,3050,1250_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3223584d-85cf-4786-b84f-ee6a8b4f7c76.__CR0,0,3050,1250_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/08925aa5-87a0-4b65-a666-77df7dae09ed.__CR0,0,3050,1250_PT0_SX1464_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>Mobiles<span>Collection</span></h1>
      <div className="products">
        {MobilesProducts.map((product) => (
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

export default Mobiles;
