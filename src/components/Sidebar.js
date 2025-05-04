import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faChartBar, faUser } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div style={{ width: '250px', backgroundColor: '#007BFF', color: '#fff', padding: '20px', height: '100vh' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>NAME</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
            Dashboard
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/pricelist" style={{ color: '#fff', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: '10px' }} />
            Price List
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
            Profile
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/report" style={{ color: '#fff', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faChartBar} style={{ marginRight: '10px' }} />
            Report
          </Link>
        </li>
      </ul>
      <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#fff', color: '#007BFF', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
