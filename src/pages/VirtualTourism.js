import React, { useEffect } from 'react';
import '../styles/VirtualTourism.css';

function VirtualTourism() {
  return (
    <div className="tourism-container">
      <header>
        <h1>Virtual Tourism: Explore the Himalayas</h1>
      </header>

      <section className="virtual-tour">
        <h2>360-Degree Virtual Reality Tour</h2>
        <div className="tour-container">
          <iframe
            src="https://www.360cities.net/embed_iframe/everest-base-camp-5364m" 
            width="100%"
            height="500px"
            allowFullScreen
            allow="vr"
            title="Everest Base Camp 360 Tour"
          ></iframe>
        </div>
        <p>Everest Base Camp - Immerse yourself in the stunning landscapes of the Himalayas through this 360-degree virtual tour.</p>
      </section>

      <section className="map-section">
        <h2>Explore Kathmandu, Nepal via Google Maps</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.579944983032!2d85.2848476!3d27.7089542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1692318665647!5m2!1sen!2sus"
            width="100%"
            height="450px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Kathmandu, Nepal Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default VirtualTourism;