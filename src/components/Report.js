import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Report() {
  const customerHistory = [
    { name: 'Kavinkumar', price: 5000 },
    { name: 'Manish', price: 3000 },
    { name: 'Keerthi', price: 7000 },
    { name: 'Sasi', price: 4500 },
  ];

  const graphData = {
    labels: customerHistory.map((customer) => customer.name),
    datasets: [
      {
        label: 'Sales Amount',
        data: customerHistory.map((customer) => customer.price),
        backgroundColor: ['#4c6ef5', '#74c0fc', '#63e6be', '#ff922b'],
      },
    ],
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Sales Report</h2>
      <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#333' }}>Customer History</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Customer Name</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {customerHistory.map((customer, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{customer.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Rs. {customer.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#333' }}>Sales Graph</h3>
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <Bar data={graphData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  );
}

export default Report;
