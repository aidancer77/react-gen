import React from 'react';

function Stroke1({ stroke_char1 }) {
    return (
        <div className="col">
            <svg width="45" height="20">
                <line x1="0" y1="10" x2="45" y2="10" 
                stroke={stroke_char1.stroke_color} 
                strokeWidth={stroke_char1.stroke_width} />
            </svg>
        </div>
    )
}

export default Stroke1;