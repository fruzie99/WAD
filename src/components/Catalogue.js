// Catalogue.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Adjust the path as per your actual file structure
import './Catalogue.css';

const products = [
  { id: 1, name: 'Product 1', imageUrl: 'https://images-cdn.ubuy.co.in/635ddb1188b6ae453404b343-unisex-jujutsu-kaisen-anime-gojo-satoru.jpg', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', imageUrl: 'https://m.media-amazon.com/images/I/61WwFra1CSL._AC_UY1000_.jpg', description: 'Description 2', price: 20 },
  { id: 3, name: 'Product 3', imageUrl: 'https://images-cdn.ubuy.co.in/6353f77f98449e303f51a0a9-taicanon-mens-3d-naruto-hoodie-cool.jpg', description: 'Description 3', price: 30 },
  { id: 4, name: 'Product 4', imageUrl: 'https://m.media-amazon.com/images/I/61dmrgeUSHL._AC_UY1100_.jpg', description: 'Description 4', price: 40 },
  { id: 5, name: 'Product 5', imageUrl: 'https://m.media-amazon.com/images/I/61Lp05LRTEL._AC_UY1000_.jpg', description: 'Description 5', price: 50 },
  { id: 6, name: 'Product 6', imageUrl: 'https://img.joomcdn.net/676d902a87a0f3b35ab4284e187da8451ffb3127_original.jpeg', description: 'Description 6', price: 60 },
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
