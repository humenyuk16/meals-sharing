import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3>About Us</h3>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <div className="footer-contact-info">
          <p>
            Email: <a href="mailto:example@example.com">example@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:123-456-7890">123-456-7890</a>
          </p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>
      <div className="footer-column">
        <h3>Social Media</h3>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com" target="_blank">
            <img src="/streamline-logos/Facebook-Logo.svg" alt="Facebook" />
          </a>

          <a href="https://www.instagram.com" target="_blank">
            <img src="/streamline-logos/Instagram-Logo.svg" alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/anastasiia-humeniuk-88559b231/"
            target="_blank"
          >
            <img src="/streamline-logos/Linkedin-Logo.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <p className="footer-rights">&copy; 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
