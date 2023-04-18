import React, { useState } from "react"
import AuthService from "../services/auth.service";
import { useNavigate, Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';
import jwtDecode from "jwt-decode";
import SiteLogo from '../Images/wildsteppe_logo.png';

const Login = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    console.log("User clicked log in")
    e.preventDefault();

    AuthService
      .login(email, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
        navigate('/profile')
      });
  }

  return (
    <div id="login_page" className="container-fluid p-5">
      <div id="login_form_div" className="c-form text-center m-5 p-5'">
        <div>
          <img id="" src={SiteLogo} alt='site logo' />
        </div>
        <div id="login_form_title" className="mb-5">Lets go explore!</div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="mb-3 ms-1"
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="pass">Password:</label>
            <input
              className="mb-3 me-4 ms-1"
              type="password"
              id="pass"
              name="password"
              minLength="8"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Sign in"
            id="loginButton"
            className="btn mb-5"
          />
          <div className="p-5">
            <p id="login_form_goToRegister" className="mt-5">Don't have an account?</p>
            <Link to="/register" id="register_tagline" className="mb-5">Create Account Here!</Link>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Login