// src/pages/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/cartslice';
import Header from '../components/header';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h2>Your Cart</h2>
      <p>Total Items: {cart.totalItems}</p>
      <p>Total Price: ₹{cart.totalPrice}</p>
      {cart.cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width="50" />
          <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
          <div>
            <button onClick={() => dispatch(increase(item.id))}>+</button>
            <button onClick={() => dispatch(decrease(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </div>
        </div>
      ))}
      <br />
      <button>Checkout (Coming Soon)</button>
      <br />
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default CartPage;
