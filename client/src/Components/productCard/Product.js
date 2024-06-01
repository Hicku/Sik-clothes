import "./product.css";

function Product({ product }) {
  return (
    <div className="product-container">
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>£{product.price}</div>
    </div>
  );
}

export default Product;
