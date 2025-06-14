// src/pages/ProductListing.js
import React from 'react';
import './product.css';

import ProductCard from '../components/productcard';
import Header from '../components/header';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 120, category: 'Succulents', image: '/images/plants/aloe.jpg' },
  { id: 2, name: 'Snake Plant', price: 200, category: 'Succulents', image: '/images/plants/snake.jpg' },
  { id: 3, name: 'Spider Plant', price: 150, category: 'Air Purifying', image: '/images/plants/spider.jpg' },
  { id: 4, name: 'Peace Lily', price: 250, category: 'Flowering', image: '/images/plants/peacelily.jpg' },
  { id: 5, name: 'ZZ Plant', price: 300, category: 'Air Purifying', image: '/images/plants/zzplant.jpg' },
  { id: 6, name: 'Bamboo Palm', price: 350, category: 'Tropical', image: '/images/plants/bamboo.jpg' },
];


const ProductListing = () => {
  return (
    <div>
      <Header />
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plants.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
