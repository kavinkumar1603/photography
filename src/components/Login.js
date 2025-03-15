import React from 'react';
import circle from '../assests/circle.jpg'; // Corrected path
function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Branch Login</h2>
        <p>Enter your email and password to log in!</p>
        <select className="branch-select">
          <option value="" disabled selected>Choose your option</option> {/* Placeholder option */}
          <option>Pollachi</option> 
          <option>Coimbatore</option>
          <option>Dindigul</option>
        </select>
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <div className="login-options">
          <label>
            <input type="checkbox" /> Keep me logged in
          </label>
          <a href="#" className="forgot-password">Forget password?</a>
        </div>
        <button className="login-button">Login</button>
      </div>
      <div className="login-logo">
      <img src={circle} alt="Logo" />
        <h1>NAME</h1>
      </div>
    </div>
  );
}

export default Login;
