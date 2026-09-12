import Intercom from "../components/Intercom/Intercom";
import { useState, useEffect } from 'react'
import { skills } from '../data/skills';

// The Skills Page
const Skills = () => {

    const isMobile = window.innerWidth <= 768;

    // State to manage the temporary style change
    const [divStyle, setDivStyle] = useState({
        fontFamily: 'Futura, sans-serif',
        opacity: 0,
        marginTop: '6vw'
    });

    useEffect(() => {
        setDivStyle({});
    }, []);

    return (
        <div className="vert-container">
            <div style={divStyle} className="section">
                <div className="vert-container">
                    <div className="hoz-container heading">
                        <div className='sideLines Blue' />
                        <div className='title'> SKILLS </div>
                        <div className='sideLines Reverse Blue' />
                    </div>
                </div>
                <div className={`skill-section ${isMobile ? 'skill-section-mobile' : ''}`}>
                    {skills.map((skill) => (
                        <div key={skill} className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>
                            {skill}
                        </div>
                    ))}
                </div>
                <div className="hoz-container heading">
                    <div className='sideLines Orange' />
                    <div className='title'> CONTACT ME</div>
                    <div className='sideLines Reverse Orange' />
                </div>
                <Intercom />
            </div>
        </div>
    );
}

export default Skills;
