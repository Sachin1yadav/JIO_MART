// import React from "react";
// import { useContext } from "react";
// import "../Styles/ordered.css";
// import { GrDeliver } from "react-icons/gr";
// import { Button, ButtonGroup } from '@chakra-ui/react'
// import { CartContext } from "../Contexts/CartContext";
// import NoOrders from "./NoOrder";
// function OrderCard() {
//   const { state, dispatch } = useContext(CartContext);
//   console.log("order", state.cartItem);

//   if(state.cartItem.length===0){
//        return <NoOrders/>
//   }


//   return (
//     <div>
//       <div className="mindiv">
//         {state.cartItem.map((prod) => (
//           <div key={prod.id} className="itemdiv">
//             <div style={{ display: "flex", gap: "20px" }}>
//               <img
//                 style={{ width: "120px", height: "120px" }}
//                 src={prod.image[0]}
//               />
//               <div>
//                 <p style={{ marginBottom: "30px", textAlign: "start" }}>
//                   {prod.name.length < 30 ? prod.name : `${prod.name.slice(0, 30)} ...`}
//                 </p>
//                 <p style={{ fontWeight: "bold", textAlign: "start" }}>
//                   Seller: <span style={{ color: "red" }}> BT Mart</span>{" "}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <p style={{ fontSize: "18px", padding: "10px" }}>{prod.price}</p>
//             </div>
//             <div style={{ padding: "10px" , }}>
//               <GrDeliver style={{ fontSize: "27px", marginLeft: "10px" }} />
//               <p style={{ marginTop: "-25px", fontWeight: "bolder" }}>
//                 Delivery by 24th December
//               </p>
//             </div>
//             {/* <Button className="btn" colorScheme='red'>Cancel?</Button> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OrderCard;
