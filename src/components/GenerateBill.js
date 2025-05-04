import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GenerateBill() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedItems = [] } = location.state || {}; // Access selected items passed from PriceList

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    district: '',
    state: '',
    phone: '',
    alternatePhone: '',
    deliveryDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/invoice', { state: { userDetails, selectedItems } }); // Pass userDetails and selectedItems to Invoice
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>User Details</h2>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Full Name</label>
          <input type="text" name="name" value={userDetails.name} onChange={handleInputChange} placeholder="Enter your full name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
          <input type="email" name="email" value={userDetails.email} onChange={handleInputChange} placeholder="Enter your email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Address</label>
          <input type="text" name="address" value={userDetails.address} onChange={handleInputChange} placeholder="Enter your address" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>District</label>
            <input type="text" name="district" value={userDetails.district} onChange={handleInputChange} placeholder="Enter district" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>State</label>
            <input type="text" name="state" value={userDetails.state} onChange={handleInputChange} placeholder="Enter state" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Phone No.</label>
            <input type="text" name="phone" value={userDetails.phone} onChange={handleInputChange} placeholder="Enter phone number" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Alternate Phone No.</label>
            <input type="text" name="alternatePhone" value={userDetails.alternatePhone} onChange={handleInputChange} placeholder="Enter alternate phone number" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Delivery Date</label>
          <input type="date" name="deliveryDate" value={userDetails.deliveryDate} onChange={handleInputChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default GenerateBill;
