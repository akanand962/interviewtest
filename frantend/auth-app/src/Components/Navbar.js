import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="/">
          Logo
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <NavLink
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
               exact to="/home"
              >
                Home{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
               exact to="/about"
              >
                About{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
               exact to="/login"
              >
                Login{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              exact  to="/register"
              >
                Register{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
