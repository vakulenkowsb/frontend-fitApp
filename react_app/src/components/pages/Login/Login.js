import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../../auth/AuthWrapper"
import './Login.css';

export const Login = () => {

     const navigate = useNavigate();
     const { login } = AuthData();
     const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, {userName: "", password: ""})
     const [ errorMessage, setErrorMessage ] = useState(null)
     
     const doLogin = async () => {

          try {
               
               await login(formData.userName, formData.password)
               navigate("/profile")

          } catch (error) {

               setErrorMessage(error)
               
          }
          
     }

     return (
          // <div className="page login">
          //      <h2>Login page</h2>
          //      <div className="inputs">
          //           <div className="input">
          //                <input value={formData.userName} onChange={(e) => setFormData({userName: e.target.value}) } type="text"/>
          //           </div>
          //           <div className="input">
          //                <input value={formData.password} onChange={(e) => setFormData({password: e.target.value}) } type="password"/>
          //           </div>
          //           <div className="button">
          //                <button onClick={doLogin}>Log in</button>
          //           </div>
          //           {errorMessage ?
          //           <div className="error">{errorMessage}</div>
          //           : null }
          //      </div>
          // </div>
          

          //!!!!!!!Attention, read this before editing!!!!!!!!
          // you can change the html structure and all the css styles here, but don't touch functionality of the items
          // Items with functionality will be signed as "functional item" a line above. (you can only edit className of those items)


          <div className="login-container">
               <div className="login-box">
               <h1>Login</h1>
               <form>
                    <div className="input-group">
                         <label>user name</label>
                         {/* Functional item */}
                         <input value={formData.userName} onChange={(e) => setFormData({userName: e.target.value}) } type="text"/>
                    </div>

                    <div className="input-group">
                         <label>Password</label>
                         <div className="password-group">
                              {/* Functional item */}
                              <input value={formData.password} onChange={(e) => setFormData({password: e.target.value}) } type="password"/>
                              <a href="#" className="reset-password">Reset Password</a>
                         </div>
                    </div>

                    {/* Functional item */}
                    <button type="submit" className="login-button" onClick={doLogin}>Login</button>

                    <p className="signup-text">
                    Don’t have an account? <a href="/signup" className="signup-link">Sign Up</a>
                    </p>

                    {/* Functional item */}
                    {errorMessage ?
                     <div className="error">{errorMessage}</div>
                    : null }
               </form>
               </div>
          </div>
     )
}