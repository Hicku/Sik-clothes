import "./profile.css";

function profile() {
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">
      <section>
        <ul className="account-options-list">
          <li>
            <button>Username: {userData.name}</button>
          </li>
          <li>
            <button>Account</button>
          </li>
          <li>
            <button>Order history</button>
          </li>
          <li>
            <button>Wishlist</button>
          </li>
          <li>
            <button>Account details</button>
          </li>
          <li>
            <button>Change password</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
          <li>
            <button>Address details</button>
          </li>
          <li>
            <button>Payment details</button>
          </li>
        </ul>
      </section>
      <section className="details-container"></section>
    </div>
  );
}

export default profile;
