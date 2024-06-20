import "./paymentDetails.css";
import { FaRegCreditCard } from "react-icons/fa";

function paymentDetails() {
  return (
    <div className="payment-details-container">
      <section className="add-card-container">
        <div>
          <FaRegCreditCard className="add-card-icon" />
        </div>
        <div>
          <button className="add-card-button">Add card</button>
        </div>
      </section>
    </div>
  );
}

export default paymentDetails;
