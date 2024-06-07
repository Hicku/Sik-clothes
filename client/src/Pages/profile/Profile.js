import "./profile.css";

function profile() {
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">
      <section>
        <ul className="account-options-list">
          <li>
            <div>Username: {userData.name}</div>
          </li>
          <li>
            <div>Account</div>
          </li>
          <li>
            <div>Order history</div>
          </li>
          <li>
            <div>Wishlist</div>
          </li>
          <li>
            <div>Account details</div>
          </li>
          <li>
            <div>Change password</div>
          </li>
          <li>
            <div>Contact</div>
          </li>
          <li>
            <div>Address details</div>
          </li>
          <li>
            <div>Payment details</div>
          </li>
        </ul>
      </section>
      <section className="details-container"></section>
    </div>
  );
}

export default profile;
