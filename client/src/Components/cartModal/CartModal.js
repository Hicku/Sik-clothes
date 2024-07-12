import { useState } from "react";
import "./cartModal.css";

function CartModal({}) {
  const [isCartOpen, setIsCartOpen] = useState(true);
  return (
    <div
      className={`search-modal-container ${isCartOpen ? "open" : "close"}`}
    ></div>
  );
}

export default CartModal;
