import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

// Rotation classes for the sticky notes, cycled so the board still looks
// hand-pinned if a role ever carries more than three bullets.
const noteStyles = ['first', 'second', 'third'];

// The board component that contains the description of 
// the work experiences I carried out. [Work section].
const Board = ({ experience }) => {

    const { title, kind, dates, location, bullets } = experience;

    // State to manage the temporary style change
    const [divStyle, setDivStyle] = useState({ opacity: 0, marginTop: '3vw' });

    // Changes the style of the board for .3s when a new experience
    // is clicked.
    useEffect(() => {
        const boardTempStyle = {
            border: 'solid #7697a0 1vw',
            backgroundColor: '#99c2cd',
            opacity: 0,
            marginTop: '3vw',
        };

        setDivStyle(boardTempStyle);

        const timeout = setTimeout(() => {
            setDivStyle({});
        }, 300);

        return () => clearTimeout(timeout);
    }, [experience]);

    // Board component returned
    return (
        <div className='board' style={divStyle}>
            <div className='board-header'>
                <div className='board-role'>
                    {title}
                    <span className='board-kind'>{kind}</span>
                </div>
                <div className='board-meta'>
                    {dates}{location ? ` · ${location}` : ''}
                </div>
            </div>
            <div className='board-notes'>
                {bullets.map((bullet, index) => (
                    <div key={bullet} className={`note ${noteStyles[index % noteStyles.length]}`}>
                        {bullet}
                    </div>
                ))}
            </div>
        </div>
    );
}

Board.propTypes = {
    experience: PropTypes.shape({
        title: PropTypes.string.isRequired,
        kind: PropTypes.string,
        dates: PropTypes.string.isRequired,
        location: PropTypes.string,
        bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default Board;
