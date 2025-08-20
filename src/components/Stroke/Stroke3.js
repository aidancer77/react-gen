import React from 'react';

function Stroke3({stroke_char3}) {
    return (
        <div className="col">
            <svg width="45" height="27">
                {stroke_char3.stroke_color}
                {stroke_char3.stroke_width}
                {stroke_char3.direction}
            </svg>
        </div>
    )
}

export default Stroke3;