import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../style/ItemCard.css';

const ItemCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="item-card">
      {product.views < 10 && <span className="new-badge">New Arrival</span>}
      
      <img
        src={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      />
      <div className="product-name">{product.name}</div>
      <div className="product-price">{product.price} ₫</div>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
