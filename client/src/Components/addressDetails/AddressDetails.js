import { FaRegAddressCard } from "react-icons/fa6";
import "./addressDetails.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getAllAddresses,
  addAddress,
  reset,
  deleteAddress,
} from "../../features/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

function AddressDetails({ setCurrentComponent }) {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [isAddressForm, setIsAddressForm] = useState(false);
  const [isUpdateAddressForm, setIsUpdateAddressForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    number: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    user: JSON.parse(localStorage.getItem("user"))._id,
  });
  const [localAdresses, setLocalAddresses] = useState([]);

  const { number, street, city, postcode, country, user } = addressFormData;

  const { addresses, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.address
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAddresses(JSON.parse(localStorage.getItem("user"))._id));
  }, [isError]);

  useEffect(() => {
    if (addresses.length > 0) {
      setLocalAddresses(addresses);
    }
  }, [addresses]);

  const onChange = (e) => {
    setAddressFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (mounted) {
      if (isError) {
        toast.error(message);
      }

      if (isSuccess && message !== "Addresses fetched successfully!") {
        toast.success(message);
      }

      dispatch(reset());
      if (isSuccess && message === "Address added successfully!") {
        setCurrentComponent("Account");
      }
    } else {
      setMounted(true);
    }
  }, [addresses, isError, isSuccess, message, dispatch, mounted]);

  const goToAddressForm = () => {
    setIsAddressForm(true);
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

  return (
    <div className="address-page-container">
      <section
        className={
          isAddressForm
            ? "address-details-container-form"
            : "address-details-container-add"
        }
      >
        <div
          className={`update-address-container ${
            isAddressForm ? "new-address-container" : ""
          }`}
        >
          {isAddressForm ? (
            <div className="new-address">
              <div className="address-close-button-container">
                <IoMdClose
                  onClick={closeNewAddress}
                  className="address-close-button"
                />
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
          ) : (
            <>
              <FaRegAddressCard className="address-icon" />
              <button className="address-new-button" onClick={goToAddressForm}>
                Add address
              </button>
            </>
          )}
        </div>
      </section>
      <section className="display-address-container">
        {localAdresses.map((address) => (
          <div className="display-address" key={address._id}>
            <div className="edit-address-button-container">
              <button>Edit</button>
            </div>
            <div className="saved-address-details">
              <div>{address.number}</div>
              <div>{address.street}</div>
              <div>{address.city}</div>
              <div>{address.postcode}</div>
              <div>{address.country}</div>
            </div>
            <div className="delete-address-container">
              <button>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AddressDetails;
