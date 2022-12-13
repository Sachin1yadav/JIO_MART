import "../Styles/Login.css";
import Navbar from "./Navbar";
import { useToast, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Login() {
  const toast = useToast();

  return (
    <div>
      <Navbar />
      <div className="box">
        <div className="form">
          <h2>Login</h2>

          <div className="inputBox">
            <input required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input required="required" />
            <span>Password</span>
            <i></i>
          </div>

          <div className="signDiv">
            <p>Have You Not Register Yes?</p>
            <Link to="/sign">
              <h6 className="sign">Register</h6>
            </Link>
          </div>

          <div>

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
      Login
    </Button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Login;
