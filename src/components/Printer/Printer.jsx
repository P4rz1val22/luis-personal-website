import './Printer.css';
import { useState, useRef } from 'react';
import { documents } from '../../data/documents';

// The Printer component that enables users to access important documents. i.e. my Resume, Letters of recommendation. [Home section]
const Printer = () => {

    // Reference to button click audio.
    const audioRef = useRef(null);

    // Current index constant
    const [currentIndex, setCurrentIndex] = useState(0);

    // Checks if the mouse is hovering over the button
    const [isHoverEnabled, setIsHoverEnabled] = useState(true);

    // Handles the clicking of the selection (triangular) and
    // printing (circular) buttons
    const handleClick = (amount) => {
        let nextIndex = currentIndex + amount;

        if (nextIndex > documents.length - 1) {
            nextIndex = 0;
        }

        if (nextIndex < 0) {
            nextIndex = documents.length - 1;
        }

        if (audioRef.current) {
            audioRef.current.play();
        }

        setCurrentIndex(nextIndex);
        setIsHoverEnabled(false);

        // For .1s, the button is clicked further down by setting
        // isHoverEnabled to true. This allows for a better clicking
        // experience.
        setTimeout(() => {
            setIsHoverEnabled(true);
        }, 100);
    };

    // Boolean for checking if the audio can play, so that audio 
    // playing cannot be abused (regardless of how amusing it may be).
    const [canPlay, setCanPlay] = useState(true);

    // Handles the hovering over the sheet of paper coming out of the printer.
    const handleMouseEnter = () => {
        if (canPlay) {
            const audio = new Audio('./assets/Sounds/Printer.mov');
            audio.volume = 0.6;
            audio.play();

            // Prevent further playback until the print sound has run its course.
            setCanPlay(false);
            setTimeout(() => {
                setCanPlay(true);
            }, 1000);
        }
    };

    // Returns the Printer component.
    return (
        <div className='printer-container'>
            <div className='printer-buttons'>
                <div className='arrows'>
                    <div className='arrow left-shadow' />
                    <div onClick={() => handleClick(-1)} className={`arrow ${!isHoverEnabled ? 'no-hover' : ''}`} />
                </div>
                <div className='arrows'>
                    <div className='arrow right-shadow opposite ' />
                    <div onClick={() => handleClick(1)} className={`arrow opposite ${!isHoverEnabled ? 'no-hover' : ''}`} />

                </div>
                <a onClick={() => handleClick(0)} href={documents[currentIndex].href} target="_blank" rel="noopener noreferrer" className='print-button' />
                <audio ref={audioRef} src="./assets/Sounds/ClickSound.mov" />
            </div>
            <div className='printerScreen' >
                <div className='typed-text'>
                    {documents[currentIndex].label}
                </div>
            </div>
            <div className='printerOutput' />
            <a onMouseEnter={handleMouseEnter} className='printer-paper' target="_blank" rel="noopener noreferrer" href={documents[currentIndex].href} />

        </div>
    );
}

export default Printer;