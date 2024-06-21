import "./addNewCard.css";

import React, { useState } from "react";

const CreditCardForm = () => {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  // Additional form handling logic will be added here

  return (
    <form>
      <input
        type="text"
        name="number"
        value={cardInfo.number}
        onChange={handleInputChange}
        placeholder="Card Number"
      />
      <input
        type="text"
        name="name"
        value={cardInfo.name}
        onChange={handleInputChange}
        placeholder="Cardholder Name"
      />
      <input
        type="text"
        name="expiry"
        value={cardInfo.expiry}
        onChange={handleInputChange}
        placeholder="Expiry Date"
      />
      <input
        type="text"
        name="cvc"
        value={cardInfo.cvc}
        onChange={handleInputChange}
        placeholder="CVC"
      />
      {/* Additional inputs and elements will be added here */}
    </form>
  );
};

export default CreditCardForm;
