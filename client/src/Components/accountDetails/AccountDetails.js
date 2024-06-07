import "./accountDetails.css";

function AccountDetails() {
  const user = JSON.parse(localStorage.getItem("user"));
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
          <div>
            <input type="text" value={user.name} />
            <input type="text" value={user.lastName} />
            <input type="date" value={user.datOfBirth}></input>
          </div>
        </div>
      </section>
      <section className="delete-container"></section>
    </div>
  );
}

export default AccountDetails;
