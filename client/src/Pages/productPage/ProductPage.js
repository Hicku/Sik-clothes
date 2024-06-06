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
          <div className="title-container">
            <h2 className="product-title">{selectedProduct.title}</h2>
          </div>
          <div className="price-container">
            <p className="product-price">£{selectedProduct.price}</p>
          </div>
          <div className="size">Size: 10</div>
          <div>
            <ul className="size-list">
              <li>
                <button>6</button>
              </li>
              <li>
                <button>8</button>
              </li>
              <li>
                <button>10</button>
              </li>
              <li>
                <button>12</button>
              </li>
              <li>
                <button>14</button>
              </li>
              <li>
                <button>16</button>
              </li>
            </ul>
          </div>
          <div className="cart-wish-buttons">
            <button className="cart-btn">Add to cart</button>
            <button>Add to wishlist</button>
          </div>
        </div>
        <div className="description-container">
          <h3>Description</h3>
          <p>{selectedProduct.description}</p>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
