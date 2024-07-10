// Catalogue.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Adjust the path as per your actual file structure
import './Catalogue.css';

const products = [
  { id: 1, name: 'Product 1', imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/positive-light-silky-touch-highlighter-flaunt-1440x1952.jpg?v=1669937801', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', imageUrl: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/products/pdp-sku-Liquid-Blush-Dewy-Hope.jpg?v=1645133400', description: 'Description 2', price: 20 },
  { id: 3, name: 'Product 3', imageUrl: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/products/soft-pinch-tinted-lip-oil-serenity-1440x1952.jpg?v=1679094329', description: 'Description 3', price: 30 },
  { id: 4, name: 'Product 4', imageUrl: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Setting-Powder-Light-SKU.jpg?v=1639180706', description: 'Description 4', price: 40 },
  { id: 5, name: 'Product 5', imageUrl: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Bronzer-Stick-Power-Boost-SKU.jpg?v=1638297308',description: 'Description 4', price: 50 },
  { id: 6, name: 'Product 6', imageUrl: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Full-Size-Mascara-Open-SKU.jpg?v=1629247163', description: 'Description 6', price: 60 },
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
