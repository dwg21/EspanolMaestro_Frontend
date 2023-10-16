import { createContext, useState } from "react";

import ServerApi from "../Axios/ServerApi";
const AuthContext = createContext({});

const UserDataUrl = "/api/v1/userdata";
const UserLogoutUrl = "/api/v1/auth/logout";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [userData, setUserData] = useState({});

  // if (userData) {
  //     return
  // }

  const getUserData = async () => {
    try {
      const { data } = await ServerApi.get(UserDataUrl, {
        headers: { "Content-Type": "application/json" },
      });
      setUserData(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = async () => {
    setUserData({});
    try {
      await ServerApi.get(UserLogoutUrl, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        getUserData,
        userData,
        setUserData,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
