import "./profile.css";
import Account from "../../Components/account/Account";
import AccountDetails from "../../Components/accountDetails/AccountDetails";
import AddressDetails from "../../Components/addressDetails/AddressDetails";
import ChangePassword from "../../Components/changePassword/ChangePassword";
import Contact from "../../Components/contact/Contact";
import OrderHistory from "../../Components/orderHistory/OrderHistory";
import PaymentDetails from "../../Components/paymentDetails/PaymentDetails";
import Wishlist from "../../Components/wishlist/Wishlist";
import SearchModal from "../../Components/searchModal/SearchModal";
const { useState } = require("react");

function Profile({
  recentlyViewed,
  wishlist,
  setSelectedProduct,
  setRecentlyViewed,
  isSearchOpen,
  setIsSearchOpen,
}) {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [isAddCard, setIsAddCard] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("Account");

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  const components = {
    Account: (
      <Account
        recentlyViewed={recentlyViewed}
        currentComponent={currentComponent}
        setSelectedProduct={setSelectedProduct}
        setRecentlyViewed={setRecentlyViewed}
      />
    ),
    "Account details": <AccountDetails />,
    "Address details": (
      <AddressDetails setCurrentComponent={setCurrentComponent} />
    ),
    "Change password": <ChangePassword />,
    Contact: <Contact />,
    "Order History": <OrderHistory />,
    "Payment details": (
      <PaymentDetails isAddCard={isAddCard} setIsAddCard={setIsAddCard} />
    ),
    Wishlist: (
      <Wishlist wishlist={wishlist} currentComponent={currentComponent} />
    ),
  };

  return (
    <div className="profile-container">
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
      <div>
        <SearchModal
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </div>
    </div>
  );
}

export default Profile;
