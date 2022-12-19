import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cartItem: [...state.cartItem, { ...action.payload, qty: 1 }],
      };
    }

    case "DELET_TO_CART": {
      console.log("PAY", action.payload, state.cartItem);
      return {
        ...state,
        cartItem: state.cartItem.filter((c) => c.id !== action.payload),
      };
    } 
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cartItem: state.cartItem.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default: {
      return state;
    }
  }

  //   return <div>reducer</div>;
};
export default reducer;
