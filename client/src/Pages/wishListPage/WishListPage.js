import Product from "../../Components/productCard/Product";
import "./wishListPage.css";
// import SearchModal from "../../Components/searchModal/SearchModal";
import SearchModal from "../../Components/searchModal/SearchModal";

function WishListPage({ wishlist, isSearchOpen, setIsSearchOpen }) {
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
      <div>
        <SearchModal
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </div>
    </div>
  );
}

export default WishListPage;
