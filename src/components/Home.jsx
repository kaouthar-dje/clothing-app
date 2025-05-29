import React from 'react';
import products from '../data/data';
import ItemCard from './ItemCard';
import '../style/App.css';

const Home = ({ searchQuery }) => {
  const lowerQuery = searchQuery.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery)
  );

  return (
    <div className="home-container">
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
