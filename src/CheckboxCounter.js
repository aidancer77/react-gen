import React, { useState } from 'react';

function CheckboxCounter() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Option 1', checked: false },
    { id: 2, label: 'Option 2', checked: false },
    { id: 3, label: 'Option 3', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map(checkbox =>
      checkbox.id === id 
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    
    setCheckboxes(updatedCheckboxes);
    
    // Подсчет выбранных чекбоксов
    const count = updatedCheckboxes.filter(cb => cb.checked).length;
    setSelectedCount(count);
  };

  return (
    <div>
      <h3>Выбрано: {selectedCount}</h3>
      {checkboxes.map(checkbox => (
        <label key={checkbox.id}>
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          {checkbox.label}
        </label>
      ))}
    </div>
  );
}

export default CheckboxCounter;