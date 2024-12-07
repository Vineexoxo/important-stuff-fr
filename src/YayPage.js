import React from 'react';
import Confetti from 'react-dom-confetti';
import clapGif from './clap.gif';  // Import the new clap.gif
import coolImage from './cool.jpeg'; // Import the cool.jpg image

const CelebrationPage = () => {
  const confettiConfig = {
    angle: 90,
    spread: 180,
    startVelocity: 25,
    elementCount: 50,
    dragFriction: 0.1,
    duration: 3000,
    delay: 0,
  };

  // Function to handle the button click and redirect to Instagram
  const handleButtonClick = () => {
    window.location.href = "https://www.instagram.com/vineepinee/"; // Redirect to Instagram
  };

  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, rgba(255, 182, 193, 1), rgba(255, 228, 240, 1))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: "'Montserrat', sans-serif",
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Confetti Animation */}
      <Confetti active={true} config={confettiConfig} />

      <h1
        style={{
          color: '#fff',
          fontSize: '3rem',
          textAlign: 'center',
          zIndex: 10,
          animation: 'fadeIn 2s ease-out',
        }}
      >
        I toh knew you would want to ofc, when?
      </h1>

      <p
        style={{
          color: '#fff',
          fontSize: '1.5rem',
          textAlign: 'center',
          zIndex: 10,
          animation: 'fadeIn 2s ease-out 1s',
        }}
      >
        get well soon chaarbimaari then we will go out. Are you cured🎉
      </p>

      {/* Button with onClick handler for redirection */}
      <button
        onClick={handleButtonClick} // Redirects to Instagram
        style={{
          marginTop: '30px',
          padding: '15px 30px',
          fontSize: '1.5rem',
          backgroundColor: '#FFB6A1',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          zIndex: 10,
        }}
      >
        Let's Go!!
      </button>

      {/* Replace the previous image with clap.gif */}
      <img
        src={clapGif} // Using the new clap.gif
        alt="Clap"
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '300px', // Adjust the size as needed
          zIndex: 5,
        }}
      />

      {/* Add cool.jpg image at the top-left corner */}
      <img
        src={coolImage} // Using the cool.jpg image
        alt="Cool"
        style={{
          position: 'absolute',
          top: '100px', // Position it near the top-left corner
          left: '10px', // Position it near the left side
          width: '15%', // Adjust the size as needed
          zIndex: 5,
        }}
      />

      <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CelebrationPage;
