import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/data';
import { CartContext } from '../context/CartContext';
import '../style/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (product && !hasIncremented.current) {
      product.views++;
      hasIncremented.current = true;
    }
  }, [product]);

  return product ? (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">{product.price} ₫</p>
      <p className="views">Views: {product.views}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <div className="reviews">
        <h3>Reviews</h3>
        {product.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>Rating: {review.rating}</p>
              {review.comment && <p>Comment: {review.comment}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  ) : (
    <div>Product not found</div>
  );
};

export default ProductDetail;
