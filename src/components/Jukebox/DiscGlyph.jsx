import PropTypes from 'prop-types';

// Marks for the record labels. Hard-edged geometric line art on a 28x28
// grid — square caps, mitred joins, no rounded corners — stroked
// rather than filled so they sit with Futura instead of fighting it, and
// drawn in currentColor so the label decides the ink.
//
// To add one: draw it here, then reference the key from a project's `glyph`
// field in data/projects.js. A project with no glyph falls back to a
// monogram, so a new project is never blocked on artwork existing.
const GLYPHS = {
    house: (
        <>
            <path d="M4 13 L14 5 L24 13" />
            <path d="M7 12 V23 H21 V12" />
        </>
    ),
    window: (
        <>
            <rect x="4" y="6" width="20" height="17" />
            <line x1="4" y1="11" x2="24" y2="11" />
            <circle className="solid" cx="7.5" cy="8.5" r="1" />
        </>
    ),
    chat: (
        <path d="M4 6 H24 V19 H12 L7 23 V19 H4 Z" />
    ),
    chart: (
        <>
            <line x1="4" y1="24" x2="24" y2="24" />
            <rect x="6" y="14" width="4" height="10" />
            <rect x="12" y="9" width="4" height="15" />
            <rect x="18" y="17" width="4" height="7" />
        </>
    ),
    pad: (
        <>
            <rect x="3" y="9" width="22" height="12" />
            <line x1="8" y1="12" x2="8" y2="18" />
            <line x1="5" y1="15" x2="11" y2="15" />
            <circle className="solid" cx="19" cy="13.5" r="1.5" />
            <circle className="solid" cx="22" cy="17" r="1.5" />
        </>
    ),
    layers: (
        <>
            <path d="M14 4 L25 9.5 L14 15 L3 9.5 Z" />
            <polyline points="3,14.5 14,20 25,14.5" />
            <polyline points="3,19.5 14,25 25,19.5" />
        </>
    ),
};

// The mark on a record label: the project's glyph, or its initial if the
// project has no glyph assigned.
const DiscGlyph = ({ glyph, name }) => {
    const art = GLYPHS[glyph];

    if (!art) {
        return <span className='disc-mono'>{name.trim().charAt(0).toUpperCase()}</span>;
    }

    return (
        <svg className='disc-glyph' viewBox='0 0 28 28' aria-hidden='true'>
            {art}
        </svg>
    );
};

DiscGlyph.propTypes = {
    glyph: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default DiscGlyph;
