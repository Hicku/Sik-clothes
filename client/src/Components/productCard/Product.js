import "./product.css";
import { FaCartPlus } from "react-icons/fa";

function Product({ product }) {
  const shortTitle = (title) => {
    if (title[30] === " ") {
      return title.substring(0, 30) + "...";
    }
    return title.substring(0, 31) + "...";
  };

  return (
    <div className="product-container">
      <div className="product">
        <img className="image" src={product.image} alt={product.title} />
        <div className="product-content">
          <div>
            {product.title.length > 34
              ? shortTitle(product.title)
              : product.title}
          </div>
          <div className="price-cart-container">
            £{product.price}
            <FaCartPlus className="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
