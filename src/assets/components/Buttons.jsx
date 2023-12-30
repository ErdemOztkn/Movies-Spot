import React from 'react';

function Buttons({ type, text, icon, onClick }) {
    const buttonClass = type === 'outlined' ? 'outlined' : 'filled';

    return (
        <button className={buttonClass} onClick={onClick}>
            {icon} {text && <>&nbsp;{text}</>}
        </button>
    );
}

export default Buttons;
