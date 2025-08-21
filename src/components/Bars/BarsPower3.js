import React from 'react';
import './Bars.css';

import barsChar3 from './barsChar3';

function BarsPower3({ bars_power3 }) {
  return (
    <div>
      {barsChar3.map(bars_char3 => (
        <div key={bars_char3.id} className=''>
          <div className='d-flex justify-content-center align-items-center 
                    text-decoration-underline fw-bold'>
            {bars_char3.title}</div>
          <div className='d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto'>
            <div className='w-100 bg-success d-none checkVol4_1' id='volume4_1'></div>
          </div>
          <div>
            <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char3.power}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BarsPower3;