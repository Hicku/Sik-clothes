import Product from "../../Components/productCard/Product";
import "./wishListPage.css";
// import SearchModal from "../../Components/searchModal/SearchModal";

function WishListPage({ wishlist }) {
  return (
    <div className="wishlist-page-container">
      <h1>Wish List</h1>
      <ul>
        {wishlist.map((product) => (
          <li>
            <Product key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishListPage;
