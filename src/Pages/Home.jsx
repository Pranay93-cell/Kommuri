import React from 'react';
import { Link } from "react-router-dom";
import {
  Award as AwardIcon,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Headphones as HeadphonesIcon
} from 'lucide-react';
import './Home.css';

const features = [
  {
    icon: AwardIcon,
    title: 'Premium Quality',
    description:
      'Industry-leading print quality with state-of-the-art equipment and premium materials'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Quick delivery options including same-day and express services for urgent orders'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction guaranteed with our quality assurance and reprint policy'
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Dedicated customer support team available to assist with your printing needs'
  },
  
  {
    icon: Users,
    title: 'Trusted by 5000+',
    description: 'Serving businesses and individuals with excellence for over 12 years'
  }
];

const FeatureCard = ({ Icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon-container">
      <Icon className="feature-icon" />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const TrustIndicators = () => (
  <div className="trust-indicators">
    <div className="indicator-item">
      <div className="indicator-number">5000+</div>
      <div className="indicator-label">Happy Clients</div>
    </div>
    <div className="indicator-item">
      <div className="indicator-number">15K+</div>
      <div className="indicator-label">Projects Done</div>
    </div>
    <div className="indicator-item">
      <div className="indicator-number">12+</div>
      <div className="indicator-label">Years Experience</div>
    </div>
  </div>
);

const HeroContent = () => (
  <div className="hero-content">
    <div className="trust-badge">
      <AwardIcon className="badge-icon" />
      <span>Trusted by 5,000+ Businesses</span>
    </div>

    <h1 className="hero-title">
      Professional Printing
      <span className="hero-subtitle">Solutions for Your Business</span>
    </h1>

    <p className="hero-description">
      From corporate stationery to marketing materials, we deliver exceptional print
      quality with fast turnaround times. Your trusted partner for all printing needs.
    </p>

    <div className="buttons-container">
      {/* FIXED: Removed the outer anchor tag and properly structured the button */}
      <Link to="/services" className="primary-button">
        Explore Services
        <ArrowRight className="button-arrow" />
      </Link>
      
      <Link to="/contact" className="secondary-button">
        Contact Us
      </Link>
    </div>

    <TrustIndicators />
  </div>
);

const Home = () => (
  <section id="home" className="home-section">
    <div className="cards-overlay">
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="card" aria-hidden="true" />
      ))}
    </div>
    <div className="home-container">
      <div className="home-grid">
        <HeroContent />

        <div className="features-grid">
          {features.map((f, i) => (
            <FeatureCard key={i} Icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Home;