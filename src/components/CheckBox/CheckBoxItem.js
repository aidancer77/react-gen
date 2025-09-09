
//import React from 'react';
import InitialState from '../../data/InitialState';

  const checkboxItems = InitialState.items.map(item => ({
    id: item.id,
    label: item.checkbox.title,
    stroke_color: item.checkbox.stroke_color,
    stroke_width: item.checkbox.stroke_width,
    checked: item.checkbox.isChecked, // Добавляем checked для синхронизации
  }))
  
  export default checkboxItems;