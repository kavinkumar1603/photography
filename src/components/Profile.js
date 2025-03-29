import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faChartBar, faUser } from '@fortawesome/free-solid-svg-icons';
import profilepic from '../assests/profilepic.jpg'; // Add your profile picture path

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    adminId: '110A',
    name: 'Adela Parkson',
    address: 'Pollachi',
    contact: '984123XXXX',
    email: 'abc123@gmail.com',
    password: '******',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save updated profile details (e.g., API call)
    console.log('Profile updated:', profile);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar">
        <h1>NAME</h1>
        <ul>
          <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faHome} /></span>Dashboard</a></li>
          <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faMoneyBill} /></span>Price List</a></li>
          <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faChartBar} /></span>Report</a></li>
          <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faUser} /></span>Profile</a></li>
        </ul>
        <button className="logout-button">Logout</button>
      </div>
      <div className="profile-container" style={{ marginLeft: '250px', width: 'calc(100% - 250px)', padding: '20px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Pages / Profile</h2>
        <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#555' }}>Pollachi Branch</h3>
        <div className="profile-card" style={{ display: 'flex', gap: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <div className="profile-card-left" style={{ flex: 1 }}>
            <h4 style={{ 
              fontSize: '18px', 
              marginBottom: '15px', 
              backgroundColor: '#007BFF', 
              color: '#fff', 
              padding: '10px', 
              borderRadius: '5px', 
              textAlign: 'center', 
              display: 'inline-block', 
              width: 'auto' /* Adjust width to fit the label content */
            }}>
              Your Profile
            </h4>
            {isEditing ? (
              <>
                <p><strong>Admin id:</strong> <input type="text" name="adminId" value={profile.adminId} onChange={handleInputChange} style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} /></p>
                <p><strong>Name:</strong> <input type="text" name="name" value={profile.name} onChange={handleInputChange} style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} /></p>
                <p><strong>Address:</strong> <input type="text" name="address" value={profile.address} onChange={handleInputChange} style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} /></p>
                <p><strong>Contact No.:</strong> <input type="text" name="contact" value={profile.contact} onChange={handleInputChange} style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} /></p>
                <p><strong>Email:</strong> <input type="email" name="email" value={profile.email} onChange={handleInputChange} style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} /></p>
                <p><strong>Password:</strong> <input type="password" name="password" value={profile.password} onChange={handleInputChange} style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} /></p>
                <button onClick={handleSave} className="save-button" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save</button>
              </>
            ) : (
              <>
                <p><strong>Admin id:</strong> {profile.adminId}</p>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Address:</strong> {profile.address}</p>
                <p><strong>Contact No.:</strong> {profile.contact}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Password:</strong> {profile.password}</p>
              </>
            )}
          </div>
          <div className="profile-card-right" style={{ textAlign: 'center' }}>
            <img src={profilepic} alt="Profile" style={{ borderRadius: '50%', width: '120px', height: '120px', marginBottom: '15px' }} />
            <button onClick={handleEditToggle} className="edit-button" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>{isEditing ? 'Cancel' : 'Edit'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
