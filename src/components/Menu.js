import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <Fragment>
      <nav style={{ backgroundColor: "white", padding: 20 }}>
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <Link to="/aboutus">About us</Link>
          </li>
          <li
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <Link to="/help">Help</Link>
          </li>
          <li
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <Link to="/register">Register</Link>
          </li>
          <li
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Menu;
