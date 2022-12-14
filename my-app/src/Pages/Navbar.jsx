import "../Styles/Home.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="header">
        <img
          className="logo"
          src="data:image/png;base64,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"
          alt=""
        />
        <ul className="navigate">
          <li>
            <p variant="primary" onClick={handleShow}>
              Sidebar
            </p>
          </li>

          <Offcanvas show={show} onHide={handleClose}>
            <div className="hello">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Hello, Sign in</Offcanvas.Title>
                <br />
                <Button variant="outline-info">Acount</Button>
                <Button variant="outline-info">Orders</Button>
              </Offcanvas.Header>
            </div>
            <Offcanvas.Body>
              <div className="slidP">
                <Link to="/">
                  {" "}
                  <p>Home</p>
                </Link>
                <Link to="/mens">
                  {" "}
                  <p>Mens</p>
                </Link>
                <Link to="/women">
                  {" "}
                  <p>Women</p>
                </Link>
                <Link to="/cart">
                  {" "}
                  <p>Cart</p>
                </Link>
                <Link to="/sign">
                  {" "}
                  <p>Register</p>
                </Link>
                <Link to="/login">
                  {" "}
                  <p>Login</p>
                </Link>
                <Link to="/">
                  {" "}
                  <p>My List</p>
                </Link>

                <hr style={{ height: "10px" }} />
                <p>My Account</p>
                <p>Need Help?</p>
                <p>About Us</p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "green" }
            }
            to="/"
          >
            <li>
              <p>Home</p>
            </li>
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "green" }
            }
            to="/mens"
          >
            <li>
              <p>Mens</p>
            </li>
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "green" }
            }
            to="/women"
          >
            <li>
              <p>Women</p>
            </li>
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "green" }
            }
            to="/cart"
          >
            <li>
              <p>Cart</p>
            </li>
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "green" }
            }
            to="/sign"
          >
            <li>
              <p>Register</p>
            </li>
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "green" }
            }
            to="/login"
          >
            <li>
              <p>Login</p>
            </li>
          </NavLink>
        </ul>
        <div className="search">
          <input type="text" placeholder="search Product" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
