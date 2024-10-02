import React, { useEffect, useState } from 'react';
import '../styles/Affirmation.css'; 

const affirmationsList = [
  "I am capable of achieving my goals.",
  "I believe in my abilities and express my true self with ease.",
  "Every day is a new opportunity to grow and improve.",
  "I am deserving of all good things in life.",
  "I choose to be positive and to find joy in each moment.",
  "My mind is filled with healthy, positive, and creative thoughts.",
  "I am strong, resilient, and can overcome any challenge.",
  "I attract positive and supportive people into my life.",
  "I am grateful for the abundance in my life.",
  "I embrace change and welcome new experiences.",
  "I am worthy of love, respect, and kindness.",
  "I am in charge of how I feel and today I choose happiness.",
  "I trust myself to make the best decisions for me.",
  "I radiate confidence, self-respect, and inner harmony.",
  "I am constantly learning and evolving into a better version of myself.",
  "I choose to see the good in others and appreciate their uniqueness.",
  "I have the power to create the life I desire.",
  "I am surrounded by love and everything is fine.",
  "I forgive myself and let go of my past mistakes.",
  "I am a magnet for success and abundance."
];

const Affirmation = () => {
  const [affirmation, setAffirmation] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Set a random affirmation on component mount
    getRandomAffirmation();
  }, []); // Empty dependency array to run only on mount

  const getRandomAffirmation = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * affirmationsList.length);
    setAffirmation(affirmationsList[randomIndex]);
    setIsLoading(false); // Set loading to false after fetching a new affirmation
  };

  return (
    <div className='affirmation-container'>
      <h3>Affirmation of the Day</h3>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1 className='affirmation-text'>{affirmation}</h1>
      )}
      <button className='new-affirmation-button' onClick={getRandomAffirmation}>
        Get Another Affirmation
      </button>
      <p className='affirmation-description'>
        Click the button above to receive a new affirmation that will uplift your spirits and promote positivity in your life. Remember, affirmations are powerful statements that can help change your mindset and encourage self-love.
      </p>
    </div>
  );
};

export default Affirmation;
