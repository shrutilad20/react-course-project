// src/pages/Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, your one-stop-shop for beautiful houseplants.</p>
      <img src="/logo512.png" alt="nursery" width="200" />
      <br />
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Landing;
