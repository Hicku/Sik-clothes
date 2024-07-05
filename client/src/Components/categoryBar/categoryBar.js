import "./categoryBar.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  getCategory,
  getProducts,
  reset,
} from "../../features/products/productSlice";

function CategoryBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading, isError, message } = useSelector((state) => state.product);

  const [isSelected, setIsSelected] = useState(
    localStorage.getItem("selectedCatergory") || "all"
  );

  const onClickCategory = (e) => {
    const category = e.target.name;

    if (isError) {
      console.log(message);
    }

    dispatch(getCategory(category));
    setIsSelected(category);
    localStorage.setItem("selectedCategory", category);
    dispatch(reset());
    navigate("/");
  };

  const onClickAll = () => {
    if (isError) {
      console.log(message);
    }

    dispatch(getProducts());
    setIsSelected("all");
    dispatch(reset());
    navigate("/");
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="cat-bar-container">
      <ul className="cat-bar-ul">
        <li className="cat-bar-li">
          <button
            name="all"
            onClick={onClickAll}
            className={
              isSelected === "all" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "t-shirts" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "trousers" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "coats" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "jackets" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "socks" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "footwear" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "hats" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
              isSelected === "gloves" && isHomePage
                ? "cat-button-selected"
                : "cat-button"
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
