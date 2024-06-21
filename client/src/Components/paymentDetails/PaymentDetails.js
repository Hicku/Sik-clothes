import "./paymentDetails.css";
import { FaRegCreditCard } from "react-icons/fa";
import { useState } from "react";
import AddNewCard from "../addNewCardForm/AddNewCard";

function PaymentDetails() {
  const [isAddCard, setIsAddCard] = useState(false);

  const goToAddPayemnt = () => {
    setIsAddCard(true);
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
            {/* {localAdresses.map((address) => (
              <div className="display-payment" key={address._id}>
                <div className="saved-payment-details">
                  <div>{address.number}</div>
                  <div>{address.street}</div>
                  <div>{address.city}</div>
                  <div>{address.postcode}</div>
                  <div>{address.country}</div>
                </div>
                <div className="delete-payment-container">
                  <button>Delete</button>
                </div>
              </div>
            ))} */}

            <div className="display-payment">
              <div className="saved-payment-details">
                <div>Moneyz</div>
                <div>Pay</div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="delete-payment-container">
                <button>Delete</button>
              </div>
            </div>
            <div className="display-payment">
              <div className="saved-payment-details">
                <div>Moneyz</div>
                <div>Pay</div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="delete-payment-container">
                <button>Delete</button>
              </div>
            </div>
            <div className="display-payment">
              <div className="saved-payment-details">
                <div>Moneyz</div>
                <div>Pay</div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="delete-payment-container">
                <button>Delete</button>
              </div>
            </div>
            <div className="display-payment">
              <div className="saved-payment-details">
                <div>Moneyz</div>
                <div>Pay</div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="delete-payment-container">
                <button>Delete</button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default PaymentDetails;
