import { CartContext } from "../Contexts/CartContext";
import { useState, useContext, useEffect } from "react";
import "../Styles/cart.css";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { Input, LightMode } from "@chakra-ui/react";
import { GrDeliver } from "react-icons/gr";
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
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log("CARTDATA", cartData);
  const [total, setTotal] = useState();
  useEffect(() => {
    // setTotal(
    //   cartData.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    // );
  }, [state.cartItem]);
  console.log("total", state.cartItem);

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
            { 
              state.cartItem.map((e) => {
               return (
                <div key={e.id} className="item1">
                <div className="div11">
                  <div>
                    <img src={e.image && e.image[0]} alt={e.name} />
                  </div>
                  <div className="namediv">
                    <p>{e.name}</p>
                    <p style={{ fontWeight: "bolder" }}>
                      Price: <span>{e.price}</span>{" "}
                    </p>
                  </div>
                  <div>
                    <AiFillDelete
                      className="delet"
                      onClick={() =>
                        dispatch({
                          type: "DELET_TO_CART",
                          playload: e.id,
                        })
                      }
                      style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                  </div>
                </div>
                <FormControl>
                  <FormLabel
                    style={{
                      marginLeft: "4px",
                      fontWeight: "500",
                      fontSize: "20px",
                      letterSpacing: "1px",
                    }}
                  >
                    Qunitity
                  </FormLabel>
                  <NumberInput
                    style={{ color: "BLack", borderColor: "teal" }}
                    max={50}
                    min={1}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </div>
               )
              })}
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

          <Button colorScheme="red" onClick={onOpen}>
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
                {/* <video
                  className="orderPlacedClip__clip"
                  src="orderClip.gif"
                  autoPlay
                  loop
                ></video> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8e7NiKGYXrsKnkaRb_ThgKDxoGcKTrG1rg&usqp=CAU" />
                <p className="ord"> Order Successfully Placed!! </p>
              </ModalBody>
              <ModalFooter>
                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button> */}
                <Link to="/orders">
                  <Button colorScheme="green">See Orders</Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Cart;
