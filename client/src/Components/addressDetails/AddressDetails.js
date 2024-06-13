import { FaRegAddressCard } from "react-icons/fa6";
import "./addressDetails.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addAddress, reset } from "../../features/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

function AddressDetails() {
  const [onAddressForm, setOnAddressForm] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    number: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    user: JSON.parse(localStorage.getItem("user"))._id,
  });

  const { number, street, city, postcode, country, user } = addressFormData;

  const { addresses, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.address
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || addresses) {
      toast.success(message);
    }
    dispatch(reset());
  }, [addresses, isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setAddressFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const goToAddressForm = () => {
    setOnAddressForm(true);
  };

  const closeNewAddress = () => {
    setOnAddressForm(false);
  };

  const updateAddress = (e) => {
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
    setOnAddressForm(false);
  };

  return (
    <div
      className={
        onAddressForm
          ? "address-details-container-form"
          : "address-details-container-update"
      }
    >
      <div
        className={`update-address-container ${
          onAddressForm ? "new-address-container" : ""
        }`}
      >
        {onAddressForm ? (
          <div className="new-address">
            <div className="address-close-button-container">
              <IoMdClose
                onClick={closeNewAddress}
                className="address-close-button"
              />
            </div>
            <div className="address-form-container">
              <form onSubmit={updateAddress}>
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
                  <button>Update</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <>
            <FaRegAddressCard className="address-icon" />
            <button className="address-update-button" onClick={goToAddressForm}>
              Add address
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AddressDetails;
