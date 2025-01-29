from flask import Flask, request, jsonify
from flask_cors import CORS  # Enable CORS for cross-origin requests
import joblib  # For loading the trained models
import numpy as np
import test  # Import your chatbot logic from test.py

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the trained diabetes model
diabetes_model = joblib.load('diabetes_model.h5')  # Ensure this path matches the model file

# Load the trained heart disease model (Random Forest)
try:
    heart_disease_model = joblib.load('heart_disease_rf_model.h5')  # Use joblib for Random Forest model
    print("Heart disease model loaded successfully!")
except Exception as e:
    print(f"Error loading heart disease model: {e}")
    raise

# Route for chatbot functionality
@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    message = data['message']
    response = test.chatbot_response(message)  # Use the function from test.py
    return jsonify({"response": response})

# Route for diabetes prediction
@app.route('/predict-diabetes', methods=['POST'])
def predict_diabetes():
    data = request.get_json()
    try:
        # Extract features from the request data
        features = [
            float(data['glucose']),
            float(data['bloodPressure']),
            float(data['skinThickness']),
            float(data['insulin']),
            float(data['bmi']),
            float(data['age']),
        ]
        # Make prediction using the loaded model
        prediction = diabetes_model.predict([features])[0]
        result = 'Diabetic' if prediction == 1 else 'Non-Diabetic'
        return jsonify({"prediction": result})
    except KeyError as e:
        return jsonify({"error": f"Missing key in request data: {e}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route for heart disease prediction
@app.route('/predict-heartdisease', methods=['POST'])
def predict_heart_disease():
    data = request.get_json()
    try:
        # Extract features from the request data
        features = np.array([[
            float(data['HighBP']),
            float(data['HighChol']),
            float(data['Smoker']),
            float(data['Stroke']),
            float(data['Diabetes']),
            float(data['PhysActivity']),
            float(data['HvyAlcoholConsump']),
            float(data['DiffWalk']),
            float(data['Age']),
        ]])
        
        # Make prediction using the loaded Random Forest model
        prediction = heart_disease_model.predict(features)[0]
        result = 'Unsafe - Attack Likely' if prediction == 1 else 'Safe - Attack Unlikely'
        return jsonify({"prediction": result})
    except KeyError as e:
        return jsonify({"error": f"Missing key in request data: {e}"}), 400
    except Exception as e:
        # Log the error
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500

# Run the Flask app on port 5001
if __name__ == "__main__":
    app.run(port=5001, debug=True)
