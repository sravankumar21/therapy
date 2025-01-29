// Dashboard4.js
import React from 'react';
import TableauEmbed3 from '../components/TableauEmbed3';

const CostAnalysis = () => {
  return (
    <div className="dashboard" style={{ background: '#ffffff', marginLeft: '25vh' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '0px', marginTop: '10px', marginRight: '25vh', textAlign: 'center' }}>
        FREE VS EXPENSIVE Healthcare Dashboard
      </h1>
      <TableauEmbed3 />
    </div>
  );
};

export default CostAnalysis;