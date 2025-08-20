import React from 'react';

function Stroke1({ stroke_char1 }) {
    return (
        <div className="col">
            {/* <svg width="45" height="27">
                {stroke_char1.stroke_color}
                {stroke_char1.stroke_width}
                {stroke_char1.direction}
            </svg> */}
            <svg width="400" height="20" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="10" x2="400" y2="10" 
                stroke="orange" stroke-width="8" />
            </svg>
        </div>
    )
}

export default Stroke1;