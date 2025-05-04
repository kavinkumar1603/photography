import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PriceList from './components/PriceList';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar /> {/* Sidebar is always visible */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
