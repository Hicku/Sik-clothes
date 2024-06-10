import Slider from "../slider/Slider";
import "./account.css";

function Account({ recentlyViewed, currentComponent }) {
  return (
    <div className="recently-viewed-container">
      <section className="recently-viewed-container">
        <Slider
          recentlyViewed={recentlyViewed}
          currentComponent={currentComponent}
        />
      </section>
    </div>
  );
}

export default Account;
