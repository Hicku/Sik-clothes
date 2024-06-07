import "./profile.css";
import Account from "../../Components/account/Account";
import AccountDetails from "../../Components/accountDetails/AccountDetails";
import AddressDetails from "../../Components/addressDetails/AddressDetails";
import ChangePassword from "../../Components/changePassword/ChangePassword";
import Contact from "../../Components/contact/Contact";
import OrderHistory from "../../Components/orderHistory/OrderHistory";
import PaymentDetails from "../../Components/paymentDetails/PaymentDetails";
import Wishlist from "../../Components/wishlist/Wishlist";

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
      <section className="details-container">
        <Account />
        {/* <OrderHistory />
        <Wishlist />
        <AccountDetails />
        <ChangePassword />
        <Contact />
        <AddressDetails />
        <PaymentDetails /> */}
      </section>
    </div>
  );
}

export default profile;
