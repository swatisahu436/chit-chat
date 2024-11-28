import React, { useState } from 'react';

const Chatbox = () => {
  const initialMessage = { sender: 'bot', text: 'Hello! How can I assist you today?' };
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
    }
  };

  const handleClearMessages = () => {
    setMessages([initialMessage]);
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">Chat with Us</div>
      <div className="chatbox-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbox-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        <button onClick={handleClearMessages}>Clear</button>
      </div>
    </div>
  );
};

export default Chatbox;
