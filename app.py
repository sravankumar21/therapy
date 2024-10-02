from flask import Flask, request, jsonify
from flask_cors import CORS  # Enable CORS for cross-origin requests
import test  # Import your chatbot logic from test.py

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

# Route to receive message from frontend and return chatbot response
@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    message = data['message']
    response = test.chatbot_response(message)  # Use the function from test.py
    return jsonify({"response": response})

# Run the Flask app on port 5001
if __name__ == "__main__":
    app.run(port=5001, debug=True)
