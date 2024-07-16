import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from "../../features/products/productSlice";
import Product from "../../Components/productCard/Product";
import "./homepage.css";
import SearchModal from "../../Components/searchModal/SearchModal";
import CartModal from "../../Components/cartModal/CartModal";

function Homepage({
  isSearchOpen,
  setIsSearchOpen,
  setSelectedProduct,
  setRecentlyViewed,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    const selectedCategory = localStorage.getItem("selectedCategory");

    if (selectedCategory !== "all") {
      return;
    } else {
      dispatch(getProducts());
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch, message, navigate]);

  if (isLoading) {
    return <div>Spinner</div>;
  }

  return (
    <div className="homepage-container">
      <div className="data-cotainer">
        <section>
          <div className="data">
            <div>
              {products.length > 0 ? (
                <ul className="product-list">
                  {products.map((product) => (
                    <li className="product-list-item">
                      <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                        setRecentlyViewed={setRecentlyViewed}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p></p>
              )}
            </div>
            <div>
              <SearchModal
                isSearchOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen}
              />
            </div>
            <div>
              <CartModal />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
