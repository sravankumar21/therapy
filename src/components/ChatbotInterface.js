import React, { useState, useEffect } from 'react';
import '../styles/ChatbotInterface.css'; // Ensure you have the corresponding CSS file
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import video1 from '../videos/video.mp4';

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([]); // Holds chat messages
  const [input, setInput] = useState('');       // Holds current user input
  const [isLoading, setIsLoading] = useState(false); // Loading state for bot response
  const [recognition, setRecognition] = useState(null); // Holds the SpeechRecognition instance

  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Speech Recognition not supported in this browser.');
      return; // Exit if not supported
    }

    const newRecognition = new SpeechRecognition();
    newRecognition.interimResults = false;
    newRecognition.lang = 'en-US';

    newRecognition.onstart = () => {
      console.log('Speech recognition service has started');
    };

    newRecognition.onresult = (event) => {
      if (event.results.length > 0) {
        const spokenInput = event.results[0][0].transcript;
        console.log('Recognized speech:', spokenInput);
        setInput(spokenInput);
        handleSendMessage(spokenInput); // Call handleSendMessage with spoken input
      } else {
        console.log('No speech was recognized.');
      }
    };

    newRecognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    newRecognition.onend = () => {
      console.log('Speech recognition service has stopped');
    };

    setRecognition(newRecognition);
    newRecognition.start(); // Start recognition
  };

  const speakResponse = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // You can set the language here
    if ('speechSynthesis' in window) {
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Text-to-Speech is not supported in this browser.');
    }
  };

  const handleSendMessage = (msgInput) => {
    const inputText = msgInput || input;

    if (inputText.trim() !== '') {
      const userMessage = { sender: 'user', text: inputText };

      // Add user message to the chat history
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Clear the input field
      setInput('');

      // Send the message to the backend
      setIsLoading(true);
      fetch('http://127.0.0.1:5001/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      })
        .then((response) => response.json())
        .then((data) => {
          const botMessage = { sender: 'bot', text: data.response };

          // Add bot response to the chat history
          setMessages((prevMessages) => [...prevMessages, botMessage]);

          // Speak the bot's response
          speakResponse(data.response);

          setIsLoading(false); // Stop loading after response
        })
        .catch((error) => {
          console.error('Error fetching chatbot response:', error);
          setIsLoading(false);
        });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleCompleteChat = () => {
    if (messages.length > 0) {
      fetch('http://127.0.0.1:4000/api/save-chat', {  // Ensure this matches your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Chat saved:', data);
        setMessages([]); // Clear messages from the chat conversation after saving
        alert('Chat saved successfully!'); // Alert only when chat is saved
      })
      .catch((error) => {
        console.error('Error saving chat:', error);
      });
    } else {
      console.log('No messages to save.'); // Log instead of alert
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value); // Update the input value with the text entered by the user
  };

  useEffect(() => {
    return () => {
      // Clean up the recognition when the component unmounts
      if (recognition) {
        recognition.stop();
      }
    };
  }, [recognition]);

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <h2>Chat With Upbeat</h2>
      </div>

      <div className="chat-layout">
        <div className="chat-history">
          <h4>Chat History</h4>
          {/* History functionality can be implemented here */}
        </div>

        <div className="chat-box">
          <div className="video-section">
            <video autoPlay muted>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="chat-conversation">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="message bot">Typing...</div>}
          </div>

          <div className="input-container">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            <button className="send-btn" onClick={() => handleSendMessage()}>
              <FaPaperPlane />
            </button>
            <button className="mic-btn" onClick={startSpeechRecognition}>
              <FaMicrophone />
            </button>
          </div>

          <button className="new-affirmation-button" onClick={handleCompleteChat}>
            Complete Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
