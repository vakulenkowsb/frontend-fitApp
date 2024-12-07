import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../../auth/AuthWrapper";
import './Signup.css';

export const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = AuthData();
  const [formData, setFormData] = useReducer((formData, newItem) => {
    return { ...formData, ...newItem };
  }, { userName: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);

  const doSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData.userName, formData.password);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <main>
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <div className="input-group">
            <label>Username</label>
            {/* Functional item */}
            <input
              value={formData.userName}
              onChange={(e) => setFormData({ userName: e.target.value })}
              type="text"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            {/* Functional item */}
           
          </div>
          <div className="input-group">
            <label>Password</label>
            {/* Functional item */}
            <input
              value={formData.password}
              onChange={(e) => setFormData({ password: e.target.value })}
              type="password"
            />
          </div>

          {/* Functional item */}
          <button type="submit" className="signup-button" onClick={doSignUp}>
            Sign Up
          </button>

          <p className="login-text">
            Already have an account? <a href="/login" className="login-link">Log In</a>
          </p>

          {/* Functional item */}
          {errorMessage ? <div className="error">{errorMessage}</div> : null}
        </form>
      </div>
    </div>
    </main>
  );
};