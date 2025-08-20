import React from 'react';
import './Checkbox.css';

import Stroke2 from '../Stroke/Stroke2';
import strokeChar2 from '../Stroke/strokeChar2';

function CheckBox2(checkbox_char) {
  return (
    <div className='d-flex flex-direction-row '>
      <div className="col-4 w-100">
        <div className="row">
          <div className="col">
            <div className="form-check">
              <input onclick="vol4_1()" className="form-check-input" type="checkbox" value=""
                id="checkVol4_1" />
              <label className="form-check-label" for="checkVol4_1">4.7</label>
            </div>
          </div>
          <div className=''>
            {strokeChar2.map(stroke_char2 => (
              <Stroke2 key={stroke_char2.id} stroke_char2={stroke_char2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckBox2;