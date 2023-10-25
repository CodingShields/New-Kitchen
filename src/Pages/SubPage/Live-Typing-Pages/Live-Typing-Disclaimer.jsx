
import React, { useState, useEffect } from 'react';

const LiveTypingDisClaimer = ({ fontSize }) => {
  const [displayedText, setDisplayedText] = useState('');
  const defaultMessage = "Welcome, I am your EatAi Chef!\nBefore we get started, please take a moment to review and sign our disclaimer.\n Thanks and see you in the Kitchen!";

  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= defaultMessage.length) {
        setDisplayedText(defaultMessage.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust the delay for typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const renderTextWithNewlines = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        <span>{line}</span>
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div
      className="live-text-container"
      style={{
        display: "flex",
        fontSize: fontSize || '48px',
        fontWeight: 'bold',
        width: "500px",
        height: "450px",
        paddingTop: '50px',
        position: 'relative',
        justifyContent: "start",
        alignContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      {renderTextWithNewlines(displayedText)}
    </div>
  );
};

export default LiveTypingDisClaimer;
