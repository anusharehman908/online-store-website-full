// // components/AboutDropdown.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AboutDropdown.css'; // Importing the CSS file


// const AboutDropdown = () => {
//   return (
//     <div className="dropdown">
//       <button className="dropbtn">About</button>
//       <div className="dropdown-content">
//         <Link to="/about/cosmetics">COSMETICS</Link>
//         <Link to="/about/brush">BRUSH</Link>
//         {/* <Link to="/about/blanket">BLanket </Link> */}
//       </div>
//     </div>
//   );
// };

// export default AboutDropdown;
























































// components/AboutDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutDropdown.css';

const AboutDropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">About</button>
      <div className="dropdown-content">
        <Link to="/about/cosmetics">COSMETICS</Link>
        <Link to="/about/brush">BRUSH</Link>
      </div>
    </div>
  );
};

export default AboutDropdown;
