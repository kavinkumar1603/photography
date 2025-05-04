import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

function Dashboard() {
  // Data for the line chart
  const lineData = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    datasets: [
      {
        label: 'Total Payments',
        data: [120000, 150000, 180000, 200000, 220000, 240000],
        borderColor: '#4c6ef5',
        backgroundColor: 'rgba(76, 110, 245, 0.2)',
        fill: true,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Data for the pie chart
  const pieData = {
    labels: ['Payments Done', 'Pending'],
    datasets: [
      {
        data: [63, 37],
        backgroundColor: ['#4c6ef5', '#74c0fc'],
      },
    ],
  };

  return (
    <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Pages / Dashboard</h2>
      <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#28a745' }}>Pollachi Branch</h3>

      {/* Top Stats Section */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
          <h4>Orders</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>45</p>
        </div>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
          <h4>Total Payments</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Rs. 200,000</p>
        </div>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
          <h4>Pending</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>22</p>
        </div>
      </div>

      {/* Graph and Analysis Section */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 2, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h4>Total Payments</h4>
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          <p style={{ marginTop: '10px', color: '#28a745', fontWeight: 'bold' }}>On track of this area</p>
        </div>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h4>Payment Analysis</h4>
          <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>Payments Done: 63%</p>
        </div>
      </div>

      {/* Recent Payments Section */}
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h4>Recent Payments</h4>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#007bff', marginRight: '10px' }}></div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Mohan</p>
            <p style={{ margin: 0, color: '#555' }}>Rs. 3000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
