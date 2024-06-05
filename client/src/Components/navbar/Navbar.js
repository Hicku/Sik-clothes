import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

export default function Navabar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <div className="top-bar">
        <div className="banner">£10 off orders over £70</div>
      </div>
      <section className="nav-btn-container">
        <NavLink to={"/"} className="logo">
          Logo
        </NavLink>
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
                  <FaSignOutAlt /> Logout
                </button>
              </li>
              <button className="search-button" onClick={handleSearch}>
                search
              </button>
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
                search
              </button>
            </>
          )}
        </ul>
      </section>
    </nav>
  );
}
