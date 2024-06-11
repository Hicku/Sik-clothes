import { FaRegAddressCard } from "react-icons/fa6";
import "./addressDetails.css";

function addressDetails() {
  return (
    <div className="address-details-container">
      <div>
        <FaRegAddressCard className="address-icon" />
        <button>Add address</button>
      </div>
    </div>
  );
}

export default addressDetails;
