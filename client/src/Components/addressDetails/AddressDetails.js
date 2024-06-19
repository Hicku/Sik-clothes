import { FaRegAddressCard } from "react-icons/fa6";
import "./addressDetails.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UpdateAddressForm from "../updateAddressForm/UpdateAddressForm";
import AddNewAddressForm from "../addNewAddressForm/AddNewAddressForm";
import {
  getAllAddresses,
  reset,
  deleteAddress,
} from "../../features/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
// import { IoMdClose } from "react-icons/io";

function AddressDetails({ setCurrentComponent }) {
  const [isAddressForm, setIsAddressForm] = useState(false);
  const [isUpdateAddressForm, setIsUpdateAddressForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [localAdresses, setLocalAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [addressUpdated, setAddressUpdated] = useState(false);

  const { addresses, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.address
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAddresses(JSON.parse(localStorage.getItem("user"))._id));
  }, [isError]);

  useEffect(() => {
    if (addressUpdated) {
      return;
    }
    if (addresses.length > 0) {
      setLocalAddresses(addresses);
    }
  }, [addresses, addressUpdated]);

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
      if (isSuccess && message === "Address updated successfully!") {
        setCurrentComponent("Account");
      }
    } else {
      setMounted(true);
    }
  }, [addresses, isError, isSuccess, message, dispatch, mounted]);

  const goToAddressForm = () => {
    setIsAddressForm(true);
  };

  const goToUpdateAddressForm = (address) => {
    setSelectedAddress(address);
    setIsAddressForm(true);
    setIsUpdateAddressForm(true);
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
            isUpdateAddressForm ? (
              <UpdateAddressForm
                selectedAddress={selectedAddress}
                setIsUpdateAddressForm={setIsUpdateAddressForm}
                setIsAddressForm={setIsAddressForm}
                setCurrentComponent={setCurrentComponent}
                setAddressUpdated={setAddressUpdated}
              />
            ) : (
              <AddNewAddressForm setIsAddressForm={setIsAddressForm} />
            )
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
              <button onClick={() => goToUpdateAddressForm(address)}>
                Edit
              </button>
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
