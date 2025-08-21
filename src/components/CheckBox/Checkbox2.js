import React from 'react';
import './Checkbox.css';

import Stroke2 from '../Stroke/Stroke2';
import strokeChar2 from '../Stroke/strokeChar2';

function CheckBox2(checkbox_char) {
  return (
    <div className='d-flex flex-direction-row '>
      <div className='col-4 w-100'>
        <div className='row'>

              {strokeChar2.map(stroke_char2 => (
                <div key={stroke_char2.id} className='form-check d-flex mx-3 mt-1'>
                  <div className='col-5'>
                    <input className='form-check-input' type='checkbox' value='' />
                    <label className='form-check-label'>{stroke_char2.checkbox_label}</label>
                  </div>
                  <div className='col-7 d-flex justify-content-end'>
                    <Stroke2 stroke_char2={stroke_char2} />
                  </div>
                </div>
              ))}

        </div>
      </div>
    </div>
  )
}

export default CheckBox2;