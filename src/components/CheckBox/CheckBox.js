import React from 'react';
import Stroke from '../Stroke/Stroke';

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
          id={`checkbox-${checkbox.id}`}
        />
        <label className='form-check-label' htmlFor={`checkbox-${checkbox.id}`}>
          {checkbox.checkbox.title} {/* Исправлено обращение к title */}
        </label>
      </div>
      <div className='col-7 d-flex justify-content-end'>
        <Stroke stroke_char1={checkbox.checkbox} /> {/* Исправлено обращение к checkbox */}
      </div>
    </div>
  );
}

export default CheckBox;