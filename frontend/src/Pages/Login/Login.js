import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/UseAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || './home';
  const handleGoogelLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="p-5">
      <h2>Login Page</h2>
      <button onClick={handleGoogelLogin} className="btn btn-warning py-2">
        Google SignIn
      </button>
    </div>
  );
};

export default Login;
