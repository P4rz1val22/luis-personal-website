import './Pegboard.css';
import PropTypes from 'prop-types';
import { skillGroups } from '../../data/skills';

// The pegboard that holds the skills, one labelled cluster of hanging
// tags per group. Tags sway faintly at rest and swing when hovered.
// [Skills section]
const Pegboard = ({ isMobile }) => {
    return (
        <div className={`pegboard ${isMobile ? 'pegboard-mobile' : ''}`}>
            {skillGroups.map((group) => (
                <div className="peg-group" key={group.name}>
                    <div className="peg-label">{group.name}</div>
                    <div className="peg-row">
                        {group.skills.map((skill) => (
                            <div className="peg-tag" key={skill}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

Pegboard.propTypes = {
    isMobile: PropTypes.bool,
};

export default Pegboard;
