import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ServerApi from "../Axios/ServerApi";
import { LoginForm } from "../components";
const LOGIN_URL = "/api/v1/auth/login";
const REGISTER_URL = "/api/v1/auth/register";
const CHECK_USER_URL = "/api/v1/users/checkloggedin";

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
