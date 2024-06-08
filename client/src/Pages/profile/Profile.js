import "./profile.css";
import Account from "../../Components/account/Account";
import AccountDetails from "../../Components/accountDetails/AccountDetails";
import AddressDetails from "../../Components/addressDetails/AddressDetails";
import ChangePassword from "../../Components/changePassword/ChangePassword";
import Contact from "../../Components/contact/Contact";
import OrderHistory from "../../Components/orderHistory/OrderHistory";
import PaymentDetails from "../../Components/paymentDetails/PaymentDetails";
import Wishlist from "../../Components/wishlist/Wishlist";
const { useState } = require("react");

function Profile({ recentlyViewed }) {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [currentComponent, setCurrentComponent] = useState("account");

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  const components = {
    Account: <Account recentlyViewed={recentlyViewed} />,
    "Account details": <AccountDetails />,
    "Address details": <AddressDetails />,
    "Change password": <ChangePassword />,
    Contact: <Contact />,
    "Order History": <OrderHistory />,
    "Payment details": <PaymentDetails />,
    Wishlist: <Wishlist />,
  };

  return (
    <div
      className={`profile-container ${
        currentComponent === "Account" ? "account-profile-container" : ""
      }`}
    >
      <section className="profile-title-container">
        <div>Hi {userData.name}</div>
        <h2 className="profile-title">{currentComponent}</h2>
      </section>
      <div className="options-page-list">
        <section>
          <ul className="account-options-list">
            {Object.keys(components).map((component) => {
              return (
                <li>
                  <button onClick={() => handleComponentChange(component)}>
                    {component}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="details-container">
          {components[currentComponent]}
        </section>
      </div>
    </div>
  );
}

export default Profile;
