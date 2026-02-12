import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Our Services</h1>

      <div className="services-grid">
        <div className="service-card">
          <h3>Wedding Cards</h3>
          <p>Premium custom wedding invitation printing.</p>
        </div>

        <div className="service-card">
          <h3>Visiting Cards</h3>
          <p>High-quality business visiting cards.</p>
        </div>

        <div className="service-card">
          <h3>Banners</h3>
          <p>Flex & Vinyl banners for all occasions.</p>
        </div>

        <div className="service-card">
          <h3>Digital Printing</h3>
          <p>All types of digital printing services.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
