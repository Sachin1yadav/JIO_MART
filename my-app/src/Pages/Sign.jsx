import "../Styles/Login.css"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { useToast, Button } from "@chakra-ui/react";
function Sign(){
  const toast = useToast();



    return(
        <div>
          <Navbar/>
      <div  className="box" >
    <div className="form">
       <h2>Register</h2>
            <div  className="inputBox1" >
                  <input    required="required"   />
                  <span>Name</span>
                   <i></i>
            </div> 
            <div  className="inputBox1" >
                  <input    required="required"   />
                  <span>Email</span>
                   <i></i>
            </div>
            <div  className="inputBox1" >
                  <input     required="required"  />
                  <span>Password</span>
                   <i></i>
            </div>
            <div className="signDiv1" >
            <p>Have You Not Register Yes?</p>
            <Link to="/login">
            <h6  className="sign1"   >Login</h6>
            </Link>
            </div>
                  <div>
                     <Link to="/" >
                     <Button className="submit"
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Register
    </Button>
                       
                      </Link>
                  </div>
            </div>
    </div>


      </div>
       





       
    )
}

export default Sign