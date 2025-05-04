import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import circle from '../assests/circle2.jpg'; // Corrected path

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    // Example: Validate credentials
    if (credentials.email && credentials.password) {
      localStorage.setItem('isLoggedIn', 'true'); // Save login state in localStorage
      navigate('/profile'); // Redirect to the Profile page
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Branch Login</h2>
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
            Enter your email and password to log in!
          </p>
          <select
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              color: '#555',
            }}
          >
            <option value="" disabled selected>
              Choose your option
            </option>
            <option>Pollachi</option>
            <option>Coimbatore</option>
            <option>Dindigul</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ddd',
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ddd',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <label style={{ color: '#555' }}>
              <input type="checkbox" style={{ marginRight: '5px' }} /> Keep me logged in
            </label>
            <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
              Forget password?
            </a>
          </div>
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#007bff',
          color: '#fff',
          borderBottomLeftRadius: '150px', // Add curve to the bottom-left corner
        }}
      >
        <img
          src={circle}
          alt="Logo"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            marginBottom: '20px',
          }}
        />
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>NAME</h1>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: row"] {
              flex-direction: column;
            }
            div[style*="flex: 1"] {
              flex: none;
              width: 100%;
            }
            div[style*="background-color: #007bff"] {
              border-radius: 0;
              display: none;
            
            }
          }
        `}
      </style>
    </div>
  );
}

export default Login;
