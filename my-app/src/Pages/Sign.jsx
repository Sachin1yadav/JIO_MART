import "../Styles/Login.css"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
function Sign(){


    return(
        <div>
          <Navbar/>
      <div  className="box" >
    <div className="form">
       <h2>Register</h2>
            <div  className="inputBox" >
                  <input    required="required"   />
                  <span>Name</span>
                   <i></i>
            </div> 
            <div  className="inputBox" >
                  <input    required="required"   />
                  <span>Email</span>
                   <i></i>
            </div>
            <div  className="inputBox" >
                  <input     required="required"  />
                  <span>Password</span>
                   <i></i>
            </div>
            <div className="signDiv1" >
            <p>Have You Already Account?</p>
            <Link to="/login">
            <h6  className="sign1"   >Login</h6>
            </Link>
            </div>
                  <div>
                     <Link to="/" >
                      <input className="submit" type="submit" value="Register" />
                      </Link>
                  </div>
            </div>
    </div>


      </div>
       





       
    )
}

export default Sign