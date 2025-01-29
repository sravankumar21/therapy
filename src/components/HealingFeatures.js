import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../styles/HealingFeatures.css';
import featureImage1 from '../images/companion.webp';
import featureImage2 from '../images/health tips.avif';
import featureImage3 from '../images/heartdisease.webp';
import featureImage4 from '../images/diabetic.avif';

const HealingFeatures = () => {
    const navigate = useNavigate();

    const features = [
        { name: "HealthCare Companion", image: featureImage1, path: "/companion" },
        { name: "Healthcare Tips", image: featureImage2, path: "/affirmation" },
        { name: "Heart Disease Test", image: featureImage3, path: "/heartdiseasemodel" },
        { name: "Diabetic Test", image: featureImage4, path: "/diabeticmodel" }
    ];

    const handleFeatureClick = (path) => {
        navigate(path); 
    };

    return (
        <Container id="features" className="healing-features-section">
            <h3 className="features-heading-display">Features</h3>
            <div className="features-list">
                {features.map((feature, index) => (
                    <div 
                        className="feature-item" 
                        key={index}
                        onClick={() => handleFeatureClick(feature.path)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="square-image-container">
                            <img src={feature.image} alt={feature.name} className="feature-image" />
                        </div>
                        <div className="feature-heading">{feature.name}</div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default HealingFeatures;
