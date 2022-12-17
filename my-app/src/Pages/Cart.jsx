import { CartContext } from "../Contexts/CartContext"
import { useState,useContext } from "react"


function Cart(){
    const {cartData,setCartData}=useContext(CartContext)

    console.log("CARTDATA",cartData)


    return(
        <>
        Cart</>
    )
}

export default Cart