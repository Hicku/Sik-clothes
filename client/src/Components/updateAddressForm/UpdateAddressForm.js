import "../addressDetails/addressDetails.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { updateAddress } from "../../features/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { set } from "mongoose";

function UpdateAddressForm({ setIsUpdateAddressForm, setIsAddressForm }) {
  const user = JSON.parse(localStorage.getItem("user"))._id;

  const { address, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.address
  );
  //   const [updateAddressFormData, setUpdateAddressFormData] = useState({
  //     number: address.number,
  //     street: address.street,
  //     city: address.city,
  //     postcode: address.postcode,
  //     country: address.country,
  //     user,
  //   });

  const onChange = (e) => {};

  const closeUpdateAddress = () => {
    setIsUpdateAddressForm(false);
    setIsAddressForm(false);
  };

  const onUpdateAddress = () => {};

  const dispatch = useDispatch();

  return (
    <div className="new-address">
      <div>Update address</div>
      <div className="address-close-button-container">
        <IoMdClose
          onClick={closeUpdateAddress}
          className="address-close-button"
        />
      </div>
      <div className="address-form-container">
        <form onSubmit={onUpdateAddress}>
          <div>
            <label htmlFor="number">Number</label>
            <input
              name="number"
              onChange={onChange}
              //   value={number}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="street">Street</label>
            <input
              name="street"
              onChange={onChange}
              //   value={street}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              name="city"
              onChange={onChange}
              //   value={city}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="postcode">Postcode</label>
            <input
              name="postcode"
              onChange={onChange}
              //   value={postcode}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              name="country"
              onChange={onChange}
              //   value={country}
              type="text"
            ></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAddressForm;
