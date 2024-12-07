import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import boldiBandImage from "./boltiband.jpeg";
import rosiebabyImage from "./rosiebaby.jpg"; // Import the rosiebaby image
import cryImage from "./cry.jpg"; // Import the cry image

const AskOutPage = () => {
  const [yesSize, setYesSize] = useState(1); 
  const [noPosition, setNoPosition] = useState({ x: 70, y: 70 });
  const [noClickCount, setNoClickCount] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [showCryImage, setShowCryImage] = useState(false);
  const [cryAnimation, setCryAnimation] = useState(false);
  const [shakeBoldiBand, setShakeBoldiBand] = useState(false);

  const navigate = useNavigate(); // Set up navigation

  const handleYesClick = () => {
    navigate("/yay"); // Navigate to the "yay" page when Yes is clicked
  };

  const handleNoClick = () => {
    setYesSize(yesSize + 0.1);
    setNoPosition({
      x: Math.random() * 60 + 20,
      y: Math.random() * 60 + 20,
    });
    setNoClickCount(noClickCount + 1);

    if (noClickCount + 1 >= 4) {
      setShowImage(true);
    }

    if (noClickCount + 1 >= 3) {
      setShowCryImage(true);
    }

    if (noClickCount + 1 >= 6) {
      setCryAnimation(true); // Trigger the cry animation after 6 clicks
    }
    if(noClickCount +1>=10){
      setShakeBoldiBand(true); // Trigger the shake animation for BoldiBand
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, rgba(255, 182, 193, 1), rgba(255, 228, 240, 1))',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          color: '#fff',
          fontSize: '3rem',
          textAlign: 'center',
          paddingTop: '20vh',
          zIndex: 3,
        }}
      >
        Would you go on a date with me?
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-in-out',
          fontSize: `${yesSize}rem`,
          zIndex: 4,
        }}
      >
        <button
          onClick={handleYesClick} // Trigger navigation on Yes click
          style={{
            backgroundColor: '#FFB6A1',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1.2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Yes
        </button>
      </div>

      <div
        style={{
          position: 'absolute',
          left: `${noPosition.x}%`,
          top: `${noPosition.y}%`,
          transform: 'translate(-50%, -50%)',
          fontSize: '1.2rem',
          transition: 'all 0.5s ease-in-out',
          zIndex: 4,
        }}
      >
        <button
          onClick={handleNoClick}
          style={{
            backgroundColor: '#FFB6A1',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1.2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          No
        </button>
      </div>

      {/* Rosie Baby Image - Positioned below the "Yes" button */}
      <div
        style={{
          position: 'absolute',
          top: '40%', // Adjusted to position it just below the Yes button
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <img
          src={rosiebabyImage}
          alt="Rosie Baby"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </div>

      {showImage && (
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '40%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            animation: shakeBoldiBand ? 'shake 0.5s ease-in-out infinite' : 'none',
          }}
        >
          <img
            src={boldiBandImage}
            alt="BoldiBand"
            style={{
              maxWidth: '40%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </div>
      )}

      {showCryImage && (
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            animation: cryAnimation
              ? 'rotateAndMove 3s ease-in-out infinite'
              : 'none', // Trigger animation after 6 clicks
          }}
        >
          <img
            src={cryImage}
            alt="Cry"
            style={{
              maxWidth: '30%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </div>
      )}

      <style>
        {`
          @keyframes rotateAndMove {
            0% {
              transform: translateX(-50%) rotate(0deg) translateY(0);
            }
            50% {
              transform: translateX(-50%) rotate(180deg) translateY(20px);
            }
            100% {
              transform: translateX(-50%) rotate(360deg) translateY(0);
            }
          }

          @keyframes shake {
            0% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-10px);
            }
            50% {
              transform: translateX(10px);
            }
            75% {
              transform: translateX(-10px);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AskOutPage;
