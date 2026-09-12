import './Hint.css';

// A pinned card inviting visitors to interact. The site is built out of
// objects that respond to clicks, but most of them look like scenery until
// you try one — so this says so outright rather than relying on each object
// to advertise itself. [All sections]
const Hint = () => {
    return (
        <div className='hint'>
            <div className='hint-title'>TIP</div>
            <div className='hint-body'>
                Most of this office works, click around to learn more!
            </div>
        </div>
    );
};

export default Hint;
