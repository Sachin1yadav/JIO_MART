import { useContext } from "react";
import React, { useState, useReducer } from "react";
import { Toast, useToast } from "@chakra-ui/react";
import Cart from "../Pages/Cart";
import reducer from "./Reducer";
export const CartContext = React.createContext();

const inisitalState = {
  cartItem: [],
  totalAmount: 0,
  totalQuantity: 0,
};

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, inisitalState);

  // const handleAddToCart = (cartItem) => {
  //   setCartData([...cartData, cartItem]);
  //   toast({
  //     title: "Added",
  //     description: `${cartItem.name} Succefully added to Cart`,
  //     status: "success",
  //     duration: 6000,
  //     isClosable: true,
  //   });
  //   console.log([...cartData, cartItem]);
  // };
  // const handleDelete = (cartItem) => {
  //   let newimg = cartData.filter((el) => {
  //     return el.id !== cartItem.id;
  //   });
  //   setCartData([...cartData, newimg]);
  //   toast({
  //     title: "Added",
  //     description: `${cartItem.name} Succefully deleted to Cart`,
  //     status: "failed",
  //     duration: 6000,
  //     isClosable: true,
  //   });
  //   console.log([...cartData, cartItem]);
  // };

  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export default CartContextProvider;
