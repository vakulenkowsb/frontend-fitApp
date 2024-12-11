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
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <main className="signup__main">
    <div className="signup__container">
        <h1 class="signup__main-title">Sign Up</h1>
        <div className="signup__card">
        <form>
          <div className="login__input">
          <div className="input-login">
            <label>Username</label>
            {/* Functional item */}
            <input
              value={formData.userName}
              onChange={(e) => setFormData({ userName: e.target.value })}
              type="text"
            />
          </div>

          <div className="input-login">
            <label>Password</label>
            {/* Functional item */}
            <input
              value={formData.password}
              onChange={(e) => setFormData({ password: e.target.value })}
              type="password"
            />
          </div>
          <div className="input-login">
            <label>Password</label>
            {/* Functional item */}
            <input
              value={formData.password}
              onChange={(e) => setFormData({ password: e.target.value })}
              type="password"
            />
          </div>

          {/* Functional item */}
          <button type="submit" className="signup-button login__button" onClick={doSignUp}>
            Sign Up
          </button>

          </div>

          <p className="signup__text">
            Already have an account? <a href="/login" className="signup__text">Log In</a>
          </p>

          {/* Functional item */}
          {errorMessage ? <div className="error">{errorMessage}</div> : null}
        </form>
      </div>
    </div>
    </main>
  );
};
