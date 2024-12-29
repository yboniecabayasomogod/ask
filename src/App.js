import pandaLogo from './panda.png'; // new panda logo
import './App.css';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  // Handle the message sending process
  const handleSendMessage = () => {
    const baseMessengerLink = "https://m.me/ybonie.somogod.94";

    if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad")) {
      window.location.href = baseMessengerLink;
    } else {
      window.open(baseMessengerLink, "_blank");
    }
  };

  // Toggle modal visibility
  const toggleModal = () => setShowModal(prevState => !prevState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={pandaLogo} className="App-logo" alt="panda logo" />
        
        {/* Clickable text replacing the "View Invitation" button */}
        <h1 className="App-title">
          Would You Go Out With Me?
        </h1>
        <h1 className="App-title">
         
        </h1>
        <h1 className="App-title-warning" onClick={toggleModal} style={{ cursor: "pointer" }}>
        Click this to view the invitation 📨
        </h1>

        <button onClick={handleSendMessage} className="App-button" aria-label="Go to messenger to send response">
          Go to messenger for your response.
        </button>

        {/* Conditional Modal */}
        {showModal && (
          <div className="App-modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
            <div className="App-modal-content">
              <button className="App-close" onClick={toggleModal} aria-label="Close the modal">&times;</button>
              <h2 id="modal-title">Invitation</h2>
              <p id="modal-description" className="App-new-year-message">
                Dear Jobi,<br /><br />
                I hope you're doing well. I was thinking it would be nice to spend some time together. Would you like to join me for a movie this evening? After that, we could grab a meal and keep it light and fun.<br /><br />
                Let me know if you're interested and if you'd like to join me.<br /><br />
                Best regards,<br />
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
