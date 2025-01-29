// Dashboard4.js
import React from 'react';
import TableauEmbed4 from '../components/TableauEmbed4';

const HealthyDashboard = () => {
  return (
    <div className="dashboard" style={{ background: '#ffffff', marginLeft: '25vh' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '0px', marginTop: '10px', marginRight: '25vh', textAlign: 'center' }}>
        Healthy Dashboard
      </h1>
      <TableauEmbed4 />
    </div>
  );
};

export default HealthyDashboard;