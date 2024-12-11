import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Mock users array
const users = [
  { username: "bob", password: "password", jwt: "1", gender: "male", height: 200, weight: 100, age: 22, email: "bob@gmail.com" },
  { username: "john", password: "password", jwt: "2", gender: "male", height: 180, weight: 82, age: 19, email: "john@gmail.com" },
  { username: "michelle", password: "password", jwt: "3", gender: "female", height: 175, weight: 58, age: 30, email: "michelle@gmail.com" },
  { username: "obeme", password: "password", jwt: "4", gender: "male", height: 190, weight: 80, age: 26, email: "obeme@gmail.com" },
];

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

  const login = (userName, password) => {
    return new Promise((resolve, reject) => {
      const foundUser = users.find(
        (user) => user.username === userName && user.password === password
      );

      if (foundUser) {
        Cookies.set("jwtToken", foundUser.jwt, { secure: true, sameSite: "Strict" });

        const userData = { ...foundUser, isAuthenticated: true };
        setUser(userData);
        saveUserToSessionStorage(userData);
        resolve("success");
      } else {
        reject("Incorrect username or password");
      }
    });
  };

  const signUp = (userName, password) => {
    return new Promise((resolve, reject) => {
      if (userName && password) {
        const jwtToken = Math.random().toString(36).substring(2);

        const newUser = { username: userName, password, jwt: jwtToken, gender: "", height: "", weight: "", age: "", email: "" };
        users.push(newUser);

        Cookies.set("jwtToken", jwtToken, { secure: true, sameSite: "Strict" });

        const userData = { ...newUser, isAuthenticated: true };
        setUser(userData);
        saveUserToSessionStorage(userData);
        resolve("success");
      } else {
        reject("Failed to sign up");
      }
    });
  };

  const logout = () => {
    Cookies.remove("jwtToken");
    sessionStorage.removeItem("user");
    setUser({ isAuthenticated: false });
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken) {
      const foundUser = users.find((user) => user.jwt === jwtToken);
      if (foundUser) {
        const userData = { ...foundUser, isAuthenticated: true };
        setUser(userData);
        saveUserToSessionStorage(userData);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
