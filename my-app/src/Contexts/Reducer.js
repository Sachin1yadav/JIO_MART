import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cartItem: [...state.cartItem, action.playload] };
    }
    case "DELET_TO_CART": {
      console.log("PAY", action.playload,state.cartItem);
      let filter = state.cartItem.filter((ele) => ele.id !== action.payload);

      return {
        ...state,
        cartItem: filter
      };
    }
 
    default: {
      return state;
    }
  }

  //   return <div>reducer</div>;
};
export default reducer;
