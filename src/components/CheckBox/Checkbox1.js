import React from 'react';
import './Checkbox.css';

import Stroke1 from '../Stroke/Stroke1';
import strokeChar1 from '../Stroke/strokeChar1';

function CheckBox1(checkbox_char) {
  return (
    <div className='d-flex flex-direction-row '>
      <div className="col-4 w-100">
        <div className="row">
          <div className="col">
            <div className=''>
              {strokeChar1.map(stroke_char1 => (
                <div key={stroke_char1.id}>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""/>
                    <label className="form-check-label">{stroke_char1.checkbox_label}</label>
                  </div>
                  <Stroke1 stroke_char1={stroke_char1} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckBox1;