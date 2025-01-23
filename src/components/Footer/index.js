import React from 'react'
import './index.css' // Import the CSS file for styling

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <h3>BE THE FIRST TO KNOW</h3>
      <p>Sign up for updates from mettä muse.</p>
      <div className="subscribe">
        <input type="email" placeholder="Enter your e-mail..." />
        <button>SUBSCRIBE</button>
      </div>
    </div>
    <div className="footer-content">
      <div className="footer-column">
        <h4>CONTACT US</h4>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
        <h4>CURRENCY</h4>
        <p>
          <span className="currency-flag">🇺🇸</span> USD
        </p>
        <small>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </small>
      </div>
      <div className="footer-column">
        <h4>mettä muse</h4>
        <ul>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>QUICK LINKS</h4>
        <ul>
          <li>Orders & Shipping</li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>FOLLOW US</h4>
        <div className="social-icons">
          <span>Instagram</span>
          <span>LinkedIn</span>
        </div>
        <h4>mettä muse ACCEPTS</h4>
        <div className="payment-methods">
          <span>GPay</span>
          <span>Visa</span>
          <span>MasterCard</span>
          <span>PayPal</span>
          <span>Amex</span>
          <span>Apple Pay</span>
          <span>Shop Pay</span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
