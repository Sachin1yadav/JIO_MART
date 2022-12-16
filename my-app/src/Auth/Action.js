export const loginSucessAction = (data) => ({
    type: "LOGIN_SUCESS",
    payload: data,
  });
  
  
  export const logoutSucessAction = () => ({
    type: "LOGOUT_SUCESS",
  });
  
  
  export const loginFailureAction = () => ({
    type: "LOGIN_FAILURE",
  });