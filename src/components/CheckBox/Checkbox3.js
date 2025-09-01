import React from 'react';
import './Checkbox.css';

import Stroke3 from '../Stroke/Stroke3';
import strokeChar3 from '../Stroke/strokeChar3';

function CheckBox3(checkbox_char) {
  return (
    <div className='d-flex flex-direction-row '>
      <div className='col-4 w-100'>
        <div className='row'>
          {strokeChar3.map(stroke_char3 => (
            <div key={stroke_char3.id} className='d-flex mx-1 mt-1'>
              <div className='col-5 me-2'>
                <input className='form-check-input me-1' type='checkbox' value='' />
                <label className='form-check-label'>{stroke_char3.checkbox_label}</label>
              </div>
              <div className='col-7 d-flex justify-content-end'>
                <Stroke3 stroke_char3={stroke_char3} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CheckBox3;