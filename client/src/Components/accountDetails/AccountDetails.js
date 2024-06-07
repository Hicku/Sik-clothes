import "./accountDetails.css";
import { useState } from "react";

function AccountDetails() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
  });

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
            <input type="email" value={user.email} />
            <div>Change Password</div>
          </div>
        </div>
        <div className="personal-details">
          <h2 className="personal-title">Personal details</h2>
          <form>
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
                type="text"
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
