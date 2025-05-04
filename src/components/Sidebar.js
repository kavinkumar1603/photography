import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faMoneyBill, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div style={{ width: '250px', backgroundColor: '#fff', color: '#333', padding: '20px', height: '100vh', borderRight: '1px solid #ddd' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold' }}>NAME</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              textDecoration: 'none',
              color: '#333',
              fontWeight: '500',
            }}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
            Dashboard
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link
            to="/pricelist"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              textDecoration: 'none',
              color: '#333',
              fontWeight: '500',
            }}
          >
            <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: '10px' }} />
            Price List
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link
            to="/report"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              textDecoration: 'none',
              color: '#333',
              fontWeight: '500',
            }}
          >
            <FontAwesomeIcon icon={faChartBar} style={{ marginRight: '10px' }} />
            Report
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link
            to="/profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              textDecoration: 'none',
              color: '#333',
              fontWeight: '500',
            }}
          >
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
            Profile
          </Link>
        </li>
        <li style={{ marginTop: '20px' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#f44336',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              textAlign: 'left',
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '10px' }} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
