import React, { useContext } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import ServerApi from "../../Axios/ServerApi";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const navigate = useNavigate();

  const responseGoogle = async (response) => {
    const id_token = response.credential;
    //send request to backend with id_token to be verified.

    try {
      const { data } = await ServerApi.post(
        "api/v1/auth/googlelogin",
        {
          id_token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");

      console.log("returned userdata from google login", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-4">
      <GoogleOAuthProvider
        clientId={`${import.meta.env.VITE_GOOGLE_API_TOKEN}`}
      >
        <GoogleLogin
          render={(renderProps) => (
            <button
              type="button"
              className=""
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign in with google
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
        {/* <h2>Token here :{import.meta.env.VITE_GOOGLE_API_TOKEN}</h2>
        <h2>Test {import.meta.env.VITE_SOME_KEY}</h2> */}
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuth;
