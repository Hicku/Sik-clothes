import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Pages/profile/Profile";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Navabar from "./Components/navbar/Navbar";
import ProductPage from "./Pages/productPage/ProductPage";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import WishListPage from "./Pages/wishListPage/WishListPage";

function App() {
  // Used to toggle the search sidebar
  const [isOpen, setIsOpen] = useState(false);
  // Used to store the selected product and display on product page
  const [selectedProduct, setSelectedProduct] = useState({});
  // Used to store the recently viewed products. Gets local storage data to persist the data, else empty array
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const localData = localStorage.getItem("recentlyViewed");
    return localData ? JSON.parse(localData) : [];
  });
  // Used to store the wishlist products. Gets local storage data to persist the data, else empty array
  const [wishlist, setWishlist] = useState(() => {
    const localData = localStorage.getItem("wishlist");
    return localData ? JSON.parse(localData) : [];
  });

  // Store recently viewed products in local storage
  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  // Store wishlist products in local storage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <>
      <Router>
        <div className="App">
          <section className="header-container">
            <header className="header">
              <Navabar isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>
          </section>
          <section className="main-container">
            <main className="main">
              <Routes>
                <Route
                  path="/profile"
                  element={
                    <Profile
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      recentlyViewed={recentlyViewed}
                      wishlist={wishlist}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <Homepage
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      setSelectedProduct={setSelectedProduct}
                      setRecentlyViewed={setRecentlyViewed}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={<Login isOpen={isOpen} setIsOpen={setIsOpen} />}
                />
                <Route
                  path="/register"
                  element={<Register isOpen={isOpen} setIsOpen={setIsOpen} />}
                />
                <Route
                  path="/product"
                  element={
                    <ProductPage
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      selectedProduct={selectedProduct}
                      setWishlist={setWishlist}
                    />
                  }
                />
                <Route
                  path="/wishlist"
                  element={<WishListPage wishlist={wishlist} />}
                />
              </Routes>
            </main>
          </section>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
