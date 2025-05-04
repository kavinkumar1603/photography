import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

function Invoice() {
  const location = useLocation();
  const { userDetails = {}, selectedItems = [] } = location.state || {};
  const invoiceRef = useRef(); // Create a ref for the invoice section

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current, // Ensure this returns the correct ref
    documentTitle: 'Invoice', // Optional: Set a title for the printed document
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <div
        ref={invoiceRef} // Ensure the ref is correctly assigned here
        className="invoice-container"
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>SOKKAI-THE CLOTHING BRAND</h2>
        <p style={{ marginBottom: '20px', color: '#555' }}>Make all checks payable to Mahendra Kumar</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p><strong>To:</strong> {userDetails.name || 'N/A'}</p>
            <p><strong>Address:</strong> {userDetails.address || 'N/A'}</p>
            <p><strong>Phone:</strong> {userDetails.phone || 'N/A'}</p>
          </div>
          <div>
            <p><strong>Invoice:</strong> #1733157519942</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>QTY</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>DESCRIPTION</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>UNIT PRICE</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>LINE TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.quantity}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.title}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Rs. {item.price}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Rs. {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <p><strong>Unit Total:</strong> Rs. {calculateTotal()}</p>
          <p><strong>Delivery Charge:</strong> Rs. 30</p>
          <p><strong>Total:</strong> Rs. {calculateTotal() + 30}</p>
        </div>
        <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px' }}>THANK YOU</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }} className="no-print">
        <button
          onClick={handlePrint} // Ensure this triggers the handlePrint function
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
          Print Invoice
        </button>
      </div>
    </div>
  );
}

export default Invoice;
