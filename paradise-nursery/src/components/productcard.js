// src/components/productcard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartslice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();

  // Correct selector: state.cart.cartItems
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const isAdded = cartItems.some(item => item.id === plant.id);

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <div className="product-info">
        <h3>{plant.name}</h3>
        <p>₹{plant.price}</p>
        <button
          className="btn"
          disabled={isAdded}
          onClick={() => dispatch(addToCart(plant))}
        >
          {isAdded ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
