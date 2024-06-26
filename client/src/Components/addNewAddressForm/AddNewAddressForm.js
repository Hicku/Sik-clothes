import { FaRegAddressCard } from "react-icons/fa6";
import "../addressDetails/AddressDetails";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addAddress, reset } from "../../features/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

function AddNewAddressForm({ setIsAddressForm }) {
  const dispatch = useDispatch();

  const [addressFormData, setAddressFormData] = useState({
    number: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    user: JSON.parse(localStorage.getItem("user"))._id,
  });

  const { number, street, city, postcode, country, user } = addressFormData;

  const addNewAddress = (e) => {
    e.preventDefault();
    const addressData = {
      number,
      street,
      city,
      postcode,
      country,
      user,
    };

    dispatch(addAddress(addressData));
    setIsAddressForm(false);
    setAddressFormData({
      number: "",
      street: "",
      city: "",
      postcode: "",
      country: "",
      user: "",
    });
  };

  const onChange = (e) => {
    setAddressFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeNewAddress = () => {
    setAddressFormData({
      number: "",
      street: "",
      city: "",
      postcode: "",
      country: "",
      user: "",
    });
    setIsAddressForm(false);
  };

  return (
    <div className="new-address">
      <div>Add address</div>
      <div className="address-close-button-container">
        <IoMdClose onClick={closeNewAddress} className="address-close-button" />
      </div>
      <div className="address-form-container">
        <form onSubmit={addNewAddress}>
          <div>
            <label htmlFor="number">Number</label>
            <input
              name="number"
              onChange={onChange}
              value={number}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="street">Street</label>
            <input
              name="street"
              onChange={onChange}
              value={street}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              name="city"
              onChange={onChange}
              value={city}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="postcode">Postcode</label>
            <input
              name="postcode"
              onChange={onChange}
              value={postcode}
              type="text"
            ></input>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              name="country"
              onChange={onChange}
              value={country}
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

export default AddNewAddressForm;
