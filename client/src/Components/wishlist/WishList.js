import Slider from "../slider/Slider";
import "./wishlist.css";
import { NavLink, useNavigate } from "react-router-dom";

function WishList({ wishlist, currentComponent }) {
  return (
    <div className="recently-viewed-container">
      <section className="recently-viewed-container">
        <Slider wishlist={wishlist} currentComponent={currentComponent} />
      </section>
      <section>
        <NavLink to={"/wishlist"} className="logo">
          <div className="see-all-link">See all</div>
        </NavLink>
      </section>
    </div>
  );
}

export default WishList;
