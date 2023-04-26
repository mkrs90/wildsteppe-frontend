import React, { useState } from "react"
import AuthService from "../services/auth.service";
import SiteLogo from '../Images/wildsteppe_logo.png';

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
    window.location.href = '/';
    window.location.reload(true);
  }

  return (
    <div id="register_page" className="container-fluid p-5">
    <div id="register_form_div" className="c-form text-center m-5 p-5">
    <div>
          <img src={SiteLogo} alt='site logo' />
        </div>
        <div id="login_form_title" className="mb-5">Join the community!</div>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => handleChange('username', e.target.value)}
            required
            className="mb-3 ms-1"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => handleChange('email', e.target.value)}
            required
            className="mb-3 me-4 ms-1"
          />
        </div>
        <div>
          <label htmlFor="pass">Password (8 characters minimum):</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange('password', e.target.value)}
            className="mb-3 me-4 ms-1"
          />
        </div>
        <div>
          <label htmlFor="passConf">Confirm Password:</label>
          <input
            type="password"
            id="passConf"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange('passwordConf', e.target.value)} 
            className="mb-3 me-4 ms-1"
            />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="fname"
            className="mb-3 me-4 ms-1"
            required
            onChange={(e) => handleChange('firstName', e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lname"
            required
            onChange={(e) => handleChange('lastName', e.target.value)} 
            className="mb-3 me-4 ms-1"
            />
        </div>
        <input
          type="submit"
          value="Register"
          id="loginButton"
          className="btn mb-5"
          disabled={(
            user.password &&
            user.password.length >= 8 &&
            user.password === user.passwordConf &&
            user.firstName &&
            user.lastName &&
            user.email
          ) ? false : true}
        />
      </form>
    </div>
    </div>
  )

}

export default Register