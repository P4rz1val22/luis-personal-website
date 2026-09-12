import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

// The board component that contains the description of 
// the work experiences I carried out. [Work section].
const Board = ({ number }) => {

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
    }, [number]);

    // Text descriptions of the work experiences.
    const texts = [
        ["Pushed forward an Information Education and Communication campaign on HIV awareness for the Latin-American region in a human rights awareness campaign.", "Created infographics and reports and carried out translations (English-Spanish) for projects addressing the prevention of (and response to) HIV and the protection of the human rights of those living with HIV/AIDS.", "Reviewed the quality of materials related to the ongoing efforts against the discrimination of people living with HIV/AIDS."],
        ["Conducted Quality Assurance testing for applications related to sales and business management used by large enterprises internationally.", "Worked with the project management team to find errors that could lead to future problems with the platform.", "Ensured the standardization of quality across all applications in the digital ecosystem . "],
        ["Designed and implemented an effective user interface for a student-led start-up social media application.", "Engineered solutions and discussed features through rigorous planning meetings with management.", "Collaborated with other members of the development team in both front-end and back-end."],
    ];

    // Board component returned
    return (
        <div className='board' style={divStyle}>
            <div className='note first' >{texts[number][0]}</div>
            <div className='note second'>{texts[number][1]}</div>
            <div className='note third' >{texts[number][2]}</div>
        </div>
    );
}

Board.propTypes = {
    number: PropTypes.number.isRequired,
};

export default Board;
