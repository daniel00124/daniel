
import React from 'react';

const ProductDetails = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Product Details</h3>
        <p>Views: {product.views}</p>
        <p>Downloads: {product.downloads}</p>
        <p>Collections: {product.collections}</p>
        <p>Likes: {product.likes}</p>
        <p>Comments: {product.comments}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetails;