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

function Profile() {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [currentComponent, setCurrentComponent] = useState("account");

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  const components = {
    account: <Account />,
    "account details": <AccountDetails />,
    "address details": <AddressDetails />,
    "change password": <ChangePassword />,
    contact: <Contact />,
    "order History": <OrderHistory />,
    "payment details": <PaymentDetails />,
    wishlist: <Wishlist />,
  };

  return (
    <div className="profile-container">
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
  );
}

export default Profile;
