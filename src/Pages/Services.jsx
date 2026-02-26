import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/gallery/${id}`);
  };

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
        <div className="service-card" onClick={() => handleClick(1)}>
          <h3>Wedding Cards</h3>
          <p>Premium custom wedding invitation printing.</p>
        </div>

        <div className="service-card" onClick={() => handleClick(2)}>
          <h3>Visiting Cards</h3>
          <p>High-quality business visiting cards.</p>
        </div>

        <div className="service-card" onClick={() => handleClick(3)}>
          <h3>Banners</h3>
          <p>Flex & Vinyl banners for all occasions.</p>
        </div>

        <div className="service-card" onClick={() => handleClick(4)}>
          <h3>Digital Printing</h3>
          <p>All types of digital printing services.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
