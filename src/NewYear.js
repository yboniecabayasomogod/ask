import './NewYear.css';
import { useState, useEffect } from 'react';

function NewYearApp() {
  const [status, setStatus] = useState(0);

  // Add fireworks dynamically
  useEffect(() => {
    const fireworkContainer = document.querySelector('.fireworks-container');

    const createFireworks = () => {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      firework.style.top = `${Math.random() * 100}vh`; // Random vertical position
      fireworkContainer.appendChild(firework);
    };

    // Create fireworks every 2 seconds
    const intervalId = setInterval(createFireworks, 2000);

    return () => clearInterval(intervalId); // Cleanup fireworks when the component is unmounted
  }, []);

  return (
    <div className="NewYearApp">
      <div className="fireworks-container"></div> {/* Fireworks container */}
      <header className="NewYearApp-header">
        <h1 className="NewYearApp-title">
          🎉 Happy New Year! 🎉
        </h1>
        <h1 className="NewYearApp-title">
          From Somogod family to yours! 🎉
        </h1>
        <p className="NewYearApp-message">
          May the new year bring you joy, prosperity, and unforgettable moments!
        </p>
        <div className="rope-number">
          <span className="rope-digit">2</span>
          <span className="rope-digit">0</span>
          <span className="rope-digit">2</span>
          <span className="rope-digit">5</span>
        </div>
      </header>
    </div>
  );
}

export default NewYearApp;
