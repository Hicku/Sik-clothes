import "./paymentDetails.css";
import { FaRegCreditCard } from "react-icons/fa";
import { useState, useEffect } from "react";
import AddNewCard from "../addNewCardForm/AddNewCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getCards,
  deleteCard,
  reset,
} from "../../features/payments/paymentSlice";

function PaymentDetails({ isAddCard, setIsAddCard }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const customerId = user.customerId;

  const dispatch = useDispatch();

  const { cards, isError, isLoading } = useSelector((state) => state.payment);

  useEffect(() => {
    if (customerId) {
      dispatch(getCards(customerId));
    }
  }, [dispatch, customerId]);

  const goToAddPayemnt = () => {
    setIsAddCard(true);
  };

  const togglePaymentClass = (index, length) => {
    if (length % 2 === 0 && length > 4) {
      if (index === length - 1 || index === length - 2) {
        return "display-payment no-border";
      }
    } else {
      if (index === length - 1 && length > 4) {
        return "display-payment no-border";
      }
    }
    return "display-payment";
  };

  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard(cardId)).then(() => {
      dispatch(getCards(customerId));
    });
  };

  return (
    <div className="payment-details-container">
      {isAddCard ? (
        <AddNewCard setIsAddCard={setIsAddCard} />
      ) : (
        <>
          <section className="add-card-container">
            <div>
              <FaRegCreditCard className="add-card-icon" />
            </div>
            <div>
              <button className="add-card-button" onClick={goToAddPayemnt}>
                Add card
              </button>
            </div>
          </section>
          <section className="display-payment-container">
            {cards && cards.length > 0 ? (
              cards.map((card, index) => (
                <div
                  className={togglePaymentClass(index, cards.length)}
                  key={card.id}
                >
                  <div className="saved-payment-details">
                    <div>
                      {card.card.brand.toUpperCase()} ending in{" "}
                      {card.card.last4}
                    </div>
                    <div>
                      Expiry: {card.card.exp_month}/{card.card.exp_year}
                    </div>
                  </div>
                  <div className="delete-payment-container">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteCard(card.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No cards available</div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default PaymentDetails;
