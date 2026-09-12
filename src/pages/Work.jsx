// The Work page.
import Clock from "../components/Clock/Clock.jsx";
import Board from "../components/Board/Board.jsx";
import Intercom from "../components/Intercom/Intercom.jsx";
import { useState, useEffect } from "react";

const Work = () => {

    const isMobile = window.innerWidth <= 768;

    const [cardNo, setCardNo] = useState(0);

    const handleClick = (number) => {
        setCardNo(number);
        console.log(cardNo);
    };

    // State to manage the temporary style change
    const [divStyle, setDivStyle] = useState({
        fontFamily: 'Futura, sans-serif',
        opacity: 0,
        marginTop: '6vw'
    });

    useEffect(() => {
        const regDivStyle = {}
        setDivStyle({ regDivStyle });
    }, []);

    const clickedStyle = {
        fontFamily: 'Futura, sans-serif',
        height: '8vw',
        backgroundColor: '#fd8916',
        color: 'white',
    };

    const defaultStyle = {};

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
                    <div className='slot-col'>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot'>
                            <div className='card' style={cardNo === 0 ? clickedStyle : defaultStyle} onClick={() => handleClick(0)}>
                                UNAIDS
                            </div>
                        </div>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot' />
                    </div>
                    {!isMobile && <Clock />}
                    <div className='slot-col'>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot'>
                            <div className='card' style={cardNo === 1 ? clickedStyle : defaultStyle} onClick={() => handleClick(1)}>
                                Silice
                            </div>
                        </div>
                        <div className='slot' />
                        <div className='slot' />
                        <div className='slot'>
                            <div className='card' style={cardNo === 2 ? clickedStyle : defaultStyle} onClick={() => handleClick(2)}>
                                Biskit Media
                            </div>
                        </div>
                        <div className='slot' />
                    </div>
                </div>
                <Board number={cardNo} />

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