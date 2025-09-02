import React from 'react';
import Stroke1 from '../Stroke/Stroke1';

function CheckBox({ checkbox, isChecked, onChange }) {
  const handleChange = () => {
    onChange(checkbox.id, !isChecked);
  };

  return (
    <div className='d-flex mx-1 mt-1'>
      <div className='col-5 me-2'>
        <input 
          className='form-check-input me-1' 
          type='checkbox' 
          checked={isChecked}
          onChange={handleChange}
        />
        <label className='form-check-label'>{checkbox.label}</label>
      </div>
      <div className='col-7 d-flex justify-content-end'>
        <Stroke1 stroke_char1={checkbox} />
      </div>
    </div>
  );
}

export default CheckBox;
