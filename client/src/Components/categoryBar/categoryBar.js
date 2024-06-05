import "./categoryBar.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  getCategory,
  getProducts,
  reset,
} from "../../features/products/productSlice";

function CategoryBar() {
  const dispatch = useDispatch();

  const { isLoading, isError, message } = useSelector((state) => state.product);

  const [isSelected, setIsSelected] = useState("all");

  const onClickCategory = (e) => {
    e.preventDefault();

    const category = e.target.name;

    if (isError) {
      console.log(message);
    }

    dispatch(getCategory(category));

    setIsSelected(category);

    dispatch(reset());
  };

  const onClickAll = (e) => {
    e.preventDefault();

    if (isError) {
      console.log(message);
    }

    dispatch(getProducts());

    setIsSelected("all");

    dispatch(reset());
  };

  return (
    <div className="cat-bar-container">
      <ul className="cat-bar-ul">
        <li className="cat-bar-li">
          <button
            name="all"
            onClick={onClickAll}
            className={
              isSelected === "all" ? "cat-button-selected" : "cat-button"
            }
          >
            All
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="t-shirts"
            className={
              isSelected === "t-shirts" ? "cat-button-selected" : "cat-button"
            }
          >
            T-shirts
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="trousers"
            className={
              isSelected === "trousers" ? "cat-button-selected" : "cat-button"
            }
          >
            Trousers
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="coats"
            className={
              isSelected === "coats" ? "cat-button-selected" : "cat-button"
            }
          >
            Coats
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="jackets"
            className={
              isSelected === "jackets" ? "cat-button-selected" : "cat-button"
            }
          >
            Jackets
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="socks"
            className={
              isSelected === "socks" ? "cat-button-selected" : "cat-button"
            }
          >
            Socks
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="footwear"
            className={
              isSelected === "footwear" ? "cat-button-selected" : "cat-button"
            }
          >
            Footwear
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="hats"
            className={
              isSelected === "hats" ? "cat-button-selected" : "cat-button"
            }
          >
            Hats
          </button>
        </li>
        <li className="cat-bar-li">
          <button
            onClick={onClickCategory}
            name="gloves"
            className={
              isSelected === "gloves" ? "cat-button-selected" : "cat-button"
            }
          >
            Gloves
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CategoryBar;
