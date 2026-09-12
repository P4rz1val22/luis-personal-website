import './Hint.css';

// A pinned card inviting visitors to interact. The site is built out of
// objects that respond to clicks, but most of them look like scenery until
// you try one — so this says so outright rather than relying on each object
// to advertise itself. [All sections]
const Hint = () => {
    return (
        <div className='hint'>
            <div className='hint-title'>CLICK AROUND</div>
            <div className='hint-body'>
                Most of this office works. Try the TV dial, the printer, the
                punch cards and the records.
            </div>
        </div>
    );
};

export default Hint;
