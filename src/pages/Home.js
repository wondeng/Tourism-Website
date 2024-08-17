import React from 'react';
import Mindfulness from './Mindfulness';
import SustainableLiving from './SustainableLiving';
import VirtualTourism from './VirtualTourism';

function Home() {
  return (
    <div>
      <h1>Welcome to the Himalayan Cultural Archive</h1>
      <Mindfulness />
      <SustainableLiving />
      <VirtualTourism />
    </div>
  );
}

export default Home;
