// src/components/ProductCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartslice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(state =>
    state.cart.cartItems.some(item => item.id === plant.id)
  );

  const handleAdd = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} width="100" />
      <h4>{plant.name}</h4>
      <p>₹{plant.price}</p>
      <button onClick={handleAdd} disabled={isInCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
