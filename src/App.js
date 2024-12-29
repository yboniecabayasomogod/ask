import pandaLogo from './panda.jpeg'; // new panda logo
import './App.css';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState(""); // To store user input
  const [showModal, setShowModal] = useState(false);

  const handleSendMessage = () => {
    if (response.trim() === "") {
      alert("Please type a message.");
      return;
    }

    const message = `Response: ${response}`;

    const encodedMessage = encodeURIComponent(message);
    const baseMessengerLink = `https://m.me/ybonie.somogod.94`;
    const messengerLink = `${baseMessengerLink}?text=${encodedMessage}`;

    if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad")) {
      window.location.href = messengerLink;
    } else {
      window.open(messengerLink, "_blank");
    }
  };

  const toggleModal = () => setShowModal(!showModal);

  // Automatically resize the textarea based on input
  const handleTextChange = (e) => {
    setResponse(e.target.value);
    e.target.style.height = "auto"; // Reset height to auto before resizing
    e.target.style.height = `${e.target.scrollHeight}px`; // Set height to match content
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={pandaLogo} className="App-logo" alt="panda logo" />

        {/* Clickable text replacing the "View Invitation" button */}
        <h1 className="App-title" onClick={toggleModal} style={{ cursor: "pointer" }}>
          Would You Go Out With Me?, Click the letter logo to view the invitation 💌
        </h1>
        
        <p className="App-description">
          Please type your response below, and directly go to your Messenger and click to send button in you messenger. 😊
        </p>

        <div className="App-input-container">
          <textarea
            value={response}
            onChange={handleTextChange}
            placeholder="Type your response here..."
            className="App-textbox"
            aria-label="Type your response"
            rows="1" // Initial height of the textarea
          />
        </div>

        <button onClick={handleSendMessage} className="App-button" aria-label="Go to messenger to send response">
          Go to messenger to send response
        </button>

        {showModal && (
          <div className="App-modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
            <div className="App-modal-content">
              <button className="App-close" onClick={toggleModal} aria-label="Close the modal">&times;</button>
              <h2 id="modal-title">Invitation</h2>
              <p id="modal-description" className="App-new-year-message">
                Dear Jobi,<br /><br />
                I trust this message finds you well. I was thinking it would be a pleasant idea to spend a few relaxed hours together. Would you be interested in joining me for a movie this evening? Afterward, we could enjoy a meal together, keeping the evening light and enjoyable. The entire plan would last around 3 to 4 hours, just enough for a fun hangout.<br /><br />
                Please let me know if this idea resonates with you, and if you would like to join me.<br /><br />
                Kind regards,<br />
                Ybonie Somogod
              </p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
