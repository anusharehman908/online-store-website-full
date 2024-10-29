import React from "react";
import "./Footer.css"; // Add your CSS styles here



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Exclusive</h4>
        <p>Subscribe</p>
        <p>ANUSHA REHMAN QURESHI:</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <p>LOCATION:KARACHI PAKISTAN</p>
        <p>INFO@gmail.com</p>
        <p>03320405516</p>
      </div>
      <div className="footer-section">
        <h4>Account</h4>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="footer-section">
        <h4>Quick Link</h4>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="footer-section">
        <h4>Download App</h4>
        <p>Save $3 with App New User Only</p>
        <div className="app-icons">
          <img src="https://img.icons8.com/?size=100&id=rLQJIsR7jscN&format=png&color=000000" alt="Google Play" />
          <img src="https://img.icons8.com/?size=100&id=48112&format=png&color=000000" alt="App Store" />
        </div>
      </div>
      <div className="social-icons">
  <a href="https://img.icons8.com/?size=100&id=118501&format=png&color=000000" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>

    </footer>
  );
};

export default Footer;
