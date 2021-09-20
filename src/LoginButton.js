import React from "react";
import { useAuth0 } from "auth0";


const LoginButton = () => {
  const auth0 = useAuth0();
  console.log(auth0);

  const { loginWithRedirect } = auth0; 

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
