import React from 'react';
import './CheckBox.css';
import CheckBox from './CheckBox';

function CheckBoxColumn({checkboxes, onCheckboxChange}) {
  return ( 
    <div className='d-flex flex-direction-row '>
      <div className='col-4 w-100'>
        <div className='row'>
          {checkboxes.map(checkbox => (
            <CheckBox
              key={checkbox.id}
              checkbox={checkbox}
              isChecked={checkbox.checked || false}
              onChange={onCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CheckBoxColumn;