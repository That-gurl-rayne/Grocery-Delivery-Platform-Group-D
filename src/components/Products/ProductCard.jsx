import React from "react";
import "./ProductCard.css";

function ProductCard({ image, name, price, onAddToCart, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">₦{price.toLocaleString()}</p>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;