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
                <span>+91-9999-999-999</span>
              </div>
              <div className="contact-item">
                <Mail size={14} />
                <span>info@kommuriprinters.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={14} />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/business-cards">Business Cards</Link></li>
              <li><Link to="/services/brochures">Brochures</Link></li>
              <li><Link to="/services/banners">Banners</Link></li>
              <li><Link to="/services/packaging">Packaging</Link></li>
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