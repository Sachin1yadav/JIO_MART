import "../Styles/Home.css";
import React, { useState } from "react";

import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
} from "react-bootstrap";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="header">
        {/* <img
          className="logo"
          src="btlogo.PNG"
          alt=""
        /> */}
        {/* <h2 className="logo">BT Mart</h2> */}
        <ul className="navigate">
          <li>
            <p variant="primary" onClick={handleShow}>
              <img
                className="slideIMG"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGWWwREi7bMeKK1XMVB03Oug6lvtRpYN_yXcdeNn7jieT9uVV09lNlanr9q3Ih65ChWc&usqp=CAU"
              />
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
                  <p className="page">Home</p>
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
              <img className="logo" src="btlogo.PNG" alt="" />
            </li>
          </NavLink>
          <div className="search">
            <input type="text" placeholder="search Product" />
          </div>

          <Menu isLazy>
            <MenuButton>
              <p style={{ color: "white" }}>
                <FaUserCircle fontSize="30px" style={{ marginRight: "20px" }} />
              </p>
            </MenuButton>
            <MenuList style={{ color: "black", background: "black" }}>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem
                style={{
                  color: "white",
                  background: "black",
                  textDecoration: "none",
                }}
              >
                <Link to="/login">LogIn</Link>
              </MenuItem>
              <MenuItem style={{ color: "white", background: "black" }}>
                <Link to="/sign">Sign In</Link>
              </MenuItem>
              <MenuItem style={{ color: "white", background: "black" }}>
                About
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Link  to="./cart"  >
         <p style={{color:"white",marginLeft:"20px",marginTop:"9px"}}>cart</p>

         </Link> */}

          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle style={{ height: "40px", width: "50px" }}>
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge> 0</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 300 }}>
                {1 > 0 ? (
                  <>
                    {[].map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>₹ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
