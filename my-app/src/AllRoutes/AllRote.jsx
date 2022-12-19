import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Sign from "../Pages/Sign";
 import Checkout from "../ExtraPage/Checkout";
import Cart from "../Pages/Cart";
import Details from "../Pages/Details";
import Products from "../Pages/Products";
import Orders from "../Pages/order";
import Abount from"../ExtraPage/Abount"
import OrderCard from "../ExtraPage/Ordered";
function Allroute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/data/:id" element={<Details/>}></Route>
        <Route path="/about" element={<Abount/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/ordercard" element={<OrderCard/>} />
      </Routes>
    </>
  );
}

export default Allroute;
