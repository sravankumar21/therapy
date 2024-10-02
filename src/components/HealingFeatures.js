import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { Container } from 'react-bootstrap';
import '../styles/HealingFeatures.css';
import featureImage1 from '../images/baseline.webp';
import featureImage2 from '../images/baseline.webp';
import featureImage3 from '../images/baseline.webp';
import featureImage4 from '../images/baseline.webp';

const HealingFeatures = () => {
    const navigate = useNavigate(); // For navigation using react-router

    const features = [
        { name: "Companion", image: featureImage1, path: "/companion" },
        { name: "Games", image: featureImage2, path: "/games" },
        { name: "Affirmation", image: featureImage3, path: "/affirmation" },
        { name: "Therapist Guidance", image: featureImage4, path: "/therapist-guidance" } 
    ];

    const handleFeatureClick = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <Container id="features" className="healing-features-section">
            <h3 className="features-heading-display">Healing Features</h3>
            <div className="features-list">
                {features.map((feature, index) => (
                    <div 
                        className="feature-item" 
                        key={index}
                        onClick={() => handleFeatureClick(feature.path)} // Add click handler
                        style={{ cursor: 'pointer' }} // Change the cursor to pointer for a clickable effect
                    >
                        <div className="square-image-container">
                            <img src={feature.image} alt={feature.name} className="feature-image" />
                            <div className="feature-heading">{feature.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default HealingFeatures;
