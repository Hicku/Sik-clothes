import Slider from "../slider/Slider";
import "./account.css";

function Account({
  recentlyViewed,
  currentComponent,
  setSelectedProduct,
  setRecentlyViewed,
  isSearchOpen,
  setIsSearchOpen,
}) {
  return (
    <div className="recently-viewed-container">
      <section className="recently-viewed-container">
        <Slider
          recentlyViewed={recentlyViewed}
          currentComponent={currentComponent}
          setSelectedProduct={setSelectedProduct}
          setRecentlyViewed={setRecentlyViewed}
        />
      </section>
    </div>
  );
}

export default Account;
