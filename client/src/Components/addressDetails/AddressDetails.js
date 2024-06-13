import { FaRegAddressCard } from "react-icons/fa6";
import "./addressDetails.css";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function AddressDetails() {
  const [newAddress, setNewAddress] = useState(false);

  const addAddress = () => {
    setNewAddress(true);
  };

  return (
    <div
      className={`address-details-container-update ${
        newAddress ? "address-details-container-form" : ""
      }`}
    >
      <div
        className={`update-address-container ${
          newAddress ? "new-address-container" : ""
        }`}
      >
        {newAddress ? (
          <div className="new-address">
            <div className="address-close-button-container">
              <button className="address-close-button">
                <IoMdClose />
              </button>
            </div>
            <div className="address-form-container">
              <form>
                <div>
                  <label>Number</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>Street</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>City</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>Postcode</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>Country</label>
                  <input type="text"></input>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <>
            <FaRegAddressCard className="address-icon" />
            <button className="address-update-button" onClick={addAddress}>
              Add address
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AddressDetails;
