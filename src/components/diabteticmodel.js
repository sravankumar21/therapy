import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../styles/diabeticModel.css'; // Create and use a CSS file for custom styling

const DiabeticModel = () => {
  const [formValues, setFormValues] = useState({
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    age: '',
  });

  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/predict-diabetes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error predicting diabetes');
    }
  };

  return (
    <div className="diabetic-model-container">
      {/* Animation */}
      <div className="animation-container">
        <DotLottieReact
          src="https://lottie.host/36478751-b27b-4977-b7a9-80790c8b9345/TG0RH3PNJq.lottie"
          loop
          autoplay
        />
      </div>

      {/* Form */}
      <div className="form-container">
        <h1 className="form-heading">Diabetes Predictor</h1>
        <form onSubmit={handleSubmit}>
          {['glucose', 'bloodPressure', 'skinThickness', 'insulin', 'bmi', 'age'].map((field, index) => (
            <div className="form-field" key={index}>
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
          <button type="submit" className="predict-button">Predict</button>
        </form>
        {/* Display Result */}
        {prediction && <div className="result"><p>{prediction}</p></div>}
      </div>
    </div>
  );
};

export default DiabeticModel;
