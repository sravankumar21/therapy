import React from 'react';
import TableauEmbed1 from '../components/TableauEmbed1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Indiadashboard = () => {
  return (
    
    
    <div className="indiadashboard" style={{  background: '#ffffff' , marginLeft:'25vh' }}>
    <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '2rem', marginBottom: '20px',marginTop: '10px', marginRight:'25vh',textAlign: 'center' }}>Healthcare Analytics in India (2024)</h1>

   

      <TableauEmbed1 />

      <div className="dashboard-switcher" style={{marginLeft:'-20vh'}}>
        <Link to="/worldrankings" className="dashboard-link">Go to World Healthcare Rankings</Link>
        <Link to="/costanalysis" className="dashboard-link">Go to Cost Analysis Dashboard</Link>
        <Link to="/healthy" className="dashboard-link">Go to Positive Healthcare Dashboard</Link>
        <Link to="/worst" className="dashboard-link">Go to Worst Healthcare Dashboard</Link>
      </div>
      

      
    </div>
    
  );
}

export default Indiadashboard;