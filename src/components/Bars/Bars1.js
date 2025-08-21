import React from 'react';

function Bars1({ bars_char1 }) {
    return (
        <div>
                {bars_char1.title} 
                {bars_char1.scale}
                {bars_char1.power}
        </div>
    )
}

export default Bars1;