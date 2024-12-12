import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { isAuthenticated: false };
  });

  const saveUserToSessionStorage = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const login = async (userName, password) => {
    console.log("username", userName)
    console.log("password", password)
    try {

      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data)
        // Set JWT in cookies
        Cookies.set("jwtToken", data.user.jwt, { secure: true, sameSite: "Strict" });

        // Update user state
        const userData = { ...data.user, isAuthenticated: true };
        setUser(userData);
        saveUserToSessionStorage(userData);

        return "success";
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return error.message || "An error occurred";
    }
  };

  const signUp = async (userName, password) => {
    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set JWT in cookies
        console.log(data)
        // Cookies.set("jwtToken", data.user.jwt, { secure: true, sameSite: "Strict" });

        // Update user state
        // const userData = { ...data.user, isAuthenticated: true };
        // setUser(userData);
        // saveUserToSessionStorage(userData);

        return "success";
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return error.message || "An error occurred";
    }
  };

  const logout = () => {
    Cookies.remove("jwtToken");
    sessionStorage.removeItem("user");
    setUser({ isAuthenticated: false });
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken) {
      // Ideally, we would have an endpoint to validate the JWT and get user data
      // For simplicity, we will skip this step in this example
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

