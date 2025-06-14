// landing.js
import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'; // create this separately

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Discover and shop beautiful houseplants for your home.</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
