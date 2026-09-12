import { useState, useEffect } from 'react';
import './Jukebox.css'
import Intercom from '../Intercom/Intercom';
import { projects } from '../../data/projects';

const Jukebox = () => {

    const isMobile = window.innerWidth <= 768;

    const [divStyle, setStyle] = useState({});
    const [divClicked, setClicked] = useState(false);
    const defaultStyle = {
    };

    // Current index constant
    const [currentIndex, setCurrentIndex] = useState(1);

    const currentProject = projects[currentIndex];

    // Clicking the album that is already centered slides the disc out of
    // the sleeve and spins it (or puts it back, if it is already out).
    const handleClick = (number) => {

        if (currentIndex == number) {
            const clickedStyle = {
                marginTop: '36vw',
                opacity: 1
            };
            if (!divClicked) {
                const sideStyle = {
                    animation: 'rotation 2s infinite linear',
                    marginTop: '36vw',
                    marginLeft: '-60vw',
                    opacity: 1
                }
                setTimeout(() => {
                    setStyle(sideStyle);
                }, 1000);
                setStyle(clickedStyle);
            }
            else {
                setTimeout(() => {
                    setStyle(defaultStyle);
                }, 1000);
                setStyle(clickedStyle);

            }
            setClicked(!divClicked)
        }
        setCurrentIndex(number);
    }

    // Handles the clicking of the selection (triangular) and
    // printing (circular) buttons
    const handleArrowClick = (amount) => {
        let nextIndex = currentIndex + amount;

        if (nextIndex > projects.length - 1) {
            nextIndex = 0;
        }

        if (nextIndex < 0) {
            nextIndex = projects.length - 1;
        }

        setCurrentIndex(nextIndex);
    };

    // State to manage the temporary style change
    const [transitionStyle, setDivStyle] = useState({
        fontFamily: 'Futura, sans-serif',
        opacity: 0,
        marginTop: '6vw'
    });

    useEffect(() => {
        setDivStyle({});
    }, []);

    return (
        <div>
            <div className='project-selector'>
                <div style={transitionStyle} className='section'>
                    <div className="hoz-container heading">
                        <div className='sideLines Blue' />
                        <div className='title White'> PERSONAL <br /> PROJECTS</div>
                        <div className='sideLines Reverse Blue' />
                    </div>
                    <div className='album-selector'>
                        <div className='swipe backwards' onClick={() => handleArrowClick(-1)} />
                        <div className='carousel'>
                            {projects.map((project, index) => (
                                <div
                                    key={project.name}
                                    onClick={() => handleClick(index)}
                                    className={`album ${(currentIndex == index) ? 'center' : ''}`}
                                >
                                    {project.name}
                                </div>
                            ))}
                        </div>
                        <div className='swipe forwards' onClick={() => handleArrowClick(1)} />
                    </div>
                    <div className='disc-container'>
                        <div className='disc' onClick={() => handleClick(currentIndex)} style={divStyle} data-content={!isMobile ? currentProject.name : ''}></div>
                    </div>
                </div>

            </div>
            <div className='hoz-container black'>
                <div className='disc-holder' />
                <div className={`project-text ${!divClicked ? 'transparent' : ''}`}>
                    <h2 > {currentProject.name}</h2>
                    {currentProject.description}
                    {currentProject.repo && (
                        <a href={currentProject.repo} target="_blank" rel="noopener noreferrer">Repo</a>
                    )}
                </div>
            </div>
            <div className='project-selector'><div className="hoz-container heading">
                <div className='sideLines Orange' />
                <div className='title White'> CONTACT ME</div>
                <div className='sideLines Reverse Orange' />
            </div><Intercom /></div>


        </div >
    );
}

export default Jukebox;
