import { CartContext } from "../Contexts/CartContext";
import React, { useState, useContext, useEffect } from "react";
import "../Styles/cart.css";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { Input, LightMode } from "@chakra-ui/react";
import { GrDeliver } from "react-icons/gr";
import { useRef } from "react";
import Rating from "./Rating";
import {
  FormControl,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  NumberInputStepper,
  FormErrorMessage,
  NumberInputField,
  FormHelperText,
  NumberInput,
} from "@chakra-ui/react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalBody,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { Toast, useToast } from "@chakra-ui/react";


function Cart() {
  const toast = useToast();
  const { state, dispatch } = useContext(CartContext);

  // console.log("CARTDATA", cartData);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      state.cartItem.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.qty,
        0
      )
    );
  }, [state.cartItem]);
  console.log("total", state.cartItem);
  console.log("TOTALAMOUT", total);
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
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="3px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const initialRef = useRef();

  if (state.cartItem.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <div className="min">
        <div className="item">
          <div className="address">
            <div>
              {" "}
              <p>My Cart(1)</p>{" "}
            </div>
            <div className="devli">
              <div>
                <GrDeliver style={{ marginTop: "5px", marginLeft: "12px" }} />
                <p style={{ fontSize: "12px", letterSpacing: "0px" }}>
                  {" "}
                  Deliver to
                </p>
              </div>
              <Input
                color="teal"
                placeholder="Ghazipur"
                _placeholder={{ color: "inherit" }}
              />
              <button>Edit Address</button>
            </div>
          </div>
          <div className="addedItem">
            <ListGroup>
              {state.cartItem.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={prod.image[0]}
                        alt={prod.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={2}>
                      <span class="text">{prod.name}</span>
                    </Col>
                    <Col
                      md={2}
                      style={{ color: "RGB(14 160 10)", fontWeight: "bold" }}
                    >
                      {prod.price}
                    </Col>
                    <Col md={2}>
                      {/* <p>{prod.rating}</p> */}
                      <Rating
                        style={{ display: "flex" }}
                        rating={prod.rating}
                      />
                      {/* <Rating rating={prod.ratings} /> */}
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={prod.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {" "}
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => DleteToCart(prod)}
                      >
                        <AiFillDelete fontSize="20px" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <hr></hr>
        </div>
        {/* ...................... */}
        <div className="place">
          <div className="priceDe">
            <p>PRICE DETAILS</p>
          </div>

          <div className="pricedata">
            <p>Price </p>
            <p>₹149875</p>
          </div>

          <div className="pricedata">
            <p>Discount </p>
            <p style={{ color: "rgb(90, 247, 90)" }}>25%</p>
          </div>
          <div className="pricedata">
            <p>Delivery Charges </p>
            <p style={{ color: "rgb(90, 247, 90)" }}>Free</p>
          </div>
          <hr></hr>
          <div className="pricedata">
            <p>Total Amount </p>
            <p>₹119900</p>
          </div>

          {/* <Button style={{ margin:"auto"}}  colorScheme='red'>Place Order</Button> */}
          <Button
            variant="danger"
            ml="4"
            onClick={() => {
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Place Order
          </Button>
          <Modal   isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader> </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src="orderClip.gif" style={{ margin: "auto" }} />
                <Text className="ord"> Order Successfully Placed!!</Text>
              </ModalBody>
              <ModalFooter>
                <Button variant="danger" onClick={ 
                console.log("CLICK")}>
                  See Order
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* <Button variant="danger" onClick={onOpen}  >
            Place Order
          </Button>
          <Modal
            className="ordermodal"
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                 
                <img src="orderClip.gif"   style={{margin:"auto"}}    />
                <p className="ord"> Order Successfully Placed!! </p>
              </ModalBody>
              <ModalFooter>
                
                <Link to="/orders">
                  <Button style={{cursor:"pointer"}} variant="danger">See Orders</Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
