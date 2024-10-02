import React from 'react';
import { Link } from 'react-router-dom';
import GamingFeatureImage1 from '../images/ai-robot-wallpaper-24-1.jpg';
import GamingFeatureImage2 from '../images/ai-robot-wallpaper-24-1.jpg';
import GamingFeatureImage3 from '../images/ai-robot-wallpaper-24-1.jpg';
import GamingFeatureImage4 from '../images/ai-robot-wallpaper-24-1.jpg';
import '../styles/Gamification.css';

const Gamification = () => {
    // Array of card data tailored for mental fitness games
    const cards = [
        {
            title: 'Mindfulness Meditation',
            description: 'Engage in guided meditation sessions to boost your mental clarity and reduce stress.',
            image: GamingFeatureImage1,
            route: '/mindfulness-meditation',
        },
        {
            title: 'Stress Releaving - Puzzles',
            description: 'Solve puzzles designed to help you unwind and refocus your mind.',
            image: GamingFeatureImage2,
            route: '/stress-relief-puzzles',
        },
        {
            title: 'Brain Training Challenges',
            description: 'Sharpen your cognitive skills with fun brain games and exercises.',
            image: GamingFeatureImage3,
            route: '/brain-training',
        },
        {
            title: 'Positive Affirmations Quiz',
            description: 'Learn and practice positive affirmations to enhance your mental wellbeing.',
            image: GamingFeatureImage4,
            route: '/positive-affirmations-quiz',
        },
    ];

    return (
        <div className="gamification-container">
            <h1>Mental Fitness Games</h1>
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
