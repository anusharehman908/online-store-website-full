import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider
import "./Fashion.css"; // Update the CSS file name if needed

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Fashion = () => {
  // List of fashion products
  const fashionProducts = [

    { id: 10, name: "Nine West Women's Tri Tone Bangle Bracelet", image: "https://m.media-amazon.com/images/I/51Hz4CdbxxL._AC_UL320_.jpg", price: "$25" },
    { id: 20, name: "Gem Stone King 925 Sterling", image: "https://m.media-amazon.com/images/I/61eQNxhfhVL._AC_SY500_.jpg", price: "$30" },
    { id: 30, name: "Gem Stone King ", image: "https://m.media-amazon.com/images/I/6118kBGy7TL._AC_SY500_.jpg", price: "$70" },
    { id: 40, name: "Betsey Johnson", image: "https://m.media-amazon.com/images/I/71r7eWuCsaL._AC_UL320_.jpg", price: "$100" },
    { id: 50, name: "Bulova Mens Automatic ", image: "https://m.media-amazon.com/images/I/61INQ7Y4P4L._AC_UL320_.jpg", price: "$100" },
    { id: 60, name: "laxizar 18 Pcs ", image: "https://m.media-amazon.com/images/I/81VxdN7le+L._AC_UL320_.jpg", price: "$100" },
    { id: 70, name: "NINE WEST Women's", image: "https://m.media-amazon.com/images/I/81L3DKxMaXL._AC_UL320_.jpg", price: "$100" },
    { id: 80, name: "Kendra Scott Mini Elisa", image: "https://m.media-amazon.com/images/I/61o4yF407GL._AC_UL320_.jpg", price: "$100" },
    { id: 90, name: "Guess Hinged ", image: "https://m.media-amazon.com/images/I/71PkhOo1muL._AC_UL320_.jpg", price: "$100" },
    { id: 100, name: "FAXHION 36 Pairs Gold Earrings", image: "https://m.media-amazon.com/images/I/81ho8aIItXL._AC_UL320_.jpg", price: "$100" },
    { id: 200, name: "WHAVEL Rhinestone ", image: "https://m.media-amazon.com/images/I/71Z3qOwzNHL._AC_UL320_.jpg", price: "$100" },
    { id: 300, name: "OIIKI Pearl Rhinestone", image: "https://m.media-amazon.com/images/I/81RzhcLhvSL._AC_UL320_.jpg", price: "$100" },







    // Add other fashion products here...
  ];

  return (
    <div>
      {/* Header Slider */}
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media/vc/a8d8bfd7-6fc3-4661-a27b-20199f3c0bd7.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Header 1" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media/vc/b48bf715-fb5d-4748-8f8b-7ea279d29c0c.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Header 2" />
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/S/aplus-media/vc/08eab005-801a-4d74-9e1d-ad1a308b92eb.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="Header 3" />
          </div>
        </Slider>
      </div>

      {/* Fashion Section */}
      <h1>Fashion Collection</h1>
      <div className="products">
        {fashionProducts.map((product) => (
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

export default Fashion;




























// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./Fashion.css";

// const Fashion = () => {
//   const initialProducts = [
//     { id: 1, name: "Hat", image: "https://m.media-amazon.com/images/I/51Hz4CdbxxL._AC_UL320_.jpg", price: "$25" },
//     { id: 2, name: "Sunglasses", image: "https://m.media-amazon.com/images/I/71qE4ltPE4L._AC_UL320_.jpg", price: "$30" },
//     { id: 3, name: "Dress", image: "https://m.media-amazon.com/images/I/61NF1CYjjZL._AC_UL320_.jpg", price: "$70" },
//     { id: 4, name: "a", image: "https://m.media-amazon.com/images/I/71r7eWuCsaL._AC_UL320_.jpg", price: "$100" },
//     { id: 5, name: "b", image: "https://m.media-amazon.com/images/I/61INQ7Y4P4L._AC_UL320_.jpg", price: "$100" },
//     { id: 6, name: "c", image: "https://m.media-amazon.com/images/I/515NraKmFNL._AC_UL320_.jpg", price: "$100" },
//     { id: 7, name: "d", image: "https://m.media-amazon.com/images/I/81L3DKxMaXL._AC_UL320_.jpg", price: "$100" },
//     { id: 8, name: "e", image: "https://m.media-amazon.com/images/I/61o4yF407GL._AC_UL320_.jpg", price: "$100" },
//     { id: 9, name: "f", image: "https://m.media-amazon.com/images/I/71PkhOo1muL._AC_UL320_.jpg", price: "$100" },
//     { id: 0, name: "g", image: "https://m.media-amazon.com/images/I/51u8RqYpjEL._AC_UL320_.jpg", price: "$100" },
//     { id: 1, name: "h", image: "https://m.media-amazon.com/images/I/81Wfarx9LjL._AC_UL320_.jpg", price: "$100" },
//     { id: 2, name: "i", image: "https://m.media-amazon.com/images/I/61DeZRQwKJL._AC_UL320_.jpg", price: "$100" },
//     // Add other products here...
//   ];

//   return (
//     <div className="products">
//       {initialProducts.map((product) => (
//         <div key={product.id} className="product-card">
//           <img src={product.image} alt={product.name} />
//           <h2>{product.name}</h2>
//           <p>{product.price}</p>
//           {/* Link to product detail page */}
//           <Link to={`/product/${product.id}`}>
//             <button>View Details</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Fashion;
