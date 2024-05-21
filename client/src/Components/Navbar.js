import { FaSignInAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Navabar() {
  return (
    <nav className="nav-container">
      <NavLink to={"/"} className="logo">
        Logo
      </NavLink>
      <ul className="links">
        <li className="nav-button-list">
          <NavLink to={"/login"} className="nav-link">
            <FaUser /> Login
          </NavLink>
        </li>
        <li className="nav-button-list">
          <NavLink to={"/register"} className="nav-link">
            <FaSignInAlt /> Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
