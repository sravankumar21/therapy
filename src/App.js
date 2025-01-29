import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Companion from './components/ChatbotInterface';
import Games from './components/Games';

import TherapistGuidance from './components/TherapistGuidance';
import HomePage from './components/HomePage';
import Affirmation from './components/Affirmation';

import Indiadashboard from '../src/components/IndiaDashboard';
import WorldRankingsDashboard from '../src/components/WorldRankingsDashboard';
import CostAnalysis from '../src/components/CostAnalysis';
import HealthyDashboard from '../src/components/HealthyDashboard';
import WorstHealthDashboard from '../src/components/WorstHealthDashboard';



import DiabeticModel from '../src/components/diabteticmodel';
import HeartModel from '../src/components/HeartModel';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companion" element={<Companion />} />
        <Route path="/games" element={<Games />} />
        <Route path="/affirmation" element={<Affirmation />} />
        <Route path="/therapist-guidance" element={<TherapistGuidance />} />

        <Route path="/indiadashboard" element={<Indiadashboard />} />
        <Route path="/worldrankings" element={<WorldRankingsDashboard />} />
        <Route path="/costanalysis" element={<CostAnalysis />} />
        <Route path="/healthy" element={<HealthyDashboard />} />
        <Route path="/worst" element={<WorstHealthDashboard />} />


        <Route path="/diabeticmodel" element={<DiabeticModel />} />
        <Route path="/heartdiseasemodel" element={<HeartModel />} />
        
      </Routes>
    </div>
  );
};

export default App;
