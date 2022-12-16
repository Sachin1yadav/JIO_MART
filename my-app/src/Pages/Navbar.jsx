import "../Styles/Home.css";
import React, { useState } from "react";
import { IconName } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="header"  >
        {/* <img
          className="logo"
          src="btlogo.PNG"
          alt=""
        /> */}
        {/* <h2 className="logo">BT Mart</h2> */}
        <ul className="navigate">
          <li>
            <p variant="primary" onClick={handleShow}>
            
               <img className="slideIMG" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGWWwREi7bMeKK1XMVB03Oug6lvtRpYN_yXcdeNn7jieT9uVV09lNlanr9q3Ih65ChWc&usqp=CAU"  />
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
            <img
          className="logo"
          src="btlogo.PNG"
          alt=""
        />
            </li>
          </NavLink>
          <div className="search">
          <input type="text" placeholder="search Product" />
        </div>
          
        <Menu isLazy>
  <MenuButton  >
    <p style={{color:"white"}}>user</p>
     </MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>
    <Link to="/login">LogIn</Link>
    </MenuItem>
    <MenuItem><Link to="/sign">Sign In</Link></MenuItem>
    <MenuItem>About</MenuItem>
  </MenuList>
</Menu>
         <Link  to="./cart"  >
         <p style={{color:"white",marginLeft:"20px",marginTop:"9px"}}>cart</p>

         </Link>

        
        </ul>
        
      </div>
    </div>
  );
}

export default Navbar;
