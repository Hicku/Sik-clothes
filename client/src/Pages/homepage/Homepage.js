import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from "../../features/products/productSlice";
import Product from "../../Components/productCard/Product";
import CategoryBar from "../../Components/categoryBar/categoryBar";
import "./homepage.css";

function Homepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getProducts());

    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch, message, navigate]);

  if (isLoading) {
    return <div>Spinner</div>;
  }

  return (
    <>
      <div className="homepage-cotainer">
        <section>
          <CategoryBar />
        </section>
        <section>
          {products.length > 0 ? (
            <ul className="product-list">
              {products.map((product) => (
                <li className="product-list-item">
                  <Product key={product._id} product={product} />
                </li>
              ))}
            </ul>
          ) : (
            <h3>No products to display</h3>
          )}
        </section>
      </div>
    </>
  );
}

export default Homepage;
