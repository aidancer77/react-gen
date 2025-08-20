import React from 'react';
import './Checkbox.css';

import Stroke3 from '../Stroke/Stroke3';
import strokeChar3 from '../Stroke/strokeChar3';

function CheckBox3(checkbox_char) {
  return (
    <div className='d-flex flex-direction-row '>
      <div className="col-4 w-100">
        <div className="row">
          <div className="col">
            <div className="form-check">
              <input onclick="vol4_1()" className="form-check-input" type="checkbox" value=""
                id="checkVol4_1" />
              <label className="form-check-label" for="checkVol4_1">5.1</label>
            </div>
          </div>
          <div className=''>
            {strokeChar3.map(stroke_char3 => (
              <Stroke3 key={stroke_char3.id} stroke_char3={stroke_char3} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckBox3;