import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mindfulness from './pages/Mindfulness';
import SustainableLiving from './pages/SustainableLiving';
import VirtualTourism from './pages/VirtualTourism';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
        <Route path="/sustainable-living" element={<SustainableLiving />} />
        <Route path="/virtual-tourism" element={<VirtualTourism />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
