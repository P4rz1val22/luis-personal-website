// The Work page.
import Clock from "../components/Clock/Clock.jsx";
import Board from "../components/Board/Board.jsx";
import Intercom from "../components/Intercom/Intercom.jsx";
import { useState, useEffect } from "react";
import { experiences, SLOTS_PER_COLUMN } from "../data/experience";

const Work = () => {

    const isMobile = window.innerWidth <= 768;

    const [cardNo, setCardNo] = useState(0);

    const handleClick = (number) => {
        setCardNo(number);
    };

    // State to manage the temporary style change
    const [divStyle, setDivStyle] = useState({
        fontFamily: 'Futura, sans-serif',
        opacity: 0,
        marginTop: '6vw'
    });

    useEffect(() => {
        setDivStyle({});
    }, []);

    const clickedStyle = {
        fontFamily: 'Futura, sans-serif',
        height: '8vw',
        backgroundColor: '#fd8916',
        color: 'white',
    };

    const defaultStyle = {};

    // Builds one column of the punch-card rack: mostly empty slots, with a
    // card dropped into whichever rows the data claims.
    const renderColumn = (column) => (
        <div className='slot-col'>
            {Array.from({ length: SLOTS_PER_COLUMN }, (_, row) => {
                const index = experiences.findIndex(
                    (experience) => experience.column === column && experience.row === row
                );

                return (
                    <div className='slot' key={row}>
                        {index !== -1 && (
                            <div
                                className='card'
                                style={cardNo === index ? clickedStyle : defaultStyle}
                                onClick={() => handleClick(index)}
                            >
                                {experiences[index].company}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div style={divStyle} className='section'>
            <div className="vert-container">
                <div className="hoz-container heading">
                    <div className='sideLines Blue' />
                    <div className='title'> WORK <br /> EXPERIENCE</div>
                    <div className='sideLines Reverse Blue' />
                </div>
            </div>
            <div className="vert-container">
                <div className='punch-clock-container' >
                    {renderColumn(0)}
                    {!isMobile && <Clock />}
                    {renderColumn(1)}
                </div>
                <Board bullets={experiences[cardNo].bullets} />

                <div className="hoz-container heading">
                    <div className='sideLines Orange' />
                    <div className='title'> CONTACT ME</div>
                    <div className='sideLines Reverse Orange' />
                </div>
                <Intercom />
            </div>
        </div >
    );
}

export default Work;
