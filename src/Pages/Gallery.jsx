import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const { serviceId } = useParams();
  const [allItems, setAllItems] = useState([]);
  const [serviceTitle, setServiceTitle] = useState("");

  useEffect(() => {
    
    // fetch all gallery items once
    const fetchGallery = async () => {
      try {
        const res = await fetch(`/api/gallery`);
        const data = await res.json();
        setAllItems(data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };

    fetchGallery();
  }, []);

  useEffect(() => {
    if (!serviceId) return;
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services`);
        const data = await res.json();
        const service = data.find((s) => String(s.id) === serviceId);
        setServiceTitle(service ? service.title : "");
      } catch (err) {
        console.error("Error fetching service title:", err);
      }
    };

    fetchService();
  }, [serviceId]);

  // partition items based on service selection
  const currentItems = serviceId
    ? allItems.filter((i) => String(i.service_id) === serviceId)
    : allItems;
  const otherItems = serviceId
    ? allItems.filter((i) => String(i.service_id) !== serviceId)
    : [];

  return (
    <div className="gallery-container">
      <h1>Gallery {serviceTitle && `- ${serviceTitle}`}</h1>

      {currentItems.length === 0 && serviceId && (
        <p>No items for this service yet.</p>
      )}

      {currentItems.length > 0 && (
        <div className="gallery-grid">
          {currentItems.map((i) => (
            <div key={i.id} className="gallery-card">
              <img src={i.image_url} alt={i.title} />
              <h3>{i.title}</h3>
              <p>{i.description}</p>
            </div>
          ))}
        </div>
      )}

      {otherItems.length > 0 && (
        <>
          <h2>Other services</h2>
          <div className="gallery-grid">
            {otherItems.map((i) => (
              <div key={i.id} className="gallery-card">
                <img src={i.image_url} alt={i.title} />
                <h3>{i.title}</h3>
                <p>{i.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <Link to="/services" className="back-link">
        ← Back to Services
      </Link>
    </div>
  );
};

export default Gallery;
