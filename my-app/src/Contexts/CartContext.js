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

  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export default CartContextProvider;
