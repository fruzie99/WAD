// Catalogue.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Adjust the path as per your actual file structure
import './Catalogue.css';

const products = [
  { id: 1, name: 'Product 1', imageUrl: 'https://www.rarebeauty.com/products/find-comfort-body-hair-fragrance-mist', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', imageUrl: 'https://www.rarebeauty.com/products/find-comfort-hydrating-hand-cream', description: 'Description 2', price: 20 },
  { id: 3, name: 'Product 3', imageUrl: 'https://www.rarebeauty.com/products/soft-pinch-luminous-powder-blush?variant=40970263232647', description: 'Description 3', price: 30 },
  { id: 4, name: 'Product 4', imageUrl: 'https://www.rarebeauty.com/products/positive-light-liquid-luminizer-mini?variant=40970263429255', description: 'Description 4', price: 40 },
  { id: 5, name: 'Product 5', imageUrl: 'https://www.rarebeauty.com/products/brow-harmony-flexible-lifting-gel', description: 'Description 5', price: 50 },
  { id: 6, name: 'Product 6', imageUrl: 'https://www.rarebeauty.com/products/positive-light-silky-touch-highlighter?variant=40253134962823', description: 'Description 6', price: 60 },
  // Add more products as needed
];

const Catalogue = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="catalogue">
      <h1>Catalogue</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
