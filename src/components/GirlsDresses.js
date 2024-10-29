// // GirlsDresses.js
// import React from 'react';
// // import './GirlsDresses.css'; 

// const GirlsDresses = () => {
//   const dresses = [
//     'https://th.bing.com/th/id/OIP.Q4d7QhsbC_Qx84QSyVbuZgHaJ4?rs=1&pid=ImgDetMain',
//     'https://th.bing.com/th/id/OIP.IzirHmg7-KAh7CF3ZXa_FQHaHa?rs=1&pid=ImgDetMain',
//     'https://th.bing.com/th/id/OIP.SwQxKO3GzrM_uUCjDyU5zgAAAA?rs=1&pid=ImgDetMain',
//     'https://th.bing.com/th/id/OIP.Dyu0plQ27JZ4yh6GbcY9ugHaLH?w=853&h=1280&rs=1&pid=ImgDetMain',
//     'https://th.bing.com/th/id/OIP.vAM3wppVAAgLxsRgN59UkAHaHa?rs=1&pid=ImgDetMain',
//     'https://smartsaversunite.com/wp-content/uploads/2024/09/Screen-Shot-2024-09-23-at-2.23.27-PM.png',
//     'https://th.bing.com/th/id/OIP.49-gqLauTkLigXqBLbX8UQHaHc?w=1068&h=1074&rs=1&pid=ImgDetMain',
//     'https://th.bing.com/th/id/OIP.2ASCTphLwUFBSDbR4pjJ3AHaJ4?w=480&h=640&rs=1&pid=ImgDetMain',
//     'https://th.bing.com/th/id/OIP.EBoeKkw3DsI6Toha49u-JAHaHa?rs=1&pid=ImgDetMain',
//     'https://th.bing.com/th/id/OIP.3afVTBKXQlPPOoqni6x2VwHaJH?rs=1&pid=ImgDetMain',
//   ];

//   return (
//     <div className="girls-dresses-page">
//       <h2>Girls' Dresses</h2>
//       <div className="product-grid">
//         {dresses.map((imageUrl, index) => (
//           <div key={index} className="product-card">
//             <img src={imageUrl} alt={`Girls Dress ${index + 1}`} />
//             <p>Girls Dress {index + 1}</p>
//             <p>$29.99</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GirlsDresses;



































































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

const  GirlsDresses = () => {
  // List of cosmetics products
  const GirlsDressesProducts = [
   
 { id:5006, name: "Essentials Girls ", image:  'https://th.bing.com/th/id/OIP.Q4d7QhsbC_Qx84QSyVbuZgHaJ4?rs=1&pid=ImgDetMain',                               price: "$2.50" },
 { id:5007, name: "Nautica Girls'", image:   'https://th.bing.com/th/id/OIP.IzirHmg7-KAh7CF3ZXa_FQHaHa?rs=1&pid=ImgDetMain',                            price: "$1.25" },
 { id:5008, name: "Gymboree Girls", image:   'https://th.bing.com/th/id/OIP.SwQxKO3GzrM_uUCjDyU5zgAAAA?rs=1&pid=ImgDetMain',                          price: "$3.00" },
 { id:5009, name: "Calvin Klein Girls' ", image: 'https://th.bing.com/th/id/OIP.Dyu0plQ27JZ4yh6GbcY9ugHaLH?w=853&h=1280&rs=1&pid=ImgDetMain',                               price: "$4.00" },
 { id:6000, name: "Simple Joys by Carter's Girls'", image: 'https://th.bing.com/th/id/OIP.vAM3wppVAAgLxsRgN59UkAHaHa?rs=1&pid=ImgDetMain',                       price: "$4.00" },
 { id:6001, name: "storeofbaby Girls ", image : 'https://smartsaversunite.com/wp-content/uploads/2024/09/Screen-Shot-2024-09-23-at-2.23.27-PM.png',             price: "$4.00" },
 { id:6002, name: "Nautica Girls' Short S", image:  'https://th.bing.com/th/id/OIP.49-gqLauTkLigXqBLbX8UQHaHc?w=1068&h=1074&rs=1&pid=ImgDetMain',             price: "$4.00" },
 { id:6003, name: "Yoklass Girls Summer", image:  'https://th.bing.com/th/id/OIP.2ASCTphLwUFBSDbR4pjJ3AHaJ4?w=480&h=640&rs=1&pid=ImgDetMain',                 price: "$4.00" },
 { id:6004, name: "Lucky Brand Girls' ", image:  'https://th.bing.com/th/id/OIP.EBoeKkw3DsI6Toha49u-JAHaHa?rs=1&pid=ImgDetMain',                   price: "$4.00" },
 { id:6005, name: "Girl Toddler", image:  'https://th.bing.com/th/id/OIP.3afVTBKXQlPPOoqni6x2VwHaJH?rs=1&pid=ImgDetMain',               price: "$4.00" },
                  

    // Add other cosmetics products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src= "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1dfefa08-2363-4e8b-9677-c64fae68bd49.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Cosmetics Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/2c8a17ee-22ec-4395-8e3d-54e543517494.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Cosmetics Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/601184f6-f515-41ca-88c1-43690edb6797.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="Cosmetics Header 3" />
          </div>
        </Slider>
      </div>

      {/* Cosmetics Section */}
      <h1>GirlsDresses  <span>Collection</span></h1>
      <div className="products">
        {GirlsDressesProducts.map((product) => (
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

export default GirlsDresses;
