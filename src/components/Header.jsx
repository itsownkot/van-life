import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar-icon.png";
import Logout from "../assets/Logout";

export default function Header() {
  const navigate = useNavigate();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        {localStorage.getItem("loggedIn") ? (
          <i onClick={logout}>
            <Logout />
          </i>
        ) : (
          <Link to="login" className="login-link">
            <img src={avatar} alt="login icon" className="login-icon" />
          </Link>
        )}
      </nav>
    </header>
  );
}
