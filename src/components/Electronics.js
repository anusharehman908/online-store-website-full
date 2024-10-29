


import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS
import "./Electronics.css";

const Electronics = () => {
  const initialProducts = [
    {
      id: 1,
      name: "SteelSeries Apex Pro Mini Wireless",
      image: "https://m.media-amazon.com/images/I/71aDZGDOwlL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: "$300"
    },
    {
      id: 2,
      name: "SereneLife Towel Warmers Bucket",
      image: "https://m.media-amazon.com/images/I/712g1crDvYL._AC_SX569_.jpg",
      price: "$400"
    },
    {
      id: 3,
      name: "Smart-Tool Digital Protractor",
      image: "https://m.media-amazon.com/images/I/41VOes8SQwL._AC_UY218_.jpg",
      price: "$500"
    },
    {
      id: 4,
      name: "SAMSUNG T7 Shield 2TB",
      image: "https://m.media-amazon.com/images/I/61ZK-7Vt6WL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
      price: "$200"
    },
    {
      id: 5,
      name: "Minolta Pro Shot 16 Mega Pixel HD",
      image: "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_SY300_SX300_.jpg",
      price: "$200"
    },
    {
      id: 6,
      name: "Canon EOS Rebel T7 DSLR",
      image: "https://m.media-amazon.com/images/I/71Lai6buafL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: "$200"
    },
    {
      id: 7,
      name: "Mini Projector",
      image: "https://m.media-amazon.com/images/I/61kRNDZh8UL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: "$200"
    },
    {
      id: 8,
      name: "Alesis Nitro Max Kit Electric",
      image: "https://m.media-amazon.com/images/I/61ZCxWicAYL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
      price: "$200"
    },
    // Add the rest of the products in the same way...
  ];

  const sliderImages = [
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/eb68c45e-1bf1-4aaa-bc9b-8815cd132d1b.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/60f2ba39-e14f-4149-b54b-ea4c690070b7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="electronics-page">
      {/* Header Image Slider */}
      <Slider {...sliderSettings} className="product-slider">
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slider Image ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>

      {/* Products List */}
      <div className="products">
        {initialProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2> {/* Show product name */}
            <p>{product.price}</p> {/* Keep price for display */}
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
