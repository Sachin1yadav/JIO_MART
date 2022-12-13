import { Route,Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Sign from"../Pages/Sign"
import Women from "../Pages/Women"
import Men from "../Pages/Mans"
import Cart from "../Pages/Cart"

function Allroute(){



    return(
        <>
        <Routes>
   <Route path="/" element={<Home/>}      ></Route>
   <Route path="/login" element={<Login/>}      ></Route>
   <Route path="/sign" element={<Sign/>}      ></Route>
   <Route path="/cart" element={<Cart/>}      ></Route>
   <Route path="/mens" element={<Men/>}      ></Route>
   <Route path="/women" element={<Women/>}      ></Route>


        </Routes>
        
        
        
        
        </>
    )
}

export default Allroute