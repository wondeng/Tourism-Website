import React from 'react';
import '../styles/SustainableLiving.css';

function SustainableLiving() {
  return (
    <div className="sustainable-container">
      <header>
        <h1>Sustainable Living</h1>
      </header>
      <section className="agriculture">
        <h2>Traditional Agriculture Practices</h2>
        <p>
          Learn about the traditional methods of farming in the Himalayan region, including organic farming techniques, manure production, and the use of traditional tools.
        </p>
        <ul>
          <li>Manure Production Techniques</li>
          <li>Organic Farming Methods</li>
          <li>Traditional Farming Tools</li>
        </ul>
      </section>
      <section className="infographics">
        <h2>Interactive Infographics</h2>
        <p>
          Explore the differences between traditional and modern farming methods through interactive infographics.
        </p>
        {/* Placeholder for future infographics or interactive content */}
      </section>
    </div>
  );
}

export default SustainableLiving;
