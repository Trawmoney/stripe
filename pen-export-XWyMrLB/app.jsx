import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  // Function to handle user input and generate a response
  const handleSendMessage = (message) => {
    // Add user message to the list
    setMessages([...messages, { content: message, user: 'user' }]);

    // Send user message to the backend for processing
    // Receive response from backend (ChatGPT) and add it to the list
    const response = 'Response from ChatGPT';
    setMessages([...messages, { content: response, user: 'bot' }]);
  };

  return (
    <div className="app">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSendMessage(event.target.value);
              event.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
