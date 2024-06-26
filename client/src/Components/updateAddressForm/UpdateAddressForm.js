import "../addressDetails/addressDetails.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { updateAddress, reset } from "../../features/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

function UpdateAddressForm({
  setIsAddressForm,
  setIsUpdateAddressForm,
  selectedAddress,
  setCurrentComponent,
  setAddressUpdated,
}) {
  const { addresses, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.address
  );
  const [mounted, setMounted] = useState(false);
  const [updateAddressFormData, setUpdateAddressFormData] = useState({
    id: selectedAddress._id,
    number: selectedAddress.number,
    street: selectedAddress.street,
    city: selectedAddress.city,
    postcode: selectedAddress.postcode,
    country: selectedAddress.country,
  });

  const { number, street, city, postcode, country } = updateAddressFormData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setUpdateAddressFormData({
      ...updateAddressFormData,
      [e.target.name]: e.target.value,
    });
  };

  const closeUpdateAddress = () => {
    setIsUpdateAddressForm(false);
    setIsAddressForm(false);
  };

  const onUpdateAddress = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const addressData = {
      id: selectedAddress._id,
      number,
      street,
      city,
      postcode,
      country,
    };

    dispatch(updateAddress(addressData));
    setIsUpdateAddressForm(false);
    setIsAddressForm(false);
    setAddressUpdated(true);
  };

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

export default UpdateAddressForm;
