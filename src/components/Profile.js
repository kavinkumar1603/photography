import React, { useState } from 'react';
import profilepic from '../assests/profilepic.jpg'; // Add your profile picture path

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    adminId: '110A',
    name: 'Kavinkumar',
    address: 'Pollachi',
    contact: '984123XXXX',
    email: 'kavin@example.com',
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
    console.log('Profile updated:', profile);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Profile</h2>
      <div style={{ display: 'flex', gap: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#333' }}>Your Profile</h3>
          {isEditing ? (
            <>
              <p>
                <strong>Admin ID:</strong>{' '}
                <input
                  type="text"
                  name="adminId"
                  value={profile.adminId}
                  onChange={handleInputChange}
                  style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </p>
              <p>
                <strong>Name:</strong>{' '}
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </p>
              <p>
                <strong>Address:</strong>{' '}
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleInputChange}
                  style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </p>
              <p>
                <strong>Contact:</strong>{' '}
                <input
                  type="text"
                  name="contact"
                  value={profile.contact}
                  onChange={handleInputChange}
                  style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </p>
              <p>
                <strong>Password:</strong>{' '}
                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleInputChange}
                  style={{ padding: '8px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </p>
              <button
                onClick={handleSave}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '10px',
                }}
              >
                Save
              </button>
              <button
                onClick={handleEditToggle}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#f44336',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Admin ID:</strong> {profile.adminId}
              </p>
              <p>
                <strong>Name:</strong> {profile.name}
              </p>
              <p>
                <strong>Address:</strong> {profile.address}
              </p>
              <p>
                <strong>Contact:</strong> {profile.contact}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Password:</strong> {profile.password}
              </p>
              <button
                onClick={handleEditToggle}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src={profilepic}
            alt="Profile"
            style={{ borderRadius: '50%', width: '120px', height: '120px', marginBottom: '15px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
