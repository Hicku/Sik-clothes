import "./categoryBar.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategory, reset } from "../../features/products/productSlice";
import { useEffect } from "react";

function CategoryBar() {
  const dispatch = useDispatch();

  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  const onClick = (e) => {
    e.preventDefault();

    const category = e.target.name;

    if (isError) {
      console.log(message);
    }

    dispatch(getCategory(category));

    dispatch(reset());
  };

  return (
    <div className="cat-bar-container">
      <ul className="cat-bar-ul">
        <li className="cat-bar-li">
          <button className="cat-button">All</button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="t-shirts" className="cat-button">
            T-shirts
          </button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="trousers" className="cat-button">
            Trousers
          </button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="coats" className="cat-button">
            Coats
          </button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="jackets" className="cat-button">
            Jackets
          </button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="socks" className="cat-button">
            Socks
          </button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="footwear" className="cat-button">
            Footwear
          </button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="hats" className="cat-button">
            Hats
          </button>
        </li>
        <li className="cat-bar-li">
          <button onClick={onClick} name="gloves" className="cat-button">
            Gloves
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CategoryBar;
