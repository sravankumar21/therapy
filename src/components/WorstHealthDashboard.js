// Dashboard4.js
import React from 'react';
import TableauEmbed5 from '../components/TableauEmbed5';

const WorstHealthDashboard = () => {
  return (
    <div className="dashboard" style={{ background: '#ffffff', marginLeft: '25vh' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '0px', marginTop: '10px', marginRight: '25vh', textAlign: 'center' }}>
        Worst Healthcare in World Dashboard
      </h1>
      <TableauEmbed5 />
    </div>
  );
};

export default WorstHealthDashboard;