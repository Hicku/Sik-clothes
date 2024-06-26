import "./accountDetails.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser, reset } from "../../features/auth/authSlice";

function AccountDetails() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Profile updated successfully");
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      dateOfBirth: formData.dateOfBirth,
    };

    dispatch(updateUser(userData));
  };

  return (
    <div className="account-details-container">
      <section className="account-details">
        <div className="login-details">
          <div className="details-titles">
            <h2>Your details</h2>
            <p>Login details</p>
          </div>
          <div className="email-password">
            <label>Email</label>
            <input type="email" value={user.email} readOnly />
            <div>Change Password</div>
          </div>
        </div>
        <div className="personal-details">
          <h2 className="personal-title">Personal details</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </section>
      <section className="delete-container"></section>
    </div>
  );
}

export default AccountDetails;
