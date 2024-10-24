import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userName, password) => {
    return new Promise((resolve, reject) => {
      if (password === "password") {
        setUser({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Incorrect password");
      }
    });
  };

  // New signUp function
  const signUp = (userName, password) => {
    return new Promise((resolve, reject) => {
      if (userName && password) {
        setUser({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Failed to sign up");
      }
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
