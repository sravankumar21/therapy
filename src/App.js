import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Companion from './components/ChatbotInterface';
import Games from './components/Games';
import WellnessPlan from './components/WellnessPlan';
import TherapistGuidance from './components/TherapistGuidance';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companion" element={<Companion />} />
        <Route path="/games" element={<Games />} />
        <Route path="/wellness-plan" element={<WellnessPlan />} />
        <Route path="/therapist-guidance" element={<TherapistGuidance />} />
      </Routes>
    </div>
  );
};

export default App;
