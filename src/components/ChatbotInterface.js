import React, { useState } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ChatbotInterface.css';

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([]); // Store the chat messages
  const [input, setInput] = useState(''); // User input state
  const [chatHistory, setChatHistory] = useState([]); // State to hold chat history for display

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = { sender: 'user', text: input };

      // Update messages for the chat conversation
      setMessages((prevMessages) => [
        ...prevMessages,
        newMessage,
        { sender: 'bot', text: `Therapiii is thinking...` }
      ]);

      // Clear the input field
      setInput('');

      // Simulate delay for bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: `Here's a response for "${input}"` }
        ]);
      }, 1000); // Simulate 1 second delay for bot response
    }
  };

  // Function to handle chat completion and save messages
  const handleCompleteChat = () => {
    // Save the messages to the backend (replace with your API call)
    fetch('/api/save-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Chat saved:', data);
        setChatHistory((prevHistory) => [...prevHistory, ...messages]); // Update chat history with current messages
        setMessages([]); // Clear messages from the chat conversation
      })
      .catch((error) => {
        console.error('Error saving chat:', error);
      });
  };

  return (
    <div className="chatbot-container container-fluid">
      <div className="row h-100">
        {/* Left: Chat History Panel */}
        <div className="col-md-2 chat-history p-4">
          <h4>Chat History</h4>
          <div className="history-list">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <span>{msg.sender === 'user' ? 'You: ' : 'Therapiii: '}</span>
                {msg.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chat Interface */}
        <div className="col-md-10 p-0 chat-interface">
          <div className="chat-header">
            <h4 className="chat-heading">Bot - Therapy</h4>
          </div>
          <div className="chat-box p-4">
            {/* Chat conversation */}
            <div className="chat-conversation mb-3">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <span>{msg.sender === 'user' ? 'You: ' : 'Therapiii: '}</span>
                  {msg.text}
                </div>
              ))}
            </div>
            {/* Input box and send button */}
            <div className="input-container">
              <textarea
                className="form-control"
                rows="2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button className="send-btn" onClick={handleSendMessage}>
                <FaPaperPlane />
              </button>
              <button className="mic-btn">
                <FaMicrophone />
              </button>
            </div>
            {/* Complete Chat Button */}
            <button className="btn btn-primary mt-3" onClick={handleCompleteChat}>
              Complete Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
