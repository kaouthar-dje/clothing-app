import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../style/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="details">
                <h3>{item.name}</h3>
                <p>{item.price} ₫</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
          <h3 className="total">Total: {total} ₫</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
