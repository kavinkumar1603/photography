import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import potrait1 from '../assests/PL1.jpg';
import potrait2 from '../assests/PL2.webp';
import landscape1 from '../assests/PL3.jpg';
import landscape2 from '../assests/PL4.jpg';

function PriceList() {
  const navigate = useNavigate(); // Initialize useNavigate
  const frames = [
    {
      id: 1,
      title: 'Portrait Frames',
      size: 'A4 Size - 8" x 12"',
      details: 'Material: High-Quality Wood Finish',
      price: 1000,
      image: potrait1,
    },
    {
      id: 2,
      title: 'Landscape Frames',
      size: 'Size - 20" x 24"',
      details: 'Material: Premium Aluminum Alloy',
      price: 2200,
      image: landscape1,
    },
    {
      id: 3,
      title: 'Portrait Frames',
      size: 'Size - 16" x 20"',
      details: 'Material: Premium Polycarbonate',
      price: 1900,
      image: landscape2,
    },
    {
      id: 4,
      title: 'Landscape Frames',
      size: 'Size - 4" x 6"',
      details: 'Material: Durable Acrylic Frame',
      price: 500,
      image: potrait2,
    },
  ];

  const [quantities, setQuantities] = useState(frames.map(() => 1)); // Initialize quantities for each frame

  const handleIncrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const handleDecrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  const handleGenerateBill = () => {
    navigate('/invoice'); // Navigate to the Invoice page
  };

  return (
    <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh', marginLeft: '250px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Pages / Price List</h2>
      <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#28a745' }}>Pollachi Branch</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {frames.map((frame, index) => (
          <div
            key={frame.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>{frame.title}</h4>
              <p style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>{frame.size}</p>
              <p style={{ fontSize: '14px', marginBottom: '10px', color: '#555' }}>{frame.details}</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#28a745' }}>Rs. {frame.price}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <img
                src={frame.image}
                alt={frame.title}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => handleDecrease(index)}
                  style={{
                    backgroundColor: '#f0f0f0',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{quantities[index]}</span>
                <button
                  onClick={() => handleIncrease(index)}
                  style={{
                    backgroundColor: '#f0f0f0',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={handleGenerateBill}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Generate Bill
        </button>
      </div>
    </div>
  );
}

export default PriceList;
