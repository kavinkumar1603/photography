import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'; // Import useLocation for route checking
import Sidebar from './components/Sidebar'; // Import Sidebar
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PriceList from './components/PriceList';
import GenerateBill from './components/GenerateBill';
import Invoice from './components/Invoice';
import Report from './components/Report'; // Import Report component
import Login from './components/Login'; // Import Login component

function App() {
  const location = useLocation(); // Get the current route
  const isLoggedIn = !!localStorage.getItem('isLoggedIn'); // Check login state from localStorage

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Render Sidebar only if the user is logged in and not on the login page */}
      {isLoggedIn && location.pathname !== '/login' && <Sidebar className="sidebar" />}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Routes>
          {!isLoggedIn ? (
            <Route path="*" element={<Navigate to="/login" />} /> // Redirect to login if not logged in
          ) : (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/pricelist" element={<PriceList />} />
              <Route path="/generate-bill" element={<GenerateBill />} />
              <Route path="/invoice" element={<div className="invoice-container"><Invoice /></div>} />
              <Route path="/report" element={<Report />} />
            </>
          )}
          <Route path="/login" element={<Login />} /> {/* Login route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
