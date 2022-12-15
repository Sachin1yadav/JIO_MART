import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Sign from "../Pages/Sign";
import Women from "../Pages/Women";
import Men from "../Pages/Mans";
import Cart from "../Pages/Cart";
import Details from "../Pages/Details";
import Products from "../Pages/Products";
function Allroute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/women" element={<Women />} />
        {/* <Route path="/products" element={<Products/>}      ></Route> */}
        <Route path="/data/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default Allroute;
