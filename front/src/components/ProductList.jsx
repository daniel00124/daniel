import React from 'react';

const ProductList = ({ products, showDetails }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <button className="product-item" onClick={() => showDetails(product)} key={product.id}>
          <img src={product.largeImageURL} alt={product.type}  />
        </button>
      ))}
    </div>
  );
};

export default ProductList;