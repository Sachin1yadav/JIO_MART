import "../Styles/Home.css";
import React, { useState,useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { Toast, useToast } from "@chakra-ui/react";
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
  const { state,dispatch } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const toast = useToast();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const DleteToCart = (delItem) => {
    dispatch({
      type: "DELET_TO_CART",
      payload: delItem.id,
    });
    toast({
      title: "Deleted",
      description: `${delItem.name} Succefully Deleted from Cart`,
      status: "error",
      duration: 6000,
      isClosable: true,
    });
  };
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
                <Link to="/products">
                  {" "}
                  <p>Products</p>
                </Link>
                <Link to="/checkout">
                  {" "}
                  <p>Checkout</p>
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
                <Link to="/ordercard">
                  {" "}
                  <p>My Orders</p>
                </Link>

                <hr style={{ height: "10px" }} />
                <p>My Account</p>
                
                 <p>Need Help?</p>
                 <Link to="/about" > <p>About Us</p></Link>
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
              <Link to="/ordercard">  My Order</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Link  to="./cart"  >
         <p style={{color:"white",marginLeft:"20px",marginTop:"9px"}}>cart</p>

         
         </Link> */}
         {/* <Badge style={{height:"20px"}} >{state.cartItem.length}</Badge> */}
{  
          <Nav>
            <Dropdown style={{ height:"50px",padding:"0px"}}  variant="Danger" alignRight>
              <Dropdown.Toggle variant="Danger"   >
          
              <FaShoppingCart style={{ marginTop:"7px"}} color="white" fontSize="25px"    />
         
                
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 300 ,color:"white"}}>
                {state.cartItem.length > 0 ? (
                  <>
                    {state.cartItem.map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod?.image[0]}
                          // src="data:image/jpeg;base64,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"
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span  class="text" >{prod.name}</span>
                          <span>{prod.price}</span>
                        </div>
                        <AiFillDelete
                        className="del"
                          fontSize="20px"
                          style={{cursor:"pointer",color:"black"}}
                          onClick={()=>DleteToCart(prod)}
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (<Link to="/cart"> 
                  <Button variant="danger" style={{ width: "95%", margin: "0 10px" }}>
                        Cart Is Empty
                      </Button>
                      </Link>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>  }
          {state.cartItem.length > 0 ? ( <Badge bg="danger" style={{height:"20px",marginRight:"40px",marginLeft:"-20px"}} >{state.cartItem.length}</Badge>) 
          :(console.log("badge"))}


         
         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
