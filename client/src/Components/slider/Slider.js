import React from "react";
import Slider from "react-slick";
import Product from "../productCard/Product";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomSlider({
  recentlyViewed,
  currentComponent,
  wishlist,
  setSelectedProduct,
  setRecentlyViewed,
}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {currentComponent === "Wishlist" ? (
        <Slider className="slider" {...settings}>
          {wishlist.map((product) => (
            <Product
              key={product.id}
              product={product}
              currentComponent={currentComponent}
              setSelectedProduct={setSelectedProduct}
              setRecentlyViewed={setRecentlyViewed}
            />
          ))}
        </Slider>
      ) : (
        <Slider className="slider" {...settings}>
          {recentlyViewed.map((product) => (
            <Product
              key={product.id}
              product={product}
              currentComponent={currentComponent}
              setSelectedProduct={setSelectedProduct}
              setRecentlyViewed={setRecentlyViewed}
            />
          ))}
        </Slider>
      )}
    </>
  );
}

export default CustomSlider;
