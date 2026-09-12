import './Navbar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// A Navbar button that containing the given name and linking to the given path. [All sections]
const NavbarButton = ({ name, path }) => {

    return (
        <Link to={path} className='navbar-button'>
            {name}
        </Link>
    );
}

function Circle({ path }) {
    return (
        <Link to={path} className='circle'>
        </Link>
    );
}


Circle.propTypes = {
    path: PropTypes.string.isRequired,
};

NavbarButton.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

// The Navbar component that links users to the different pages in the site.
const Navbar = () => {

    // returns the Navbar component
    return (
        <div className='navbar'>
            <NavbarButton name={'HOME'} path={'/'} />
            <NavbarButton name={'WORK'} path={'/work'} />
            <Circle path={'/'} />
            <NavbarButton name={'SKILLS'} path={'/skills'} />
            <NavbarButton name={'PROJECTS'} path={'/projects'} />
        </div>
    );
}

export default Navbar;
