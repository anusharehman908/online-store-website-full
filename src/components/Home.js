import React from 'react';
import ProductSection from './ProductSection';
import './Home.css';

const Home = () => {
  const boysDresses = [
    { id: 1, imageUrl: 'https://ae01.alicdn.com/kf/HTB1Lsg6QXXXXXaxapXXq6xXFXXXa/Retail-1set-Boy-vest-Suit-British-Style-Child-Wedding-Sets-vest-pant-shirts-bowtie-Slim-And.jpg', name: 'The Childrens Place baby-boys And Newborn Long Sleeve Dress Shirt and Pants 2-piece Set', price: '-57% $21.44' },
    { id: 2, imageUrl: 'https://th.bing.com/th/id/OIP.KNAs4fLssyOf-VWDC7vMuQHaHa?w=598&h=598&rs=1&pid=ImgDetMain', name: 'Haggar Boys 4-Piece Vest, Dress Shirt & Tie Set', price: '-20% $36.00' },
    { id: 3, imageUrl: 'https://th.bing.com/th/id/OIP.gRccvtP3jKUuJWS_juPG2gHaHa?rs=1&pid=ImgDetMain', name: 'Rafael Boys Dress Shirt & Tie', price: '-20% $17.99' },
    { id: 4, imageUrl:'https://th.bing.com/th/id/R.724090b8c94230c65858b3df672d4a36?rik=YZ5qL7LAxQJdzg&pid=ImgRaw&r=0', name: 'The Childrens Place Boys Short Sleeve Oxford Shirt', price: '-20% $8.93' },
    { id: 5, imageUrl: 'https://m.media-amazon.com/images/I/91AG0-+S0yL._AC_UL320_.jpg', name: 'Tronjori Boys Short Sleeve Button Down Woven Shirt', price: '-57% $24.99' }
  ];
  
  const shoesCollection = [
    { id: 6, imageUrl: 'https://m.media-amazon.com/images/I/714UkGwaMAL._AC_UL320_.jpg', name: 'Rockport Mens Dressports 2 Go Plain Toe Oxford', price: '$49.99' },
    { id: 7, imageUrl: 'https://m.media-amazon.com/images/I/81giNL5RAXL._AC_UL320_.jpg', name: 'Under Armour Mens Charged Assert 10', price: '	$56.25' },
    { id: 8, imageUrl: 'https://m.media-amazon.com/images/I/51Q4zkSHnAL._AC_UL320_.jpg', name: 'Skechers Mens Energy Afterburn', price: ' $59.95' },
    { id: 9, imageUrl: 'https://m.media-amazon.com/images/I/71qGVOnjytL._AC_UL320_.jpg', name: 'Skechers Mens Stamina Nuovo', price: '$56.00' },
    { id: 10, imageUrl: 'https://th.bing.com/th/id/OIP.lk6p0wdggUQItz8QwCHyIQAAAA?rs=1&pid=ImgDetMain', name: 'Skechers Womens Lites-Me Time Sneaker, 3/8 UK', price: ' $78.70' }
  ];
  
  const mobileCollection = [
    { id: 11, imageUrl: 'https://th.bing.com/th/id/R.f7ae618289ca9e048e40ab5cb7b05980?rik=oHedKqcul8SBsQ&pid=ImgRaw&r=0', name: 'Apple iPhone 14, 128GB, Midnight - Unlocked (Renewed Premium)', price: '$399.99' },
    { id: 12, imageUrl: 'https://m.media-amazon.com/images/I/71-EnPs+uQL._AC_UL320_.jpg', name: 'SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smartphone, Unlocked Android, 50MP Zoom Camera, Long Battery Life, S Pen, US Version, 2024, Titanium Violet', price: '$758.99' },
    { id: 13, imageUrl: 'https://m.media-amazon.com/images/I/61U3J32ttyL._AC_UL320_.jpg', name: 'Motorola Think Phone | 2023 | Unlocked | Made for US 8/256GB | 50MP Camera | Volcanic Gray, 6.6 inches', price: '$799.99' },
    { id: 14, imageUrl: 'https://m.media-amazon.com/images/I/514YogjIWpL._AC_UL320_.jpg', name: 'Motorola razr | 2023 | Unlocked | Made for US 8/128 | 32MP Camera | Sage Green', price: '$769.99' },
    { id: 15, imageUrl: 'https://m.media-amazon.com/images/I/711F6T6aySL._AC_UL320_.jpg', name: 'OnePlus 12,16GB RAM+512GB,Dual-SIM,Unlocked Android Smartphone,Supports 50W Wireless Charging,Latest Mobile', price: '$778.99' }
  ];
  
  const laptopCollection = [
    { id: 16, imageUrl: 'https://th.bing.com/th/id/OIP.okPHK-lOk_E5nzOZsGx2dwHaFI?rs=1&pid=ImgDetMain', name: 'SAMSUNG 14" Galaxy Book4 Pro Business Laptop', price: ' $1,571.62' },
    { id: 17, imageUrl: 'https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UY218_.jpg', name: 'Acer Aspire Go 15 Slim Laptop', price: '$999.99' },
    { id: 18, imageUrl: 'https://m.media-amazon.com/images/I/815uX7wkOZS._AC_UY218_.jpg', name: 'HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage', price: '$182.98' },
    { id: 19, imageUrl: 'https://m.media-amazon.com/images/I/616aCuRtnpL._AC_UY218_.jpg', name: 'ASUS Chromebook CM14 Laptop, 14" HD Anti-Glare Display', price: '	$161.28' },
    { id: 20, imageUrl: 'https://m.media-amazon.com/images/I/6131ZgIFn1L._AC_UY218_.jpg', name: 'Lenovo V15 Portable Laptop', price: '$999.99' }
  ];
  
  const watchesCollection = [
    { id: 21, imageUrl: 'https://m.media-amazon.com/images/I/61wjDV8p6PL._AC_UL320_.jpg', name: 'Fitbit Versa 4 Fitness Smartwatch', price: '$199.95' },
    { id: 22, imageUrl: 'https://m.media-amazon.com/images/I/81hv7t7Se3L._AC_UL320_.jpg', name: 'Bulova Mens Automatic Leather Watch', price: ' $342.85' },
    { id: 23, imageUrl: 'https://m.media-amazon.com/images/I/71kbRVr8YfL._AC_UL320_.jpg', name: 'Fossil Nate Mens Watch', price: '$90' },
    { id: 24, imageUrl: 'https://m.media-amazon.com/images/I/81yi2Xq3xZL._AC_UL320_.jpg', name: 'Movado Men Bold Verso Swiss Quartz Watch', price: '$746' },
    { id: 25, imageUrl: 'https://m.media-amazon.com/images/I/81FWQPG5jFL._AC_UL320_.jpg', name: 'Michael Kors Lexington Men Watch', price: '$118' }
  ];
  
  const necklacesCollection = [
    { id: 26, imageUrl: 'https://m.media-amazon.com/images/I/71kX131Z9SL._AC_UL320_.jpg', name: 'Gemstone Birthstone Flower Pendant Necklace', price: '$149.99' },
    { id: 27, imageUrl: 'https://m.media-amazon.com/images/I/715Mi4VbFRL._AC_UL320_.jpg', name: 'GILDED STERLING SILVER BLACK DIAMOND HEART PENDANT', price: '$149.99' },
    { id: 28, imageUrl: 'https://m.media-amazon.com/images/I/71Z8Cz5oHBL._AC_UL320_.jpg', name: '14k REAL Yellow OR White OR Rose/Pink Gold Solid Chain Necklace', price: '$149.99' },
    { id: 29, imageUrl: 'https://m.media-amazon.com/images/I/51edxEqhYdL._AC_UL320_.jpg', name: 'Sterling Silver Diamond Heart Pendant Necklace', price: '$149.99' },
    { id: 30, imageUrl: 'https://m.media-amazon.com/images/I/81HiqHEF2wL._AC_UL320_.jpg', name: '14K Gold Plated Initial Necklaces', price: '$149.99' }
  ];
  
  const bagsCollection = [
    { id: 31, imageUrl: 'https://m.media-amazon.com/images/I/71--iR-mwKL._AC_UL320_.jpg', name: 'The Childrens Place Kide Preschool Elementary Backpack', price: '$79.99' },
    { id: 32, imageUrl: 'https://m.media-amazon.com/images/I/71PfbOU7XTL._AC_UL320_.jpg', name: 'Spirit Airlines Personal Item Bag', price: '$79.99' },
    { id: 33, imageUrl: 'https://m.media-amazon.com/images/I/71xwT4+pn4L._AC_UL320_.jpg', name: 'Fangflower Cute Backpack for School Girls', price: '$79.99' },
    { id: 34, imageUrl: 'https://m.media-amazon.com/images/I/81JhrLhPA7L._AC_UL320_.jpg', name: 'QZUnique Mini Evening Bag', price: '$79.99' },
    { id: 35, imageUrl: 'https://m.media-amazon.com/images/I/81ddnzbEKtL._AC_UL320_.jpg', name: 'The Childrens Place Kids Preschool Elementary Backpack', price: '$79.99' }
  ];
  
  const chairsCollection = [
    { id: 36, imageUrl: 'https://m.media-amazon.com/images/I/81T5gIqB1sL._AC_UL320_.jpg', name: 'Basics Office Computer Task Desk Chair', price: '$129.99' },
    { id: 37, imageUrl: 'https://m.media-amazon.com/images/I/61iKmCBAVVL._AC_UL320_.jpg', name: 'COLAMY Modern Wingback Living Room Chair', price: '$129.99' },
    { id: 38, imageUrl: 'https://m.media-amazon.com/images/I/81oLYolPmjL._AC_UL320_.jpg', name: 'Roundhill Furniture Pisano Fabric Armless Contemporary Accent Chair', price: '$129.99' },
    { id: 39, imageUrl: 'https://m.media-amazon.com/images/I/61x+btu8voL._AC_UL320_.jpg', name: 'Lifestyle Solutions Lexington Armchair', price: '$129.99' },
    { id: 40, imageUrl: 'https://m.media-amazon.com/images/I/81oca88uMdL._AC_UL320_.jpg', name: 'Urban Lifestyle Microsuede Foldable Saucer Chair', price: '$129.99' }
  ];
  
  const girlsDresses = [
    { id: 41, imageUrl: 'https://m.media-amazon.com/images/I/A1E8TsirzfS._AC_UL320_.jpg', name: 'Essentials Girls and Toddlers Raglan Sweater Dress', price: '$29.99' },
    { id: 42, imageUrl: 'https://m.media-amazon.com/images/I/81M9mMFLgOL._AC_UL320_.jpg', name: 'Simple Joys by Carters Girls 2-Pack Stretch Rib Dresses', price: '$29.99' },
    { id: 43, imageUrl: 'https://m.media-amazon.com/images/I/81JgmOVT6-L._AC_UL320_.jpg', name: 'Gymboree Girls and Toddler Short Sleeve Tutu Dress', price: '$29.99' },
    { id: 44, imageUrl: 'https://m.media-amazon.com/images/I/A1E8TsirzfS._AC_UL320_.jpg', name: 'Speechless Girls Sleeveless Sequin Bodice Party Dress', price: '$29.99' },
    { id: 45, imageUrl: 'https://m.media-amazon.com/images/I/81RAIeTeniL._AC_UL320_.jpg', name: 'Simple Joys by Carters Girls Short-Sleeve and Sleeveless Dress Sets', price: '$29.99' }
  ];
  

  return (
    <div className="homepage">
      <ProductSection title="Boys' Dresses" products={boysDresses} link="/boys-dresses" />
      <ProductSection title="Shoes Collection" products={shoesCollection} link="/shoes" />
      <ProductSection title="Mobile Collection" products={mobileCollection} link="/mobiles" />
      <ProductSection title="Laptop Collection" products={laptopCollection} link="/laptops" />
      <ProductSection title="Watches Collection" products={watchesCollection} link="/watches" />
      <ProductSection title="Necklaces Collection" products={necklacesCollection} link="/necklaces" />
      <ProductSection title="Bags Collection" products={bagsCollection} link="/bags" />
      <ProductSection title="Chairs Collection" products={chairsCollection} link="/chairs" />
      <ProductSection title="Girls' Dresses" products={girlsDresses} link="/girls-dresses" />

      
  </div>
    
   






    
  );
};

export default Home;
