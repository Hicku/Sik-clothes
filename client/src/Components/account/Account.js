import Product from "../productCard/Product";
import Slider from "../slider/Slider";
import "./account.css";

function Account({ recentlyViewed }) {
  return (
    <div className="recently-viewed-container">
      {/* <section className="recently-viewed-container">
        <h2>Recently Viewed</h2>
        <ul>
          {recentlyViewed.map((product) => (
            <li key={product._id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      </section> */}
      <Slider className="silder" />
    </div>
  );
}

export default Account;
