import StripeCheckout from "react-stripe-checkout";
import logoImage from "../../images/clothes-logo.png";
import SearchModal from "../../Components/searchModal/SearchModal";
const KEY =
  "pk_test_51PTlFxE2lqlqIIm1zdyqw4OaeWE3k07apauqhKeAuqGOYxgGB7zt3qlNF6AGdF5qfCBOqOwIbCOLQoXSyX8qwaqQ00RpuzrXmG";

function Pay({ isSearchOpen, setIsSearchOpen }) {
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div>
      <div>
        <StripeCheckout
          name="Sik Clothes"
          image={logoImage}
          billingAddress
          shippingAddress
          description="Your total is £20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button>Pay</button>
        </StripeCheckout>
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

export default Pay;
