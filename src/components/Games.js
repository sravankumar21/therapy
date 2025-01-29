import React from 'react';
import { Link } from 'react-router-dom';
import GamingFeatureImage1 from '../images/ai-robot-wallpaper-24-1.jpg';
import GamingFeatureImage2 from '../images/ai-robot-wallpaper-24-1.jpg';
import GamingFeatureImage3 from '../images/ai-robot-wallpaper-24-1.jpg';
import GamingFeatureImage4 from '../images/ai-robot-wallpaper-24-1.jpg';
import '../styles/Gamification.css';

const Gamification = () => {
    // Array of card data tailored for healthcare-improving games
    const cards = [
        {
            title: 'Healthy Eating Challenge',
            description: 'Play games to learn about balanced diets and improve your nutrition knowledge.',
            image: GamingFeatureImage1,
            route: '/healthy-eating-challenge',
        },
        {
            title: 'Fitness Fun Activities',
            description: 'Join interactive exercises and games to stay active and improve physical health.',
            image: GamingFeatureImage2,
            route: '/fitness-fun',
        },
        {
            title: 'Hydration Tracker Game',
            description: 'Track your water intake and play hydration-focused challenges.',
            image: GamingFeatureImage3,
            route: '/hydration-tracker',
        },
        {
            title: 'Sleep Hygiene Quiz',
            description: 'Learn tips for better sleep through engaging quizzes and activities.',
            image: GamingFeatureImage4,
            route: '/sleep-hygiene-quiz',
        },
    ];

    return (
        <div className="gamification-container">
            <h1>Healthcare-Improving Games</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.title} className="card-image" />
                        <h2 className="card-title">{card.title}</h2>
                        <p className="card-description">{card.description}</p>
                        <Link to={card.route}>
                            <button className="card-button">Start</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gamification;
