import { useEffect, useState } from 'react';
import './Clock.css';

// The clock component that shows the time. [Work section].
const Clock = () => {

    // Time constant created when the screen is created.
    const [time, setTime] = useState(new Date());

    // Moves time forward by 1 second.
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Constants defining the number of degrees to be turned for each hand.
    const secondDegrees = ((time.getSeconds() / 60) * 360) + 90;
    const minuteDegrees = ((time.getMinutes() / 60) * 360) + ((time.getSeconds() / 60) * 6) + 90;
    const hourDegrees = ((time.getHours() / 12) * 360) + ((time.getMinutes() / 60) * 30) + 90;

    // returns the Clock element
    return (
        <div className='punch-clock'>
            <div
                className="hand hour-hand"
                style={{ transform: `rotate(${hourDegrees}deg)` }}
            ></div>
            <div
                className="hand minute-hand"
                style={{ transform: `rotate(${minuteDegrees}deg)` }}
            ></div>
            <div
                className="hand second-hand"
                style={{ transform: `rotate(${secondDegrees}deg)` }}
            ></div>
            <div className='dot' />
        </div>
    );
}

export default Clock;
