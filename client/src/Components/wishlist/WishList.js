import Slider from "../slider/Slider";

function WishList({ wishlist, currentComponent }) {
  return (
    <div className="recently-viewed-container">
      <section className="recently-viewed-container">
        <Slider wishlist={wishlist} currentComponent={currentComponent} />
      </section>
    </div>
  );
}

export default WishList;
