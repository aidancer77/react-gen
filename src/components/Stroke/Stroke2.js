import React from 'react';

function Stroke2({stroke_char2}) {
    return (
        <div className="col">
            <svg width="45" height="27">
                {stroke_char2.stroke_color}
                {stroke_char2.stroke_width}
                {stroke_char2.direction}
            </svg>
        </div>
    )
}

export default Stroke2;