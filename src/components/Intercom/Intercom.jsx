import './Intercom.css';
import { useState, useRef } from 'react';

// The Intercom component, pointing users towards different ways 
// they can reach me. (LinkeIn, a custom Form, GitHub, Email) [Home section]
const Intercom = () => {

    // The current index of method of contact.
    const [currentIndex, setCurrentIndex] = useState(0);

    // Audio references for wheel spin and button click
    const audioRef = useRef(null);
    const audioRef2 = useRef(null);

    // Links to contact pages.
    const links = [
        'https://forms.office.com/r/bgL0gvf9Yt',
        'https://github.com/P4rz1val22',
        'mailto:luis.sar.cor@gmail.com',
        'https://www.linkedin.com/in/luis22/'
    ];

    // The rotation of the wheel.
    const [rotation, setRotation] = useState(0);

    // function that handles the indexing of the contact method and audio playing.
    const handleClick = (amount) => {
        let nextIndex = currentIndex + amount;

        if (nextIndex > links.length - 1) {
            nextIndex = 0;
        }

        if (nextIndex < 0) {
            nextIndex = links.length - 1;
        }

        if (amount == 0) {
            if (audioRef.current) {
                audioRef.current.play();
            }
        }
        else if (audioRef2.current) {
            audioRef2.current.play();
        }

        if (amount != 0) {
            setRotation((prevRotation) => prevRotation + 90);
        }

        setCurrentIndex(nextIndex);
    };

    // Returns the Intercom component.
    return (
        <div className='intercom'>
            <div className='intercom-box'>
                <div className='intercom-speaker'>
                    <div style={{ height: '20vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '27vw' }} className='intercom-grate' />
                    <div style={{ height: '27vw' }} className='intercom-grate' />
                    <div style={{ height: '27vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '25vw' }} className='intercom-grate' />
                    <div style={{ height: '20vw' }} className='intercom-grate' />
                </div>
                <a onClick={() => handleClick(0)} href={links[currentIndex]} target="_blank" rel="noopener noreferrer" className='intercom-button' />
                <audio ref={audioRef} src="./assets/Sounds/ClickSound.mov" />
            </div>
            <div className='wheel-wrapper'>
                <div className='intercom-wheel' onClick={() => handleClick(1)} style={{ transform: `rotate(${rotation}deg)` }} >
                    <img className='wheel-icon top-icon' src='./assets/Images/GitHub-Logo.png' />
                    <img className='wheel-icon bottom-icon' src='./assets/Images/LinkedIn-Logo.png' />
                    <img className='wheel-icon left-icon' src='./assets/Images/Mail-Icon.png' />
                    <img className='wheel-icon right-icon' src='./assets/Images/Form-Icon.png' />
                </div>
                <audio ref={audioRef2} src="./assets/Sounds/WheelSound.mov" />
            </div>
            <div className='click-me-note'>Click!</div>
        </div>
    );
}

export default Intercom;