import React from 'react';
import './Bars.css';

import barsChar2 from './barsChar2';
 
function BarsPower2({ bars_power2 }) {
  return (
    <div className='d-flex justify-content-around'>
      <div className=''>
        {barsChar2.map((bars_char2, index) => (
          index % 2 === 0 && (
            <div key={bars_char2.id} className='h-100'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char2.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end w-100 border border-5 mx-auto'>
                  <div className='w-100 bg-success'>{bars_char2.value}</div>
                </div>
              </div>

              <div>
                <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char2.power}</div>
              </div>
            </div>
          )
        ))}
      </div>
      <div>
        {barsChar2.map((bars_char2, index) => (
          index % 2 !== 0 && (
            <div key={bars_char2.id} className='h-100'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char2.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end w-100 border border-5 mx-auto'>
                  <div className='w-100 bg-success'></div>
                </div>
              </div>

              <div>
                <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char2.power}</div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default BarsPower2;