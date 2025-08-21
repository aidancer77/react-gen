import React from 'react';
import './Bars.css';

import barsChar2 from './barsChar2';

function BarsPower2({ bars_power2 }) {
  return (
    <div>

      {barsChar2.map(bars_char2 => (
        <div key={bars_char2.id} className=''>
          <div className='d-flex justify-content-center align-items-center 
                    text-decoration-underline fw-bold'>
            {bars_char2.title}</div>
          <div className='d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto'>
            <div className='w-100 bg-success d-none checkVol4_1' id='volume4_1'></div>
          </div>
          <div>
            <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char2.power}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BarsPower2;