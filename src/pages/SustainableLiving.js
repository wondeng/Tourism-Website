import React, { useEffect, useState } from 'react';
import '../styles/SustainableLiving.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function SustainableLiving() {
  const [selectedInfo, setSelectedInfo] = useState(null);

  useEffect(() => {
    const icons = document.querySelectorAll('.interactive-icon');
    icons.forEach((icon) => {
      icon.classList.add('loaded');
    });
  }, []);

  const handleHover = (info) => {
    setSelectedInfo(info);
  };

  const clearInfo = () => {
    setSelectedInfo(null);
  };

  const farmingData = {
    labels: ['Organic Yield', 'Water Usage', 'Carbon Footprint'],
    datasets: [
      {
        label: 'Traditional Farming',
        data: [70, 50, 30],
        backgroundColor: 'rgba(102, 194, 255, 0.7)',
      },
      {
        label: 'Modern Farming',
        data: [90, 70, 80],
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
      },
    ],
  };

  const farmingOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparison of Farming Methods',
      },
    },
  };

  return (
    <div className="sustainable-container">
      <header className="sustainable-header">
        <h1>Sustainable Living</h1>
      </header>

      <section className="agriculture">
        <header><h2>Traditional Agriculture Practices</h2></header> 
        <p className="section-intro">
          Discover the time-honored methods of farming in the Himalayan region, emphasizing organic farming techniques, manure production, and the use of traditional tools that have been passed down through generations.
        </p>
        <ul className="practices-list">
          <li className="practice-item">
            <img src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-poo-vector-icon-illustration-design-manure-cartoon-poop-vector-picture-image_10377455.png" alt="Manure Production" className="practice-icon" />
            <span>Manure Production Techniques</span>
            <div className="tooltip">Learn how natural fertilizers are produced using traditional methods.</div>
          </li>
          <li className="practice-item">
            <img src="https://t4.ftcdn.net/jpg/07/20/41/73/360_F_720417343_WsqKVVZyrmtWRQdzEcIx1hZLc3KhgJyd.jpg" alt="Organic Farming Methods" className="practice-icon"/>
            <span>Organic Farming Methods</span>
            <div className="tooltip">Explore sustainable farming methods that avoid synthetic pesticides.</div>
          </li>
          <li className="practice-item">
            <img src="https://pngimg.com/d/rake_PNG20.png" alt="Traditional Tools" className="practice-icon" />
            <span>Traditional Farming Tools</span>
            <div className="tooltip">Understand the tools that have been used for centuries in Himalayan agriculture.</div>
          </li>
        </ul>
      </section>

      <section className="infographics">
        <header><h2>Interactive Infographics</h2></header>
        <p className="section-intro">
          Explore the differences between traditional and modern farming methods through our interactive infographic.
        </p>
        <div className="infographics-container">
          <svg
            viewBox="0 10 600 400"
            xmlns="http://www.w3.org/2000/svg"
            onMouseLeave={clearInfo}
          >
            {/* Icons for traditional and modern farming */}
            <image
              href="https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              x="50"
              y="50"
              height="300"
              width="200"
              onMouseEnter={() => handleHover('Traditional Farming')}
              className="interactive-icon left-icon"
            />
            <image
              href="https://images.unsplash.com/photo-1656772124124-ca4c8022744f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              x="350"
              y="50"
              height="300"
              width="200"
              onMouseEnter={() => handleHover('Modern Farming')}
              className="interactive-icon right-icon"
            />

            {/* Information display */}
            {selectedInfo && (
              <text x="20" y="380" fontSize="20" fill="black">
                {selectedInfo === 'Traditional Farming'
                  ? 'Traditional farming relies on natural resources and organic methods.'
                  : 'Modern farming utilizes advanced technology and synthetic inputs.'}
              </text>
            )}
          </svg>
        </div>
        <div className="chart-container">
          <Bar data={farmingData} options={farmingOptions} />
        </div>
      </section>

      <section className="cta-section">
        <h2>Get Involved</h2>
        <p>
          Interested in learning more about sustainable living practices? Join our community to share knowledge, resources, and tips.
        </p>
        <button className="cta-button">Join the Community</button>
      </section>
      <section className="market-centers">
       <header><h2>Find Nearby Tibetan Markets To Support</h2></header> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57950.391294249515!2d-73.94464712532239!3d40.69293473972907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snearest%20tibetan%20owned%20market!5e0!3m2!1sen!2sus!4v1723990050423!5m2!1sen!2sus" 
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default SustainableLiving;
