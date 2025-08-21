import React from 'react';

function Stroke2({ stroke_char2 }) {
    return (
        <div className="col">
            <svg width="45" height="20">
                <line x1="0" y1="10" x2="45" y2="10" 
                stroke={stroke_char2.stroke_color} 
                stroke-width={stroke_char2.stroke_width} />
            </svg>
        </div>
    )
}

export default Stroke2;