import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../../auth/AuthWrapper"
import './Login.css';

export const Login = () => {

     const navigate = useNavigate();
     const { login } = AuthData();
     const [formData, setFormData] = useReducer((formData, newItem) => { return ({ ...formData, ...newItem }) }, { userName: "", password: "" })
     const [errorMessage, setErrorMessage] = useState(null)

     const doLogin = async (e) => {

          try {
               e.preventDefault()
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

          <main className="login__main">
               <div className="login__container">
                    <h1 className="login__title">Login</h1>
                    <div className="login__card">
                         <form>
                              <div className="login__input">
                                   <div className="input-login">
                                        <label>Login</label>
                                        {/* Functional item */}
                                        <input value={formData.userName} onChange={(e) => setFormData({ userName: e.target.value })} type="text" />
                                   </div>

                                   <div className="input-password">
                                        <label>Password</label>
                                        <input value={formData.password} onChange={(e) => setFormData({ password: e.target.value })} type="password" />
                                   </div>
                                   <p className="reset__password">
                                        <a href="#">Reset Password?</a>
                                   </p>
                                   {/* Functional item */}
                                   {errorMessage ?
                                        <div className="error">{errorMessage}</div>
                                        : null}

                                   {/* Functional item */}
                                   <button type="submit" className="login__button" onClick={doLogin}>Login</button>
                              </div>
                              <p className="signup__text">
                                   Don’t have an account? <a href="/signup" className="signup-link">Sign Up</a>
                              </p>


                         </form>
                    </div>
               </div>
          </main>
     )
}