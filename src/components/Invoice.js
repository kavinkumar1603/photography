import React from 'react';

function Invoice() {
  return (
    <div style={{ display: 'flex', padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Invoice Section */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '20px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Invoice</h2>
        <h3 style={{ fontSize: '18px', marginBottom: '20px', color: '#28a745' }}>#021/457</h3>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '10px', color: '#333' }}>SOKKAI-THE CLOTHING BRAND</h4>
          <p style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Make all checks payable to Mahendra Kumar</p>
          <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>QTY</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>DESCRIPTION</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>UNIT PRICE</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>LINE TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>1</td>
                <td style={{ padding: '8px' }}>Cotton Shirts</td>
                <td style={{ padding: '8px' }}>200</td>
                <td style={{ padding: '8px' }}>300</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>1</td>
                <td style={{ padding: '8px' }}>Formal Shirts</td>
                <td style={{ padding: '8px' }}>3000</td>
                <td style={{ padding: '8px' }}>96</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Total: Rs. 428</p>
        </div>
      </div>

      {/* User Details Section */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>User Details</h2>
        <form>
          <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <input type="text" placeholder="Address" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <input type="text" placeholder="District" style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
            <input type="text" placeholder="State" style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <input type="text" placeholder="Phone No." style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
            <input type="text" placeholder="Alternate Phone No." style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <input type="date" placeholder="Delivery Date" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Invoice;
