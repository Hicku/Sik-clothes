import "../login/login.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import {
  createCustomer,
  reset as paymentReset,
} from "../../features/payments/paymentSlice";
import Spinner from "../../Components/navbar/spinner/spinner";
import SearchModal from "../../Components/searchModal/SearchModal";

function Register({ isSearchOpen, setIsSearchOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    password2: "",
  });

  const { name, lastName, dateOfBirth, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const {
    customerId,
    isSuccess: isCustomerCreated,
    isError: isCustomerError,
    isLoading: isCustomerLoading,
    message: customerMessage,
  } = useSelector((state) => state.payment);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isCustomerError) {
      toast.error(customerMessage);
    }

    if (isSuccess || user) {
      toast.success(message);
      navigate("/");
    }

    dispatch(reset());
    dispatch(paymentReset());
  }, [
    user,
    isError,
    isCustomerError,
    isSuccess,
    isCustomerCreated,
    message,
    customerMessage,
    navigate,
    dispatch,
  ]);

  useEffect(() => {
    console.log(customerId);
    if (isCustomerCreated) {
      const userData = {
        name,
        lastName,
        dateOfBirth,
        email,
        password,
        customerId,
      };

      dispatch(register(userData));
    }
  }, [isCustomerCreated, customerId, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const customerData = {
        name,
        email,
      };

      console.log(customerData);

      dispatch(createCustomer(customerData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="login-container">
      <div className="register-header">
        <h2>Register</h2>
      </div>
      <form className="login-form" onSubmit={onSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter your name"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
            placeholder="Enter your lastname"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={onChange}
            placeholder="Enter your last name"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter a password"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Confirm password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Confirm your password"
            className="login-input"
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div>
        <SearchModal
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </div>
    </div>
  );
}

export default Register;
