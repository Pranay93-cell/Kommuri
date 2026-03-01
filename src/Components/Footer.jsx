import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Kommuri Printers</h3>
            <p>
              Professional printing services for businesses and individuals with premium quality and fast delivery.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={14} />
                <span>+91 9848670271</span>
                <span>+91 9640976362</span>
              </div>
              <div className="contact-item">
                <Mail size={14} />
                  <a href="https://mail.google.com/mail/?view=cm&to=kommuriprinters@gmail.com" target="_blank" rel="noopener noreferrer">kommuriprinters@gmail.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={14} />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Business Cards</li>
              <li>Brochures</li>
              <li>Banners</li>
              <li>Packaging</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kommuri Printers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;