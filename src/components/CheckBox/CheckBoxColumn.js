import React from 'react';
import './CheckBox.css';
import CheckBox from './CheckBox';

function CheckBoxColumn({ checkboxes, onCheckboxChange }) {
  return ( 
    <div className='d-flex flex-column'> {/* Изменено на flex-column */}
      {checkboxes.map(checkbox => (
        <CheckBox
          key={checkbox.id}
          checkbox={checkbox}
          isChecked={checkbox.checkbox.isChecked} 
          onChange={onCheckboxChange}
        />
      ))}
    </div>
  );
}

export default CheckBoxColumn;