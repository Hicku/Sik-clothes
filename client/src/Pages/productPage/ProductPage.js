import React from "react";
import "./productPage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, reset } from "../../features/cart/cartSlice";

function ProductPage({ isOpen, setIsOpen, selectedProduct, setWishlist }) {
  const addToWishlist = () => {
    setWishlist((prev) => [...prev, selectedProduct]);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [productquantity, setProductQuantity] = useState(1);

  const dispatch = useDispatch();

  const productId = selectedProduct._id;
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;

  const { items, isLoading, isError, message } = useSelector(
    (state) => state.cart
  );

  const handleAddToCart = () => {
    dispatch(addToCart(productId, userId));
  };

  const handleChangeSize = (size) => {
    selectedSize(size);
  };

  const onChange = (e) => {
    setProductQuantity(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setProductQuantity((prevQuantity) => Number((prevQuantity += 1)));
    } else if (e.key === "ArrowDown") {
      setProductQuantity((prevQuantity) => Number((prevQuantity -= 1)));
    } else {
      e.preventDefault();
    }
  };

  console.log(`useId: ${userId}`);

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
              {[6, 8, 10, 12, 14, 16].map((size) => (
                <li key={size}>
                  <button
                    value={size}
                    onClick={() => handleChangeSize(size)}
                    className={selectedSize === size ? "selected" : ""}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
            <div className="quantity-container">
              <input
                className="quantity"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={productquantity}
                onChange={onChange}
                onKeyDown={onKeyDown}
              ></input>
              Qty
            </div>
          </div>
          <div className="cart-wish-buttons">
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to cart
            </button>
            <button onClick={addToWishlist}>Add to wishlist</button>
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
