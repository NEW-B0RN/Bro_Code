

import React from 'react';
import './button.css';

function Button() {
    let count = 0;

    const handleClick = (e) => {
        if (count % 2 === 0) {
            e.target.textContent = "Happy Birthday Ghalawat! 🎉";
            count++;
        } else {
            e.target.textContent = "Click me 🥺";
            count++;
        }
    }

    return (
        <button className="button" onClick={(e) => handleClick(e)}>click me 🥺</button>
    );
}

export default Button;
