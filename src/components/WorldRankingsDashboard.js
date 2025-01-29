import React from 'react';
import TableauEmbed2 from '../components/TableauEmbed2';


const WorldRankingsDashboard = () => {
  return (
    <div className="dashboard" style={{ background: '#ffffff', marginLeft: '25vh' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '0px', marginTop: '10px', marginRight: '25vh', textAlign: 'center' }}>
        World rankings
      </h1>
      <TableauEmbed2 />
    </div>
  );
};

export default WorldRankingsDashboard;