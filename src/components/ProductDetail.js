
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from './CartContext';  // Importing the useCart hook
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from URL
  const { addToCart } = useCart(); // Using the addToCart function from CartContext
  const [category, setCategory] = useState("All Products");
  const [product, setProduct] = useState(null); // State to hold the selected product
  
  const electronicsProducts = [
    { id: 1, name: "SteelSeries Apex Pro Mini Wireless HyperMagnetic Gaming Keyboard – Compact 60%", image: "https://m.media-amazon.com/images/I/71aDZGDOwlL.__AC_SX300_SY300_QL70_FMwebp_.jpg", price: "$300" },
    { id: 2, name: "Customized fragrance, luxurious warming, perfect for spa or bathroom. Ideal for gifts.", image: "https://m.media-amazon.com/images/I/712g1crDvYL._AC_SX569_.jpg", price: "$400" },
    { id: 3, name: "High-precision digital protractor, ideal for professionals with 0.1 degree accuracy.", image: "https://m.media-amazon.com/images/I/41VOes8SQwL._AC_UY218_.jpg", price: "$500" },
    { id: 4, name: "SAMSUNG T7 Shield 2TB, Portable SSD, up-to 1050MB/s, USB 3.2 Gen2, Rugged,IP65 Water & Dust Resistant, for Photographers, ", image: "https://m.media-amazon.com/images/I/61ZK-7Vt6WL.__AC_SY300_SX300_QL70_FMwebp_.jpg", price: "$200" },
    { id: 5, name: "Minolta Pro Shot 16 Mega Pixel HD Digital Camera with 53x Optical Zoom, Full 1080p HD Video & 16GB SD Card, MN53Z,", image: "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_SY300_SX300_.jpg", price: "$200" },
    { id: 6, name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos", image: "https://m.media-amazon.com/images/I/71Lai6buafL.__AC_SX300_SY300_QL70_FMwebp_.jpg", price: "$200" },
    { id: 7, name: "Mini Projector, VISSPL Full HD 1080P Video Projector, Portable Outdoor Projector with Tripod, Kids Gift, Home Theater Movie Phone Projector", image: "https://m.media-amazon.com/images/I/61kRNDZh8UL.__AC_SX300_SY300_QL70_FMwebp_.jpg", price: "$200" },
    { id: 8, name: "Alesis Nitro Max Kit Electric Drum Set with Quiet Mesh Pads, 10 Dual Zone Snare, Bluetooth, 440+ Authentic", image: "https://m.media-amazon.com/images/I/61ZCxWicAYL.__AC_SY300_SX300_QL70_FMwebp_.jpg", price: "$200" },
    ];
     const fashionProducts = [
       { id: 10, name: "Nine West Women's Tri Tone Bangle Bracelet", image: "https://m.media-amazon.com/images/I/51Hz4CdbxxL._AC_UL320_.jpg", price: "$25" },
       { id: 20, name: "Gem Stone King 925 Sterling Silver Blue Sapphire and White Lab Grown Diamond Accent Hoop Earrings For Women (0.83 Cttw, 22MM = 0.85 Inches Diameter)", image: "https://m.media-amazon.com/images/I/61eQNxhfhVL._AC_SY500_.jpg", price: "$30" },
       { id: 30, name: "Gem Stone King 14K White Gold Lab Grown Diamond Stud Earrings | Gold Earrings For Women Men | G-H Color | VS2-SI1 Clarity", image: "https://m.media-amazon.com/images/I/6118kBGy7TL._AC_SY500_.jpg", price: "$70" },
       { id: 40, name: "Betsey Johnson Womens Butterfly Charms Layered Necklace", image: "https://m.media-amazon.com/images/I/71r7eWuCsaL._AC_UL320_.jpg", price: "$100" },
      { id: 50, name: "Bulova Mens Automatic Leather Watch, 21 Jewels, Hack Feature, Luminous Hands/Markers, Open Aperture, 45mm", image: "https://m.media-amazon.com/images/I/61INQ7Y4P4L._AC_UL320_.jpg", price: "$100" },
      { id: 60, name: "axizar 18 Pcs Pearl Hair Clips Large Hair Clips Barrette Hair for Women Girls Fashion Hair Accessories", image: "https://m.media-amazon.com/images/I/81VxdN7le+L._AC_UL320_.jpg", price: "$100" },
      { id: 70, name: "NINE WEST Women's Silvertone Crystal Pave Heart Stretch Bracelet", image: "https://m.media-amazon.com/images/I/81L3DKxMaXL._AC_UL320_.jpg", price: "$100" },
      { id: 80, name: "Kendra Scott Mini Elisa 14k Gold-Plated Satellite Short Pendant Necklace, Fashion Jewelry for Women", image: "https://m.media-amazon.com/images/I/61o4yF407GL._AC_UL320_.jpg", price: "$100" },
      { id: 90, name: "Guess Hinged with Stones and Glitter Bangle Bracelet", image: "https://m.media-amazon.com/images/I/71PkhOo1muL._AC_UL320_.jpg", price: "$100" },
      { id: 100, name: "FAXHION 36 Pairs Gold Earrings Set for Women, Fashion Pearl Chain Link Stud Drop Dangle Earrings Multipack Hoop Earring Packs, Hypoallergenic Earrings for Birthday Party Jewelry", image: "https://m.media-amazon.com/images/I/81ho8aIItXL._AC_UL320_.jpg", price: "$100" },
      { id: 200, name: "WHAVEL Rhinestone Crystal French Barrette Clips - Vintage Bridal Wedding Hair Pins and Accessories for Women, Bride, Bridesmaid (Silver", image: "https://m.media-amazon.com/images/I/71Z3qOwzNHL._AC_UL320_.jpg", price: "$100" },
      { id: 300, name: "OIIKI Pearl Rhinestone Hair Snap Clips - Elegant Barrettes with Pins for Women, Girls, Brides, Parties, Wedding, Daily Use - Gold", image: "https://m.media-amazon.com/images/I/81RzhcLhvSL._AC_UL320_.jpg", price: "$100" },
    ];
    const groceryProducts = [
      { id: 401, name: "RITZ Original Crackers, Party Size, 27.4 ozRITZ Original Crackers have a rich, buttery flavor that's perfect for pairing, topping or enjoying on its own. No matter the occasion, these tasty round crackers make a great snack food, appetizer or quick meal. Keep a package of RITZ snack crackers on your shelf for a salty snack anytime. Each 27.4 ounce box contains 8 individually wrapped sleeves of crackers to lock in freshness.", image: "https://m.media-amazon.com/images/I/71UuBoYoUBL._AC_UL320_.jpg", price: "$2.50" },
      { id: 402, name: "Kraft Easy Mac Original Macaroni & Cheese Microwavable Dinner (18 ct Packets)(Packaging May Vary)", image: "https://m.media-amazon.com/images/I/612SX+0Rx7L._AC_UL320_.jpg", price: "$1.25" },
      { id: 403, name: "Drink Low-Calorie Sports Beverage, Dragonfruit Berry, Coconut Water Hydration, Natural Flavors With Vitamins, Potassium-Packed Electrolytes, Perfect For Athletes, 16 Fl Oz (Pack of 12)", image: "https://m.media-amazon.com/images/I/71OdLGrFa6L._AC_UL320_.jpg", price: "$3.00" },
      { id: 404, name: "The Only Bean Crunchy Roasted Edamame - Healthy Snacks for Adults and Kids (Variety Pack), Low Calorie & Carb Keto Snack Food, Vegan Gluten Free High Protein Snacks (11g), Office Snack, 0.9oz 24 pack", image: "https://m.media-amazon.com/images/I/81rorFXZawL._AC_UL320_.jpg", price: "$4.00" },
      { id: 405, name: "BODYARMOR Sports Drink Sports Beverage, Variety Pack, Coconut Water Hydration, Natural Flavors With Vitamins, Potassium-Packed Electrolytes, Perfect For Athletes, 16 ounce, Pack of 12", image: "https://m.media-amazon.com/images/I/61k9HbyCu1L._AC_UL320_.jpg", price: "$4.00" },
      { id: 406, name: "Ziploc Sandwich Bags, Easy Open Tabs, 90 Count, Clear", image: "https://m.media-amazon.com/images/I/81KCbZO2UlL._AC_UL320_.jpg", price: "$4.00" },
      { id: 407, name: "Ziploc Quart Food Storage Bags, Stay Open Design with Stand-Up Bottom, Easy to Fill, 80 Count", image: "https://m.media-amazon.com/images/I/81wUGqJh6OL._AC_UL320_.jpg", price: "$4.00" },
      { id: 408, name: "Splash Refresher Mandarin Orange Flavored Water, 16.9 Fl Oz, Plastic Bottle, Pack of 18", image: "https://m.media-amazon.com/images/I/81YRD0+mytL._AC_UL320_.jpg", price: "$4.00" },
      { id: 409, name: "Snyder's of Hanover Pretzels, Minis and Sticks 100 Calorie Packs, 20 Ct Variety Pack (Pack of 2)", image: "https://m.media-amazon.com/images/I/813Vz6f0uZL._AC_UL320_.jpg", price: "$4.00" },
      { id: 500, name: "365 by Whole Foods Market, Bag Kitchen Tall Drawstring Flextra 13Gl 38Count, 38 Count",  image: "https://m.media-amazon.com/images/I/81QxhEXrzSL._AC_UL320_.jpg", price: "$4.00" },
      { id: 501, name: "OREO Cakesters Soft Snack Cakes, 3 - 5 Count Packs (15 Total Snack Packs) + Bonus OREO Mini Cookie Snack Pack", image: "https://m.media-amazon.com/images/I/81-97poWuCS._AC_UL320_.jpg", price: "$4.00" },
      { id: 502, name: "Cheese", image: "https://m.media-amazon.com/images/I/71tbl52KzsL._AC_UL320_.jpg", price: "$4.00" },
    ];
    const cosmeticsProducts = [
      { id: 301 , name: "PUR Beauty 4-in-1 Love Your Selfie Foundation & Concealer - Longwear Full Coverage Liquid Makeup Foundation with Hydrating Blend for Refined-Looking, Natural Beauty Glow, Skin Texture & Tone", image: "https://m.media-amazon.com/images/I/71Yka487alL._AC_UL320_.jpg", price: "$2.50" },
      { id: 302, name: "YENSA Super Serum Silk Concealer - .20 fl oz (Deep 1)", image: "https://m.media-amazon.com/images/I/61vKMD8VMFL._AC_UL320_.jpg", price: "$1.25" },
      { id: 303, name: "Crepe Erase 2-Step Advanced Body Care Treatment, Anti-Aging Skin Care for Body/Neck, Firming Moisturizer Cream + Body Exfoliating Pre-Treatment, Supports Wrinkle, Crepe Skin, Collagen", image: "https://m.media-amazon.com/images/I/61fMaQj9vSL._AC_UL320_.jpg", price: "$3.00" },
      { id: 304, name: "IT Cosmetics Your Most Beautiful You Anti-Aging Matte Radiance Luminizer & Brightening Blush Palette - With Hydrolyzed Collagen Silk Peptides", image: "https://m.media-amazon.com/images/I/814ibe1lcpL._AC_UL320_.jpg", price: "$4.00" },
      { id: 305, name: "Revlon Age Defying 3X Makeup Foundation, Firming, Lifting and Anti-Aging Medium, Buildable Coverage with Natural Finish SPF 20, 060 Golden Beige, 1 fl oz", image: "https://m.media-amazon.com/images/I/71K-8ggK25L._AC_UL320_.jpg", price: "$4.00" },
      { id: 306, name: "e.l.f. Liquid Metallic Eyeshadow, Quick-Drying, Long-Lasting, Gel-Based Formula For One-Swipe Pigmented Coverage, Vegan & Cruelty-Free, Galaxy", image: "https://m.media-amazon.com/images/I/61YVyDv6rbL._AC_UL320_.jpg", price: "$4.00" },
      { id: 307, name: "Revlon Concealer Stick, PhotoReady Face Makeup for All Skin Types, Longwear Medium- Full Coverage with Creamy Finish, Lightweight Formula, 003 Light Medium, 0.11 Oz", image: "https://m.media-amazon.com/images/I/61kxTBbLBHL._AC_UL320_.jpg", price: "$4.00" },
      { id: 308, name: "Cheese", image: "https://m.media-amazon.com/images/I/617F0F8N5UL._AC_UL320_.jpg", price: "$4.00" },
      { id: 309, name: "NYX PROFESSIONAL MAKEUP Born To Glow Naturally Radiant Foundation, Medium Coverage - Sienna", image: "https://m.media-amazon.com/images/I/61oEkZwnHaL._AC_UL320_.jpg", price: "$4.00" },
      { id: 503, name: "Grande Cosmetics GrandeLASH-MD Lash Enhancing Serum", image: "https://m.media-amazon.com/images/I/71rTWAD0MBL._AC_UL320_.jpg", price: "$4.00" },
      { id: 504, name: "Graftobian Glamour Crème Ultra HD Foundation Super Palettes - Foundation Palette, Contour Makeup, Foundation for Professional Makeup Kit, Face Makeup for Full Coverage - Warm Color", image: "https://m.media-amazon.com/images/I/71vLwx43wpL._AC_UL320_.jpg", price: "$4.00" },
      { id: 505, name: "Rude Cosmetics In Your Face 3-in-1 Palette Makeup Women 0.84 oz", image: "https://m.media-amazon.com/images/I/61w0TOSAwLL._AC_UL320_.jpg", price: "$4.00" },
      { id: 506, name: "SHANY Carry All Makeup Train Case with Pro Makeup Set, Makeup Brushes, Lipsticks, Eye Shadows, Blushes, Powders, and more - Reusable Makeup Storage Organizer - Premium Gift Packaging - Purple", image: "https://m.media-amazon.com/images/I/61UqnP6hHlL._AC_UL320_.jpg", price: "$4.00" },
      { id: 507, name: "IT Cosmetics CC+ Airbrush Perfecting Powder Foundation - Buildable Full Coverage Of Pores & Dark Spots - Hydrating Face Makeup with Hydrolyzed Collagen & Niacinamide - 0.33 Oz",  image: "https://m.media-amazon.com/images/I/813QmoDJKEL._AC_UL320_.jpg", price: "$4.00" },
      { id: 508, name: "Almay The Complete Look Palette, Medium", image: "https://m.media-amazon.com/images/I/51F16Z5NcPL._AC_UL320_.jpg", price: "$4.00" },
      { id: 509, name: "SHANY Carry All Makeup Train Case with Pro Makeup Set, Makeup Brushes, Lipsticks, Eye Shadows, Blushes, Powders, and more - Reusable Makeup Storage Organizer - Premium Gift Packaging - Purple", image: "https://m.media-amazon.com/images/I/71ERXpLVVrL._AC_UL320_.jpg", price: "$4.00" },
  
  
    ];
   
    const BrushProducts = [
      { id: 600, name: "EcoTools Start The Day Beautifully 6 Piece Makeup Brush Set, Makeup Brushes For Eyeshadow, Blush, Concealer, & Foundation Application, Eco-Friendly, Gift Set, Synthetic Hair, Vegan & Cruelty-Free", image: "https://m.media-amazon.com/images/I/81tH7Nvr1dL._AC_UL320_.jpg", price: "$2.50" },
      { id: 601, name: "Real Perfection Makeup Brush Set 16 Pcs with 1 Eyebrow Razor Premium Synthetic Foundation Powder Concealers Eyeshadow Blush Makeup Brushes Make up Brushes Kit", image: "https://m.media-amazon.com/images/I/71QIniLpSmL._AC_UL320_.jpg", price: "$1.25" },
      { id: 602, name: "Makeup Brushes Makeup Brush Set - 16 Pcs BESTOPE PRO Premium Synthetic Foundation Concealers Eye Shadows Make Up Brushes set,Eyeliner Brushes(Black)", image: "https://m.media-amazon.com/images/I/718+7Pp51oL._AC_UL320_.jpg", price: "$3.00" },
      { id: 603, name: "Real Techniques 4 Piece Face Base Makeup Brush Set, For Concealer, Foundation, Contour, & Setting Powder, For Blending & Sculpting, Travel Friendly, Gift Set, Stocking Stuffer, Cruelty-Free", image: "https://m.media-amazon.com/images/I/816ZArfjolL._AC_UL320_.jpg", price: "$4.00" },
      { id: 604, name: "Real Techniques Au Naturale Makeup Brush 9 Piece Set, For Liquid, Cream, & Powder Eyeshadow, Foundation, Blush, Bronzer & Contour, Travel Friendly, Stocking Stuffer, Gift Set, Cruelty-Free", image: "https://m.media-amazon.com/images/I/81j6JEo5jnL._AC_UL320_.jpg", price: "$4.00" },
      { id: 605, name: "Makeup Brushes Makeup Brush Set - 16 Pcs BESTOPE PRO Premium Synthetic Foundation Concealers Eye Shadows Make Up Brushes set,Eyeliner Brushes(Rose Gold)", image: "https://m.media-amazon.com/images/I/81VDlvU2pRL._AC_UL320_.jpg", price: "$4.00" },
      { id: 606, name: "Real Techniques 11 Piece Travel Fantasy Mini Brush Set, Travel Size Makeup Brushes For Foundation Eyeshadow, Powder, Blush, Contour, & Concealer, Makeup Bag Included, Gift Set, Cruelty-Free", image: "https://m.media-amazon.com/images/I/71N8fr1VkYL._AC_UL320_.jpg", price: "$4.00" },
      { id: 607, name: "Real Techniques Extra Big Stippling Brush, Large Makeup Brush For Liquid & Cream Foundation, BB Cream, CC Cream, & Skin Tints, XL Brush, Stocking Stuffer, Cruelty-Free, Synthetic Bristles, 1 Count", image: "https://m.media-amazon.com/images/I/71Z-H2x2o4L._AC_UL320_.jpg", price: "$4.00" },
      { id: 608, name: "Makeup Brushes, 18 Pcs Professional Premium Synthetic Makeup Brush Set with Case, Foundation Kabuki Eye Travel Make up Brushes sets (Black Gold)", image: "https://m.media-amazon.com/images/I/61PHfKx5v+L._AC_UL320_.jpg", price: "$4.00" },
      { id: 609, name: "e.l.f. Complexion Essentials Brush & Sponge Set, Concealer, Powder, Blush & Highlighter Brushes & Total Face Sponge, Vegan & Cruelty-Free", image: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/3e376514-92c7-404d-ad92-ef8e0b28c79a._CR0,0,1200,628_SX920_QL70_.jpg", price: "$4.00" },
      { id: 700, name: "20 Pieces Makeup Brush Set Professional Face Eye Shadow Eyeliner Foundation Blush Lip Makeup Brushes Powder Liquid Cream Cosmetics Blending Brush Tool", image: "https://m.media-amazon.com/images/I/51trnyGyb3L._SX300_SY300_QL70_FMwebp_.jpg", price: "$4.00" },
      { id: 701, name: "EHANY Makeup Brushes The Masterpiece Pro Signature Makeup Brush Set - Foundation Powder Concealers Eye Shadow brushes, Synthetic Bristle with Wooden handles, Premium Gift Packaging - 24pcs", image: "https://m.media-amazon.com/images/I/51h2RWukrEL._AC_UF480,480_SR480,480_.jpg", price: "$4.00" },
      { id: 702, name: "Enther & LaFeel Makeup Brush Set, Premium Cosmetic Wood Handle Brushes 12pcs for Foundation Blending Blush Concealer Eye Shadow, Cruely-Free Synthetic Fiber Bristles, Blue Collection", image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/893f7776-33a4-4b4b-ab3b-8a0536d6d4ba.__CR83,0,1333,1500_PT0_SX200_V1___.jpg", price: "$4.00" },
      { id: 703, name: "EcoTools New Natural Conceal, Enhance, & Sculpt Trio, Makeup Brushes For Foundation, Concealer, & Brows, Dense, Synthetic Bristles For Sculpting Face, Vegan & Cruelty-Free, 3 Piece Set", image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3bfc59b8-e2fd-4747-812c-ab9354772046.__CR111,0,1778,2000_PT0_SX200_V1___.jpg", price: "$4.00" }
  
    ];
    const BagsProducts = [
      { id: 704, name: "Calvin Klein Boys' Long Sleeve Sateen Dress Shirt, Style with Buttoned Cuffs & Shirttail Hem", image:  'https://m.media-amazon.com/images/I/91tJWpX5oGL._AC_UL320_.jpg', price: "$2.50" },
      { id: 705, name: "Formal Suit Set, Vest, Pants, Collared Dress Shirt, and Tie, Blue Jean, 8", image:   'https://m.media-amazon.com/images/I/81Um5n0GxJL._AC_UL320_.jpg', price: "$1.25" },
      { id: 706, name: "Simple Joys by Carter's Toddlers and Baby Boys' 4-Piece Special Occasion Bow-tie and Suspender Pants Set", image:   'https://m.media-amazon.com/images/I/812Btqa8yTL._AC_SY445_.jpg', price: "$3.00" },
      { id: 707, name: "CYHTWSDJ Shoulder Bags for Women, Cute Hobo Tote Handbag Mini Clutch Purse with Zipper Closure", image: 'https://m.media-amazon.com/images/I/61gAZSGsx8L._AC_UL320_.jpg', price: "$4.00" },
      { id: 708, name: "Wogarl 4PCS Weekender Bags for Women Large Overnight Bag Weekend Travel Duffel Bag Carry on Shoulder with Shoe Compartment Canvas Toiletry Bag for Travel Business Gym,Beige", image: 'https://m.media-amazon.com/images/I/918jQqNvVkL._AC_UL320_.jpg', price: "$4.00" },
      { id: 709, name: "ETRONIK Gym Bag for Women, Personal Item Travel Duffel Bag with Shoes Compartment, Weekender Overnight Bag with Wet Pocket & USB Charging Port, Carry On Bag for Women, Travel, Gym, Weekend (Beige)", image: 'https://m.media-amazon.com/images/I/614zPClAs4L._AC_UL320_.jpg', price: "$4.00" },
      { id: 800, name: "GUESS Noelle Triple Compartment Crossbody", image: 'https://m.media-amazon.com/images/I/71ZcH1Tdn6L._AC_UL320_.jpg', price: "$4.00" },
      { id: 801, name: "PU Leather Backpack Purse for Women Fashion Multipurpose Design Handbag Ladies Shoulder Bags Travel Backpack Brown", image: 'https://m.media-amazon.com/images/I/71JHxpJL9DL._AC_UL320_.jpg', price: "$4.00" },
      { id: 802, name: "qlp Large Work Tote Bag for Women Designer Purses and Handbags Big Bucket bags Ladies Travel Crossbody Purse", image: 'https://m.media-amazon.com/images/I/51psoco8fSL._AC_UL320_.jpg', price: "$4.00" },
      { id: 803, name:"Gladdon Quilted Leather Crossbody Purse for Women Trendy Ladies Shoulder Bag with Chain Designer Purses", image: 'https://m.media-amazon.com/images/I/8196So5nFAL._AC_UL320_.jpg', price: "$4.00" },
  
    ];
  
    const BoysDressesProducts = [
      { id: 905, name: "Formal Suit Set, Vest, Pants, Collared Dress Shirt, and Tie, Blue Jean, 8", image:  'https://th.bing.com/th/id/OIP.hF0uj54cKjpHCE5xh1568wAAAA?rs=1&pid=ImgDetMain', price: "$2.50" },
      { id: 807, name: "Simple Joys by Carter's Toddlers and Baby Boys' 4-Piece Special Occasion Bow-tie and Suspender Pants Set", image:   'https://th.bing.com/th/id/OIP.qolYCvNPsXRiUMdTKURPkAHaJx?w=500&h=660&rs=1&pid=ImgDetMain', price: "$1.25" },
      { id: 808, name: "Nautica Boys' 4-Piece Formal Suit Set, Vest, Pants, Collared Dress Shirt, and Tie", image: 'https://th.bing.com/th/id/OIF.HLZrbzAlE6xxGn1uT5fwmQ?rs=1&pid=ImgDetMain', price: "$3.00" },
      { id: 809, name: "Kenneth Cole REACTION Boys' Dress Shirt with Clip-on Tie Set, Sizes 8-20", image:  'https://th.bing.com/th/id/OIP.tnDOKRSsykEo7xzszPiFbgHaHa?w=1280&h=1280&rs=1&pid=ImgDetMain/', price: "$4.00" },
      { id: 900, name: "ZOD Boys' 3-piece Sweater, Dress Shirt, and Pants Set", image:    'https://i.pinimg.com/originals/e1/cd/e4/e1cde4bd9113ef343b08bc9bf1ea7519.jpg', price: "$4.00" },
      { id:901, name: "IZOD Boys' Bi-Stretch Flat Front Dress Pant", image:    'https://i.pinimg.com/originals/23/8b/df/238bdfb976ad8b57b536aae8a0354b13.jpg', price: "$4.00" },
      { id:902, name: "The Children's Place Boys' Cotton Chino Shorts", image:    'https://th.bing.com/th/id/R.4e3c7e693c71be9c1f7d2c78e0668894?rik=MKl6HDJHZAiuYw&pid=ImgRaw&r=0', price: "$4.00" },
      { id: 903, name: "The Children's Place boys Pull On Pants with Roll Cuff Hem", image:'https://m.media-amazon.com/images/I/71aQMATxGBL._AC_SX342_.jpg',price: "$4.00" },
      { id: 904, name: "Nautica Boys' Big School Uniform Short Sleeve Polo Shirt, Button Closure, Comfortable & Soft Pique Fabric", image:'https://th.bing.com/th/id/R.ccc226f5d45abdb857e1525dd6135a2b?rik=Wh49njwdndT2kw&pid=ImgRaw&r=0', price: "$4.00" },
  
  
  
    ];
    const ShoesProducts = [
      { id: 906, name: "Polo Ralph Lauren Mens Riali Driver Loafers", image:   'https://th.bing.com/th/id/OIP.XOVdjiqU2X36zbtpjaC_6AHaE8?rs=1&pid=ImgDetMain',price: "$2.50" },
   
      { id: 908, name: "Cole Haan Men's Broadway Cap Toe Oxford", image:    'https://th.bing.com/th/id/OIP.i283IbF7TQb-vg5aDlK5-QHaJQ?rs=1&pid=ImgDetMain',price: "$3.00" },
      { id: 909, name: "Under Armour Unisex-Child Grade School Lockdown 7 Sneaker", image:  'https://th.bing.com/th/id/OIP.G1FOJYZaSalhlgXE9u5AggAAAA?rs=1&pid=ImgDetMain', price: "$4.00" },
      { id: 1000, name: "Brooks Men’s Trace 2 Neutral Running Shoe", image:  'https://m.media-amazon.com/images/I/71ypxFFwG+L._AC_UL320_.jpg', price: "$4.00" },
      { id: 1001, name: "Skhers Men's Stamina Nuovo", image : 'https://m.media-amazon.com/images/I/61Z25CwqSbL._AC_SX500_.jpg',  price: "$4.00" },
      { id: 1002, name: "Stride Rite 360 unisex-baby Taye 2.0 First Walker Shoe", image:  'https://th.bing.com/th/id/OIP.qZsLQvBqHteyrfjweV9jtgAAAA?w=320&h=320&rs=1&pid=ImgDetMain',  price: "$4.00" },
      { id: 1003, name: "Simple Joys by Carter's Baby-Girl's Elodie Sneaker Mary Jane Flat", image:  'https://th.bing.com/th/id/OIP.ZSRdkMqKSHxDtGEHckAAHQAAAA?rs=1&pid=ImgDetMain', price: "$4.00" },
      { id: 1004, name: "LAFEGEN Baby Girls Mary Jane Flats with Bownot Non Slip Soft Sole PU Leather Newborn Infant Toddler First Walker Cirb Dress Shoes", image:  'https://m.media-amazon.com/images/I/61X9G2qAHeL._AC_SY500_.jpg',  price: "$4.00" },
    ];
    const MobilesProducts = [
  
      { id:6006, name: "SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Zoom Camera, Long Battery Life, S Pen, US Version, 2024, Titanium Gray", image:    'https://m.media-amazon.com/images/I/71-EnPs+uQL._AC_SX385_.jpg',       price: "$2.50" },
      { id:6007, name: "Motorola Moto G 5G | 2023 | Unlocked | Made for US 4/128GB | 48 MPCamera | Ink Blue, 163.94x74.98x8.39", image:     'https://m.media-amazon.com/images/I/61vgbLrWDyL._AC_SX522_.jpg',   price: "$1.25" },
      { id:6008, name: "OnePlus Nord N30 5G | Unlocked Dual-SIM Android Smart Phone | 6.7 LCD Display | 8 +128GB | 5000 mAh Battery | 50W Fast Charging | 108MP Camera | Chromatic Gray", image:     'https://m.media-amazon.com/images/I/610qFsdenLL._AC_SX522_.jpg',    price: "$3.00" },
      { id:6009, name: "SAMSUNG Galaxy A15 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Expandable Storage, Knox Security, Super Fast Charging, US Version, 2024, Blue Black", image:   'https://m.media-amazon.com/images/I/41vU1u8DZXL._AC_SX522_.jpg',    price: "$4.00" },
      { id:7000, name: "OnePlus 12,12GB RAM+256GB,Dual-SIM,Unlocked Android Smartphone,Supports Fastest 50W Wireless Charging,with The Latest Mobile Processor,Advanced Hasselblad Camera,5400 mAh Battery,2024,Silky Black", image:   'https://m.media-amazon.com/images/I/71NW2QaIzlL.__AC_SX300_SY300_QL70_FMwebp_.jpg'   ,    price: "$4.00" },
      { id:7001, name: "SAMSUNG Galaxy A54 5G A Series Cell Phone, Factory Unlocked Android Smartphone, 128GB w/ 6.4” Fluid Display Screen, Hi Res Camera, Long Battery Life, Refined Design, US Version, 2023, Awesome Violet", image :  'https://m.media-amazon.com/images/I/61A+wkddftL._AC_SX522_.jpg',price: "$4.00" },
      { id:7002, name: "OtterBox Samsung Galaxy S24 Ultra Commuter Series Case - GET Your Greens, Slim & Tough, Pocket-Friendly, with Port Protection", image:   'https://m.media-amazon.com/images/I/71pQNlgpHvL._AC_SY355_.jpg ',     price: "$4.00" },
      { id:7003, name: "Motorola Moto G Stylus 5G | 2023 | Unlocked | Made for US 6/256GB | 50 MPCamera | Rose Champagne, 162.83x73.77x9.29", image:   'https://m.media-amazon.com/images/I/613O43y5UsL.__AC_SX300_SY300_QL70_FMwebp_.jpg',      price: "$4.00" },
      { id:7004, name: "iOttie Velox Pro MagSafe Compatible Dash & Windshield Car Mount with Wireless Charging & CryoFlow™ Cooling System. Compatible with MagSafe iPhones Including iPhone 12/13/14/15 (Car Charger Included)", image:   'https://m.media-amazon.com/images/I/61DavGI6RLL._AC_SY450_.jpg' ,     price: "$4.00" },
      { id:7005, name: "PopSockets Phone Grip Compatible with MagSafe, Adapter Ring for MagSafe Included, Phone Holder, Wireless Charging Compatible - Clear", image:   'https://m.media-amazon.com/images/I/41WyiWOMq0L._AC_SX522_.jpg',price: "$4.00" },
      
  
         // Add other cosmetics products here...
       ];
    const LaptopProducts =[
     
  { id: 1005, name: "SAMSUNG 14 Galaxy Book4 Pro Business Laptop, Wi-Fi PC Computer, Windows 11 PRO, Intel Core 7 Ultra 155H / 16GB / 1TB, 3K AMOLED Touchscreen, 2024 Model, NP944XGK-KG1US, Moonstone Gray", image:    'https://th.bing.com/th/id/OIP.pEoFcD0zW4S9i1pBtSIrKQHaE8?rs=1&pid=ImgDetMain',  price: "$2.50" },
  { id: 1006, name: "SAMSUNG 14 Galaxy Book4 Pro Laptop PC Computer, Intel Core 7 Ultra Processor 512GB, 3K AMOLED (2880 x 1800) Touchscreen, Advanced Security, 2024 Model, NP940XGK-KG1US, Moonstone Gray", image:          'https://m.media-amazon.com/images/I/71JMU2KiBlL._AC_UF894,1000_QL80_.jpg',    price: "$1.25" },
  { id: 1007, name: "ASUS Chromebook CM14 Laptop, 14 HD Anti-Glare Display (1366x768), MediaTek Kompanio 520, 4GB RAM, 64GB eMMC, ChromeOS, Gray, CM1402CM2A-DS44, Gravity Grey", image:          'https://th.bing.com/th/id/R.77d5faea9859ba8c6d943d2b191cfd86?rik=Lo7UduGL7y8pWQ&pid=ImgRaw&r=0',   price: "$3.00" },
  { id: 1008, name: "HP Notebook Laptop, 15.6 HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver", image:         'https://th.bing.com/th/id/OIP.vZkSb7GIHGDs0BJp_fH6BgAAAA?w=450&h=450&rs=1&pid=ImgDetMain',  price: "$4.00" },
  { id: 1009, name: "Lenovo ThinkPad E14 Gen 5 Business Laptop, 14 FHD+ Display, AMD Ryzen 7 7730U (Beat i7-1255U), 16GB RAM, 512GB SSD, FP Reader, Backlit Keyboard, HDMI, RJ45, Wi-Fi 6, Windows 11 Pro, Black", image:           'https://th.bing.com/th/id/OIP.TVeFxDMexsxBpbRQIPmnPQHaEd?rs=1&pid=ImgDetMain',       price: "$4.00" },
  { id: 2000, name: "Lenovo 2022 Newest Ideapad 3 Laptop, 15.6 HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI, Webcam, Wi-Fi 5, Bluetooth, Windows 11 Home, Almond", image :          'https://th.bing.com/th/id/OIP.PXjReLfF3BAfVvIg_Ml1ogHaE-?rs=1&pid=ImgDetMain',    price: "$4.00" },
  { id: 2001, name: "Lenovo Newest V15 Gen 4 Business Laptop, 15.6 FHD Display, Intel Core i5-13420H (Beat i7-1355U), 16GB RAM, 1TB SSD, HDMI, RJ45, Webcam, Numeric Keypad, Wi-Fi, Windows 11 Pro, Black", image:        'https://th.bing.com/th/id/OIP.A9lfLLmrKhDM8kX0fMs5HQHaHa?rs=1&pid=ImgDetMain',  price: "$4.00" },
  { id: 2002, name: "Dell Latitude 7420 FHD Laptop Notebook with Intel Core i7 11th Gen Processor (16GB Ram, 512GB SSD, WiFi, Bluetooth) Windows 11 Pro - Carbon Fiber (Renewed)", image:        'https://th.bing.com/th/id/OIP.wckuzgtznVwplh9G7ZfF1AAAAA?w=336&h=336&rs=1&pid=ImgDetMain',     price: "$4.00" },
  { id: 2003, name: "Laptop Computer, Celeron J4005 Processor Up to 2.7GHz, 6GB DDR4 RAM 128 GB SSD, 14 Inch HD Display, Thin & Portable Notebook PC with Webcam/WiFi/Bluetooth (6GB RAM | 128GB SSD)", image:             'https://m.media-amazon.com/images/I/61IJV5Xzg4L._AC_SY355_.jpg',   price: "$4.00" },
  ];
    const WatchesProducts = [
      { id: 2004, name: "Michael Kors Oversized Slim Runway Men's Watch, Stainless Steel Watch for Men", image:     'https://m.media-amazon.com/images/I/61mwxJmJT0L._AC_UL320_.jpg',  price: "$2.50" },
      { id: 2005, name: "Bulova Men's 3-Hand Quartz Watch with Diamond Dial and Edge to Edge Crystal", image:      'https://m.media-amazon.com/images/I/81W2Q7mzHzS._AC_UL320_.jpg',     price: "$1.25" },
      { id: 2006, name: "Nine West Women's Crystal Accented Bracelet Watch", image:      'https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_UL320_.jpg',      price: "$3.00" },
      { id: 2007, name: "Bulova Men's Classic Sutton 4-Hand Automatic Watch, 24-Hour Sub Dial, Open Aperture, Self-Winding, Exhibition Caseback, Double Curved Mineral Crystal, Luminous Hands, 42mm", image:      'https://m.media-amazon.com/images/I/61poVCqlHCL._AC_UL320_.jpg',    price: "$4.00" },
      { id: 2008, name: "Bulova Men's 3-Hand Calendar Date Quartz Watch, Patterned Dial, 38mm, Style: 96B149", image:      'https://m.media-amazon.com/images/I/81JVXUTHKVL._AC_UL320_.jpg',       price: "$4.00" },
      { id: 2009, name: "BOSS Men's SKYLINER Ultra Slim Quartz 40mm Watch | Water Resistant | Premium Minimalistic Timepiece for Business and Casual Wear", image :     'https://m.media-amazon.com/images/I/71CCvrJ5JBL._AC_UL320_.jpg',         price: "$4.00" },
      { id: 3000, name: "Anne Klein Women's Genuine Diamond Dial Bangle Watch", image:      'https://m.media-amazon.com/images/I/81LnQKCQBZL._AC_UL320_.jpg',           price: "$4.00" },
      { id: 3001, name: "Nine West Women's Strap Watch", image:      'https://m.media-amazon.com/images/I/61AQr8vOg5L._AC_UL320_.jpg',           price: "$4.00" },
      { id: 3002, name: "Michael Kors Lady Nini Women's Watch, Stainless Steel Chain-Link Bracelet and Pavé Crystal Watch for Women", image:     'https://m.media-amazon.com/images/I/51RuNa4Ti4L._AC_UL320_.jpg',      price: "$4.00" },
      { id: 3003, name: "Fossil Riley Women's Watch with Crystal Accents and Stainless Steel Bracelet Band", image:     'https://m.media-amazon.com/images/I/61i5KulhUBL._AC_UL320_.jpg',      price: "$4.00" },
  
  
  
  
  
         // Add other cosmetics products here...
       ];
       const NecklacesProducts = [
  
        { id:3006 , name: "weel Gift! Gold Plated Jewelry Sets For Women Crystal Heart Necklace Earrings Jewellery Set Bridal Wedding Accessories", image:    'https://m.media-amazon.com/images/I/41UNWfwnA6L._AC_.jpg',       price: "$2.50" },
        { id: 3007, name: "Vintage Art Deco Style Holiday Day Party Bridal Blue Clear White Cubic Zirconia Simulated Gemstone Marquise AAA CZ Formal Statement Tennis Necklace For Women Prom Wedding Silver Gold Plated", image:     'https://m.media-amazon.com/images/I/71fwp8qql6S._AC_UL320_.jpg',   price: "$1.25", title:"fhdjfhd" },
        { id: 3008, name: "Tasiso Dainty Layered Coin Necklaces for Women 14K Gold Plated Layering Circle Bar Pendant Necklace Tiny Coin Choker Necklaces Minimalist Jewelry Gifts", image:     'https://th.bing.com/th/id/OIP.cknTCMEAC9gEQurNAh-ROQHaHa?rs=1&pid=ImgDetMain',    price: "$3.00" },
        { id: 3009, name: "Suplight 925 Sterling Silver Necklace Chain for Women-1.1&1.5mm Chain Necklace 22k Gold Plated/Silver Necklaces for Women Thin & Sturdy-Adjustable Length-Italian Quality 16-24 Inch", image:   'https://m.media-amazon.com/images/I/41lo9iEjRoL._AC_UL320_.jpg',    price: "$4.00" },
        { id: 4000, name: "Bridal Jewelry Set Art Deco Vintage Estate Style Cubic Zirconia Marquise Leaf Teardrop AAA CZ Statement Cleavage Choker Necklace & Chandelier Dangle Clip On Or Pierced Earrings for Women Pageant", image:   'https://i.pinimg.com/originals/bd/9e/20/bd9e201381ef8f0ff978c511b98bdea4.jpg'   ,    price: "$4.00" },
        { id: 4001, name: "Women's Wedding Bridal Crystal Teardrop Filigree Green Leaf Cluster Statement Necklace Dangle Earrings Set for Brides Bridesmaid Prom Costume Accessories for Women", image :      'https://th.bing.com/th/id/OIP.rIEYlArW1pNbKerRo2NwZAAAAA?rs=1&pid=ImgDetMain',price: "$4.00" },
        { id: 4002, name: "PAGOW Red Flower Necklace for Women, Rhinestone Red Rose Hair Accessories Bride Earrings, Red Jewelry Sets for Women Wedding Engagement Birthday Christmas", image:   'https://m.media-amazon.com/images/I/41m1rx7JUGL._SX300_SY300_QL70_FMwebp_.jpg ',     price: "$4.00" },
        { id: 4003, name: "BriLove Women's Wedding Bridal Austrian Crystal Multi Teardrop Cluster Statement Necklace Dangle Earrings Set", image:   'https://m.media-amazon.com/images/I/81497gjw8rL._AC_SY500_.jpg',      price: "$4.00" },
        { id: 4004, name: "Molie Youfir Bridal Rhinestone Simulated Pearl Necklace Earring Jewelry Set for Brides Wedding Party Dress", image:       'https://th.bing.com/th/id/OIP.VlU_8As82uH1yMjZs0OMjwHaHa?rs=1&pid=ImgDetMain' ,     price: "$4.00" },
        { id: 4005, name: "Women's Wedding Bridal Crystal Teardrop Filigree Green Leaf Cluster Statement Necklace Dangle Earrings Set for Brides Bridesmaid Prom Costume Accessories for Women", image:       'https://i.pinimg.com/474x/d4/77/c8/d477c8313058ee587fc053fe199cb2b1.jpg',price: "$4.00" },
        
    
           // Add other cosmetics products here...
         ];
      
         const ChairProducts = [
  
     
     
          { id:4008, name: "Basics Metal Dining Chairs, Dark Grey, 1 Count (Pack of 4)", image:      'https://th.bing.com/th/id/OIP.rU6YA3Y4tSxEoSH3lEDpKgHaHa?rs=1&pid=ImgDetMain',    price: "$3.00" },
          { id:4009, name: "Simple Deluxe Dining Chairs Set of 2, Kitchen Dining Room Chairs Upholstered, Fabric Dining Table Chairs with Wood Legs, Gray", image:    'https://th.bing.com/th/id/OIP.mSV-PMrmNT1gWckecKqJigHaHa?w=755&h=755&rs=1&pid=ImgDetMain',      price: "$4.00" },
          { id:5000, name: "COLAMY Upholstered Parsons Dining Chairs Set of 4, Fabric Dining Room Kitchen Side Chair with Nailhead Trim and Wood Legs - Beige", image:    'https://th.bing.com/th/id/OIP._9Ehd6_nrrRtm5BNtKPKsgAAAA?rs=1&pid=ImgDetMain',     price: "$4.00" },
       
          { id:5002, name: "Roundhill Furniture Urban Style Solid Wood Leatherette Padded Parson Chair, Red, Set of 2", image:      'https://th.bing.com/th/id/OIP.k5tybwXmwxW677srl2rWBAHaE8?rs=1&pid=ImgDetMain',              price: "$4.00" },
          { id:5003, name: "CangLong Mid-Century Modern Rattan Chairs, Upholstered Fleece Seat Armless Chairs with Rattan Backrest & Metal Legs for Home Kitchen Dining Room, Set of 2, Cream", image:      'https://th.bing.com/th/id/OIP.5fBJ4rZ7T51Pz_Dv6a8uZQAAAA?w=430&h=430&rs=1&pid=ImgDetMain',              price: "$4.00" },
  
  
       
      
             // Add other cosmetics products here...
           ];
      
           const GirlsDressesProducts = [
  
            { id:5006, name: "Essentials Girls and Toddlers' Raglan Sweater Dress", image:    'https://th.bing.com/th/id/OIP.Q4d7QhsbC_Qx84QSyVbuZgHaJ4?rs=1&pid=ImgDetMain',                               price: "$2.50" },
            { id:5007, name: "Nautica Girls' Short Sleeve Jersey Tee Dress with Elastic Cinched Waist, Fun Designs & Colors", image:     'https://th.bing.com/th/id/OIP.IzirHmg7-KAh7CF3ZXa_FQHaHa?rs=1&pid=ImgDetMain',                            price: "$1.25" },
            { id:5008, name: "Gymboree Girls and Toddler Short Sleeve Casual Printed Dresses", image:     'https://th.bing.com/th/id/OIP.SwQxKO3GzrM_uUCjDyU5zgAAAA?rs=1&pid=ImgDetMain',                          price: "$3.00" },
            { id:5009, name: "Calvin Klein Girls' Sleeveless Party Dress, Fit and Flare Silhouette, Round Neckline & Back Zip Closure", image:   'https://th.bing.com/th/id/OIP.Dyu0plQ27JZ4yh6GbcY9ugHaLH?w=853&h=1280&rs=1&pid=ImgDetMain',                               price: "$4.00" },
            { id:6000, name: "Simple Joys by Carter's Girls' Short-Sleeve and Sleeveless Dress Sets, Pack of 2", image:   'https://th.bing.com/th/id/OIP.vAM3wppVAAgLxsRgN59UkAHaHa?rs=1&pid=ImgDetMain',                       price: "$4.00" },
            { id:6001, name: "storeofbaby Girls Short Sleeve Dress V Neck Button Ruffle Hem Dresses with Belt 5-14 Years", image :    'https://smartsaversunite.com/wp-content/uploads/2024/09/Screen-Shot-2024-09-23-at-2.23.27-PM.png',             price: "$4.00" },
            { id:6002, name: "Nautica Girls' Short Sleeve Jersey Tee Dress with Elastic Cinched Waist, Fun Designs & Colors", image:     'https://th.bing.com/th/id/OIP.49-gqLauTkLigXqBLbX8UQHaHc?w=1068&h=1074&rs=1&pid=ImgDetMain',             price: "$4.00" },
            { id:6003, name: "Yoklass Girls Summer Stretchy Dress A line Twirly Skater Dresses with Pockets 5-14 Years", image:     'https://th.bing.com/th/id/OIP.2ASCTphLwUFBSDbR4pjJ3AHaJ4?w=480&h=640&rs=1&pid=ImgDetMain',                 price: "$4.00" },
            { id:6004, name: "Lucky Brand Girls' Short Sleeve Denim Chambray Shirt Dress", image:     'https://th.bing.com/th/id/OIP.EBoeKkw3DsI6Toha49u-JAHaHa?rs=1&pid=ImgDetMain',                   price: "$4.00" },
            { id:6005, name: "Girl Toddler Full-Length Straight Tulle Tutu Lace Back Party Flower Girl Dress", image:     'https://th.bing.com/th/id/OIP.3afVTBKXQlPPOoqni6x2VwHaJH?rs=1&pid=ImgDetMain',               price: "$4.00" },
                          
        
               // Add other cosmetics products here...
             ];
      
  
    
    
    const allProducts = [
      ...electronicsProducts,
      ...fashionProducts,
       ...groceryProducts, 
       ...cosmeticsProducts, 
       ...BrushProducts, 
       ...BagsProducts,
      ...BoysDressesProducts,
      ...ShoesProducts,
      ...MobilesProducts,
      ...LaptopProducts,
      ...WatchesProducts,
      ...NecklacesProducts,
      ...ChairProducts,
      ...GirlsDressesProducts,
      // Add other product categories...
    ];
  
  // Effect to find the product when the category or id changes
  useEffect(() => {
    const selectedProduct = allProducts.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, allProducts]);

  return (
    <div>
      <h2>Select Category</h2>
      {/* <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="All Products">All Products</option>
        <option value="Electronics">Electronics</option>
        
      </select> */}

      {product ? (
        <div className="product-detail">
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>Price: {product.price}</p>
          <Link to="/contact">
            <button className="buy-now-button">Buy Now</button>
          </Link>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product)} // Use addToCart from CartContext
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;

