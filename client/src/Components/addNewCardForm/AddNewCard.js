import "./addNewCard.css";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { addCard, reset } from "../../features/payments/paymentSlice";

// initial state of the form
const CreditCardForm = ({ setIsAddCard }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const customerId = user.customerId;

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.payment
  );

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setCardInfo({ ...cardInfo, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      return;
    }

    const { token, error } = await stripe.createToken(cardNumberElement);
    setIsAddCard(false);

    if (error) {
      console.log("Error creating token", error);
      toast.error("Error adding card");
    } else {
      dispatch(addCard({ customerId, token: token.id }));
    }
  };

  return (
    <div className="add-card-container">
      <form className="credit-card-form" onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="name"
          placeholder="Name"
          value={cardInfo.name}
          onChange={handleInputChange}
          required
        /> */}
        <div className="form-row">
          <CardNumberElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <div className="form-row">
          <CardExpiryElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <div className="form-row">
          <CardCvcElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default CreditCardForm;
