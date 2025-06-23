import React, { useState } from 'react';
// import './index.css';

export default function Pop() {
  const [showPopup, setShowPopup] = useState(true);
  const [notEligible, setNotEligible] = useState(false);

  const handleYes = () => {
    setShowPopup(false);
    document.body.style.overflowY="scroll";
  };

  const handleNo = () => {
    setNotEligible(true);
  };

  return (
    <div className="app">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Age Verification</h2>
            <p>Are you 18 years old or above?</p>
            <div className="button-group">
              <button onClick={handleYes} className="yes-btn">Yes</button>
              <button onClick={handleNo} className="no-btn">No</button>
            </div>
            {notEligible && <p className="not-eligible">❌ You are not eligible to enter.</p>}
          </div>
        </div>
      )}

      {/* {!showPopup && !notEligible && (
        <div className="welcome">
          <h1>🎉 Welcome to the Site!</h1>
          <p>Enjoy your visit.</p>
        </div>
      )} */}
    </div>
  );
}