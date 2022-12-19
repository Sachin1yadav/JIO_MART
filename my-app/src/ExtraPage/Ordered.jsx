import React from "react";
import { useContext } from "react";
import "../Styles/ordered.css";
import { Link } from "react-router-dom";
import { GrDeliver } from "react-icons/gr";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CartContext } from "../Contexts/CartContext";
import { FcCancel } from 'react-icons/fc';
import {
  Modal,FormControl,FormLabel,RadioGroup,HStack,
  ModalOverlay,
  ModalContent,Radio,FormHelperText,
  ModalHeader,
  ModalFooter,useDisclosure,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Toast, useToast } from "@chakra-ui/react";
import NoOrders from "./NoOrder";
function OrderCard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  const { state, dispatch } = useContext(CartContext);
  console.log("order", state.cartItem);
 const DleteToCart = (delItem) => {
    dispatch({
      type: "DELET_TO_CART",
      payload: delItem.id,
    });
    toast({
      title: "Deleted",
      description: `${delItem.name} Order Canceled`,
      status: "error",
      duration: 6000,
      isClosable: true,
    });
    onClose()
  };






  if(state.cartItem.length===0){
       return <NoOrders/>
  }


  return (
     
      <div className="mindiv">
        {state.cartItem.map((prod) => (
          <div key={prod.id} className="itemdiv">
            <div style={{ display: "flex", gap: "20px" }}>
              <img
                style={{ width: "120px", height: "120px" }}
                src={prod.image[0]}
              />
              <div>
                <p style={{ marginBottom: "30px", textAlign: "start" }}>
                  {prod.name.length < 30 ? prod.name : `${prod.name.slice(0, 30)} ...`}
                </p>
                <p style={{ fontWeight: "bold", textAlign: "start" }}>
                  Seller: <span style={{ color: "red" }}> BT Mart</span>{" "}
                </p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "18px", padding: "10px" }}>{prod.price}</p>
            </div>
            <div style={{ padding: "10px" , }}>
              <GrDeliver style={{ fontSize: "27px", marginLeft: "10px" }} />
              <p style={{ marginTop: "-25px", fontWeight: "bolder" }}>
                Delivery by 24th December
              </p>
            </div>
            <Button className="btn" style={{marginTop:"60px"}}  colorScheme='white' variant='ghost'onClick={onOpen}  >
              <FcCancel style={{color:"red",fontSize:"100px"}}   />
            </Button>
            <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay   />
        <ModalContent>
          <ModalHeader>Reason For Cancel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl as='fieldset'>
  <FormLabel as='legend' style={{marginLeft:"130px",color:"teal", fontSize:"18px"}} >Choose Appropriate Option</FormLabel>
  <RadioGroup defaultValue='Itachi'>
    <HStack   spacing='30px'>
      <Radio value='Sasuke'>Already_Ordered</Radio>
      <Radio value='Nagato'>Over_Price</Radio>
      <Radio value='Itachi'>Quality</Radio>
      <Radio value='Sage of the six Paths'>Others</Radio>
    </HStack>
  </RadioGroup>
  <FormHelperText  style={{marginLeft:"180px",color:"red",fontSize:"15px"}}  >Are You Sure 🥱?</FormHelperText>
</FormControl>
          </ModalBody>

          <ModalFooter>
            <Link to="/products"  >
            <Button  size="lg" colorScheme='pink' mr={3} onClick={() => DleteToCart(prod)}>
            Confirm
            </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </div>
        ))}
      </div>
    
  );
}

export default OrderCard;
