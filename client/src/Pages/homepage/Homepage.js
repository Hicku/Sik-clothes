import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from "../../features/products/productSlice";
import Product from "../../Components/productCard/Product";
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
      <section>
        <p>Start Shopping</p>
      </section>

      <section>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li>
                <Product key={product._id} product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <h3>No products to display</h3>
        )}
      </section>
    </>
  );
}

export default Homepage;
