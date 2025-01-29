import React, { useEffect, useState } from 'react';
import '../styles/Affirmation.css'; 

const healthcareTipsList = [
  "Drink at least 8 glasses of water every day to stay hydrated.",
  "Include a variety of fruits and vegetables in your meals for balanced nutrition.",
  "Aim for at least 7-8 hours of sleep each night to support overall health.",
  "Practice daily physical activity, such as walking or yoga, to boost your energy.",
  "Wash your hands regularly to prevent the spread of germs.",
  "Limit your intake of processed foods and sugar for better metabolic health.",
  "Take short breaks from screens to reduce eye strain and improve focus.",
  "Maintain good posture to prevent back and neck pain.",
  "Schedule regular check-ups with your healthcare provider.",
  "Manage stress through mindfulness or meditation practices.",
  "Wear sunscreen to protect your skin from harmful UV rays.",
  "Stay up to date with vaccinations to protect against diseases.",
  "Take time to connect with loved ones for emotional well-being.",
  "Eat meals at regular intervals to maintain stable energy levels.",
  "Practice deep breathing exercises to reduce anxiety and improve lung health.",
  "Keep your surroundings clean to promote a healthy living environment.",
  "Avoid smoking and limit alcohol consumption for better long-term health.",
  "Incorporate healthy fats, such as nuts and avocados, into your diet.",
  "Stretch regularly to maintain flexibility and reduce muscle tension.",
  "Listen to your body and rest when you feel tired."
];

const HealthcareTips = () => {
  const [tip, setTip] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Set a random healthcare tip on component mount
    getRandomTip();
  }, []); // Empty dependency array to run only on mount

  const getRandomTip = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * healthcareTipsList.length);
    setTip(healthcareTipsList[randomIndex]);
    setIsLoading(false); // Set loading to false after fetching a new tip
  };

  return (
    <div className='affirmation-container'>
      <h3>Healthcare Tip of the Day</h3>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1 className='affirmation-text'>{tip}</h1>
      )}
      <button className='new-affirmation-button' onClick={getRandomTip}>
        Get Another Tip
      </button>
      <p className='affirmation-description'>
        Click the button above to receive a new healthcare tip to improve your well-being and maintain a healthy lifestyle. Small changes can make a big difference!
      </p>
    </div>
  );
};

export default HealthcareTips;
