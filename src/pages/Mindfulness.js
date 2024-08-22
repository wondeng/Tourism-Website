import React from 'react';
import '../styles/Mindfulness.css';

export default function Mindfulness() {

  return (
    <div className="mindfulness-container">
      {/* Header Section */}
      <header>
        <h1>Mindfulness and Wellness</h1>
      </header>

      {/* Content Sections */}
      <h3>The Essence of Himalayan Mindfulness</h3>
      <p><strong>Living in the Moment:</strong> The rugged and serene environment of the Himalayas encourages a deep connection with the present moment. This awareness fosters gratitude for life's simple pleasures and builds resilience in facing challenges.</p>
      
      <p><strong>Connection with Nature:</strong> In the Himalayas, nature is a living entity deserving of respect and care. This deep bond with the environment influences everything from daily practices to spiritual rituals, promoting a sense of oneness with the earth.</p>

      <h3>Spiritual Practices</h3>
      <p><strong>Meditation and Mantras:</strong> Himalayan mindfulness includes practices like meditation, mantra recitation, and mindful movement. These practices are designed to cultivate awareness, focus, and a deeper connection with the self and the universe.</p>
      
      <p><strong>Visualization Techniques:</strong> Himalayan traditions often involve visualizations of deities, mandalas, or natural phenomena, which are intended to enhance concentration and understanding of reality.</p>

      <h3>Cultural Richness</h3>
      <p><strong>Festivals and Rituals:</strong> The vibrant festivals in the Himalayas, such as Losar (Tibetan New Year), are not only celebrations but also communal mindfulness practices that help preserve ancient traditions and foster spiritual connection.</p>

      <h3>Environmental Consciousness</h3>
      <p><strong>Sustainable Living Practices:</strong> The Himalayan way of life is inherently sustainable, with practices that emphasize harmony with nature. These practices include traditional farming methods, water conservation, and eco-friendly waste management.</p>

      {/* Himalayan Folk Tales and Myths */}
      <section className="folk-tales">
       <header><h2>Himalayan Folk Tales and Myths</h2></header> 
        <iframe 
          src="https://www.gutenberg.org/files/58816/58816-h/58816-h.htm" 
          style={{ border: 'none', width: '80%', height: '600px' }}>
          Your browser does not support iframes.
        </iframe>
      </section>
      
      {/* Curated YouTube Playlist */}
      <section className="youtube-playlist">
        <header>
          <h2>Curated YouTube Playlist
        </h2>
        </header>
        
        
        <div className="youtube-playlist-grid">
          <div className="video-item1">
            <iframe src="https://www.youtube.com/embed/BR6yH4S1UMU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
          <div className="video-item2">
            <iframe src="https://www.youtube.com/embed/yXX9_dX_gjo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="video-item3">
            <iframe src="https://www.youtube.com/embed/HmEo6RI4Wvs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      
      {/* Google Maps Embed for Tibetan Meditation Centers */}
      <section className="meditation-centers">
        <h2>Find Nearby Tibetan Meditation Centers</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48380.4469330405!2d-73.99627703055133!3d40.722904816545935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stibetan%20meditation%20centers!5e0!3m2!1sen!2sus!4v1723938487301!5m2!1sen!2sus" 
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
