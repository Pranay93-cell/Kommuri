import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Gallery.css";


const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img5.png",
    "/images/img5.png"
  ];

  return (
    <section className="gallery-section">

      <h2 className="gallery-title">Our Services Gallery</h2>

      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              onClick={() => setSelectedImage(image)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}  // prevents closing when clicking image
          >
            <span 
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img 
              src={selectedImage}
              alt="Popup"
              className="modal-image"
            />
          </div>
        </div>
      )}

    </section>
  );
};


export default Gallery;
