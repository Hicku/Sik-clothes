import React from "react";
import "./productPage.css";

function ProductPage({ isOpen, setIsOpen, selectedProduct }) {
  return (
    <div className="product-page-container">
      <section className="image-container">
        <img src={selectedProduct.image} />
      </section>
      <section className="product-details-container">
        <div className="product-details">
          <div></div>
          <h2>{selectedProduct.title}</h2>
          <p>£{selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>

          <button>Add to cart</button>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
