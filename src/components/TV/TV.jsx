import "./TV.css";
import React, { useState } from "react";

// The TV component for displaying the main page name. [Home Section]
const Tv = () => {
  // The available colors for the screen
  const gradients = [
    "repeating-linear-gradient(-48deg, #40456B, #40456B 10px, #393d5d 10px, #393d5d 20px)",
    "repeating-linear-gradient(-48deg, #FF5733, #FF5733 10px, #C70039 10px, #C70039 20px)",
    "repeating-linear-gradient(-48deg, #28B463, #28B463 10px, #1D8348 10px, #1D8348 20px)",
    "repeating-linear-gradient(-48deg, #1F618D, #1F618D 10px, #154360 10px, #154360 20px)",
    "repeating-linear-gradient(-48deg, #8E44AD, #8E44AD 10px, #5B2C6F 10px, #5B2C6F 20px)",
  ];

  // integer background index to check which background is currently in use.
  const [bgIndex, setBgIndex] = useState(0);

  // Boolean for checking if the background is transitioning.
  // A.K.A. doing the TV static animation.
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Boolean for checking if the button is being hovered over.
  const [isHoverEnabled, setIsHoverEnabled] = useState(true);

  // Boolean for checking if the sound can play.
  const [canPlay, setCanPlay] = useState(true);

  // Function for changing the background or "gradient"
  // referring to the background "lined" style being used.
  const changeGradient = () => {
    setIsHoverEnabled(false);
    setTimeout(() => {
      setIsHoverEnabled(true);
    }, 100);

    if (canPlay) {
      const audio = new Audio("./assets/Sounds/StaticSound.mov");
      const audio2 = new Audio("./assets/Sounds/ClickSound.mov");
      audio.volume = 0.6;
      audio2.volume = 0.6;
      audio.play();
      audio2.play();

      // Prevent further playback
      setCanPlay(false);
      // Allow playback after 1 second (1000ms)
      setTimeout(() => {
        setCanPlay(true);
      }, 500);
    }
    setIsTransitioning(true);
    setTimeout(() => {
      const nextIndex = (bgIndex + 1) % gradients.length;
      setBgIndex(nextIndex);
      setIsTransitioning(false);
    }, 500);
  };

  // Returns the TV component
  return (
    <div>
      <div className="tv">
        <div
          className={`screen ${isTransitioning ? "static" : ""}`}
          style={{ background: gradients[bgIndex] }}
        >
          LUIS&nbsp; <br /> SARMIENTO!
        </div>
        <div className="hoz-container">
          <div className="lines" />
          <div
            onClick={changeGradient}
            className={`screenButton ${!isHoverEnabled ? "screenNoHover" : ""}`}
          />
          <div className="lines Reverse" />
        </div>
      </div>
    </div>
  );
};

export default Tv;
