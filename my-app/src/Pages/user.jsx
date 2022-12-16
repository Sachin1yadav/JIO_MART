import React, { useContext } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/Context/AuthContextProvider";
import { logoutSucessAction } from "../Auth/Context/Action";

export const User = () => {
  const { state, dispatch } = useContext(AuthContext);

  const Logout = () => {
    dispatch(logoutSucessAction());
  };

  return (
    <>
      <Menu>
        <MenuButton>
            user
          {/* <FontAwesomeIcon
           fontSize="2xl" color="black" icon={faUser} 
           /> */}
        </MenuButton>
        <MenuList borderRadius="2px">
          {/* {state.isAuth ? ( */}
            <MenuItem>
              <Button
                width="100%"
                p="-1"
                borderRadius="none"
                colorScheme="black"
                _hover={{ bg: "black", color: "white" }}
                variant="outline"
                onClick={Logout}
              >
                LOG OUT
              </Button>
            </MenuItem>
          ) : (
            <Link to="/login">
              <MenuItem>
                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                >
                  LOG IN
                </Button>
              </MenuItem>
            </Link>
          )}

          <MenuItem>
            <Button
              width="100%"
              p="-1"
              borderRadius="none"
              colorScheme="black"
              _hover={{ bg: "black", color: "white" }}
              variant="outline"
            >
              Register
            </Button>
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>Wishlist</MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Orders
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Refferals
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};