import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../styles/heartModel.css';

const HeartModel = () => {
  const [formValues, setFormValues] = useState({
    HighBP: '',
    HighChol: '',
    Smoker: '',
    Stroke: '',
    Diabetes: '',
    PhysActivity: '',
    HvyAlcoholConsump: '',
    DiffWalk: '',
    Age: '',
  });

  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/predict-heartdisease', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error predicting heart disease');
    }
  };

  return (
    <div className="heart-model-wrapper">
      {/* Animation */}
      <div className="heart-animation-section">
        <DotLottieReact
          src="https://lottie.host/1ebe7e97-a05f-47db-a1dc-487b095ee550/6L49PPY8O5.lottie"
          loop
          autoplay
        />
      </div>

      {/* Form */}
      <div className="heart-form-section">
        <h1 className="heart-form-title">Heart Disease Predictor</h1>
        <form onSubmit={handleSubmit} className="heart-form-grid">
          {[
            'HighBP',
            'HighChol',
            'Smoker',
            'Stroke',
            'Diabetes',
            'PhysActivity',
            'HvyAlcoholConsump',
            'DiffWalk',
            'Age'
          ].map((field, index) => (
            <div className="heart-form-field" key={index}>
              <label>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
              <input
                type="number"
                name={field}
                value={formValues[field]}
                onChange={handleInputChange}
                placeholder={`Enter ${field}`}
                required
              />
            </div>
          ))}
          <button type="submit" className="heart-predict-button">Predict</button>
        </form>
        {/* Display Result */}
        {prediction && <div className="heart-result-box"><p>{prediction}</p></div>}
      </div>
    </div>
  );
};

export default HeartModel;
