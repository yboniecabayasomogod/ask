import './App.css';
import bgImage from './assets/images/background.jpg';
import myLogo from './assets/images/logo.png';
import { useState } from 'react';

function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // New state for password UI
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpening) {
      setIsLocked(true); // Show the custom password card
    }
  };

  const checkPassword = () => {
    // Your password "020700"
    if (passwordInput === "208040") {
      setIsLocked(false);
      setIsOpening(true);
      setTimeout(() => {
        setShowModal(true);
      }, 800);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // Shakes the input if wrong
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setIsOpening(false);
    setPasswordInput('');
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="App-header">
        <img src={myLogo} className="App-logo" alt="logo" />
        <h1 className="App-title">To My Gorgeous Cousin, Steffanie</h1>

      {/* --- ENVELOPE --- */}
<div 
  className={`envelope-container ${isOpening ? 'open' : 'waiting-to-open'}`} 
  onClick={handleEnvelopeClick}
>
  {/* NEW: Background glow that draws the eye to the center */}
  {!isOpening && <div className="eye-catcher-glow"></div>}

  <div className="envelope">
    <div className="flap">
      {!isOpening && <div className="open-badge">OPEN ME</div>}
    </div>
    <div className="front"></div>
    
    {/* The letter now has a 'peek' class to show just the top edge */}
    <div className={`letter-inside ${!isOpening ? 'peek' : ''}`}>
      <p>For Steff...</p>
    </div>
  </div>
  
  {!isOpening && (
    <div className="hint-container animated-hint">
      <span className="finger-pointer">👆</span>
      <p className="hint-text">OPEN IT</p>
    </div>
  )}
</div>

        {/* --- CUSTOM PASSWORD MODAL --- */}
        {isLocked && (
          <div className="modal-overlay">
            <div className="password-card">
              <h3>🔐 Secret Key</h3>
              <p>Para kay Steffanie lang 'to. <br/> Ano ang password?</p>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className={error ? 'error-shake' : ''}
                onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                autoFocus
              />
              <div className="pwd-buttons">
                <button onClick={() => setIsLocked(false)} className="cancel-btn">Cancel</button>
                <button onClick={checkPassword} className="unlock-btn">Unlock</button>
              </div>
            </div>
          </div>
        )}

        {/* --- THE LETTER MODAL --- */}
        {showModal && (
          <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-x" onClick={handleClose}>&times;</button>
              <div className="palanca-paper">
                <h2 className="letter-header">Hi Steff!</h2>
                <div className="letter-body">
                  <p>
                    Habang ginagawa ko ang website na 'to, na-realize ko kung gaano kabilis ang panahon. Parang kailan lang
                    bata pa tayo, pero ngayon, ang layo na ng nararating mo sa studies mo. Sobrang proud ako 
                    sa sipag mo at sa dedication mong matapos ang lahat ng goals mo.
                  </p>
                  
                  <p>
                    Gusto ko lang sabihin na nakakamangha <strong>how beautifully God created you</strong>. 
                    Lagi kang gorgeous at effortless tingnan, pero alam ko na behind that grace, marami kang 
                    pinagdaanang puyat at hirap sa mga projects at exams. Konting tiis na lang, Steff, malapit 
                    ka na sa finish line! Don't ever lose that shine.
                  </p>

                  <p>
                    I know nakaka-overwhelm lalo na kapag sabay-sabay ang deadlines, kaya gusto ko lang 
                    i-share sa'yo ang favorite life verse ko. Ito ang laging nagpapatatag sa akin 
                    sa tuwing nahihirapan ako:
                  </p>

                  <div className="scripture-box">
                    <p>"Jesus said to him, ‘If you can believe, all things are possible to him who believes.’"</p>
                    <span>— Mark 9:23</span>
                  </div>

                  <p>
                    Tandaan mo lang 'yan palagi when you living in the creation of God. Maniwala ka sa kakayahan mo, at higit 
                    sa lahat, maniwala ka sa plano ni Lord para sa'yo. Dahil sa Kaniya, 
                    <strong> all things are possible.</strong>
                  </p>

                  <p>
                    Enjoy-in mo lang itong retreat. Take this time to breathe and relax muna bago bumalik 
                    sa school works. Nandito lang kami palagi para sa'yo.
                  </p>
                  
                  <p className="signature">Always here for you,<br /><strong>Ybonie</strong></p>
                  
                  <div className="response-container">
                    <a 
                      href="https://m.me/ybonie.somogod.94" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="mini-envelope-btn"
                    >
                      <span className="envelope-icon">✉</span>
                      <div className="btn-text">
                        <span>Click if mag thank you,</span>
                        <span>else, OK lang... ❤️</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;