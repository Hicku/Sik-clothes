import { FaSignInAlt, FaUser } from "react-icons/fa";
import { CiLogout, CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import CategoryBar from "../categoryBar/categoryBar";
import logoImage from "../../images/clothes-logo.png";

export default function Navabar({ isOpen, setIsSearchOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleSearch = () => {
    setIsSearchOpen(!isOpen);
  };

  // const handle = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleGoHome = () => {
    localStorage.setItem("selectedCategory", "all");
    navigate("/");
  };

  return (
    <nav className="nav-container">
      <div className="top-bar">
        <div className="banner">£10 off orders over £70</div>
      </div>
      <section className="nav-btn-container">
        <button onClick={handleGoHome} className="logo">
          <img src={logoImage} alt="logo" />
        </button>
        <ul className="links">
          {user ? (
            <>
              <li className="nav-button-list">
                <NavLink to={"/profile"} className="nav-link">
                  Profile
                </NavLink>
              </li>
              <li className="nav-button-list">
                <button className="btn" onClick={onLogout}>
                  <CiLogout />
                  Logout
                </button>
              </li>
              <button className="search-button" onClick={handleSearch}>
                <CiSearch /> search
              </button>
              <li className="nav-button-list">
                <button className="btn">
                  <PiShoppingCartSimpleLight /> Cart
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-button-list">
                <NavLink to={"/login"} className="nav-link">
                  <FaSignInAlt /> Login
                </NavLink>
              </li>
              <li className="nav-button-list">
                <NavLink to={"/register"} className="nav-link">
                  <FaUser /> Register
                </NavLink>
              </li>
              <button className="search-button" onClick={handleSearch}>
                <CiSearch />
                search
              </button>
              <li className="nav-button-list">
                <button className="btn">
                  <PiShoppingCartSimpleLight /> Cart
                </button>
              </li>
            </>
          )}
        </ul>
      </section>
      <section>
        <section className="category-container">
          <CategoryBar />
        </section>
      </section>
    </nav>
  );
}
