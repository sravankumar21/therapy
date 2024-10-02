import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Companion from './components/ChatbotInterface';
import Games from './components/Games';

import TherapistGuidance from './components/TherapistGuidance';
import HomePage from './components/HomePage';
import Affirmation from './components/Affirmation';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companion" element={<Companion />} />
        <Route path="/games" element={<Games />} />
        <Route path="/affirmation" element={<Affirmation />} />
        <Route path="/therapist-guidance" element={<TherapistGuidance />} />
      </Routes>
    </div>
  );
};

export default App;
