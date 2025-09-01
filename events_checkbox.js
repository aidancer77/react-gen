import React from 'react';
//import barsChar1 from './src/components/Bars/barsChar1';
import Checkbox1 from './src/components/Checkbox/Checkbox1';
import barsPower1 from './src/components/Bars/BarsPower1';

const bar4_1 = document.getElementById('bar-4.1');

function BarsVis4_1() {
  if (Checkbox1.checked === true) {
    bar4_1.classList.add('d-block');
    bar4_1.classList.remove('d-none');
  }
  else {
    bar4_1.classList.add('d-none');
    bar4_1.classList.remove('d-block');
  }
}

export default BarsVis4_1;