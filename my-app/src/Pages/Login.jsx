import "../Styles/Login.css"
 import Navbar from"./Navbar"
 import { Link } from "react-router-dom"
function Login(){



 
        
       
        
      




    return(
        <div>
          <Navbar/>
      <div  className="box" >
    <div className="form">
       <h2>Login</h2>
             
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
             
            <div className="signDiv" >
            <p>Have You Not Register Yes?</p>
            <Link to="/sign">
            <h6  className="sign"   >Register?</h6>
            </Link>
            </div>
                  <div>
                       <Link to="/">
                      <input className="submit" type="submit" value="Login" />
                      </Link>
                  </div>
            </div>
    </div>


<div>
 
</div>




      </div>
       





       
    )
}

export default Login