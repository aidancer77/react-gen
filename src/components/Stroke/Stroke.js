import React from 'react';

function Stroke({stroke_char}) {
    return (
        <div className="col">
            <svg width="45" height="27">
                {stroke_char.stroke_color}
                {stroke_char.stroke_width}
                {stroke_char.direction}
            </svg>
        </div>
    )
}

export default Stroke;