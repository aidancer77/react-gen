
import React from 'react';
import InitialState from './InitialState';

  const barItems = InitialState.items.map(item => ({
    id: item.id,
    title: item.bar.title,
    scale: item.bar.scale,
    power: item.bar.power,
    isVisible: item.checkbox.isChecked,
  }))

  export default barItems;