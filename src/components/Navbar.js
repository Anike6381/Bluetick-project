import React from "react";
import logo from "../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <a href="/Home">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className={classes["nav-items"]}>
          <ul>
            <div className={classes.menu}>
              <li>
                <a href="/Home" className={classes.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="/Features">Features</a>
              </li>
              <li>
                <a href="/Benefits">Benefits</a>
              </li>
            </div>
          </ul>

          <button type="submit" className={classes["goto-btn"]}>
            GO TO APP
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
