import React from 'react';
import './Checkbox.css';

import Stroke1 from '../Stroke/Stroke1';
import strokeChar1 from '../Stroke/strokeChar1';

function CheckBox1(checkbox_char) {
  return ( 
    <div className='d-flex flex-direction-row '>
      <div className='col-4 w-100'>
        <div className='row'>
          {strokeChar1.map(stroke_char1 => (
            <div key={stroke_char1.id} className='d-flex mx-1 mt-1'>
              <div className='col-5 me-2'>
                <input className='form-check-input me-1' type='checkbox' value='' />
                <label className='form-check-label'>{stroke_char1.checkbox_label}</label>
              </div>
              <div className='col-7 d-flex justify-content-end'>
                <Stroke1 stroke_char1={stroke_char1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CheckBox1;