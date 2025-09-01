import React from 'react';
import './Bars.css';

import barsChar1 from './barsChar1';

function BarsPower1({ bars_power1 }) {
  return (
    <div className='d-flex justify-content-around'> 
      <div className=''>
        {barsChar1.map((bars_char1, index) => (
          index % 2 === 0 && (
            <div key={bars_char1.id} className='h-100'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char1.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end w-100 border border-5 px-0'>
                  <div targetId={bars_char1.id} className='w-100 bg-success height-70 d-none'></div>
                </div>
              </div>

              <div>
                <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char1.power}</div>
              </div>
            </div>
          )
        ))}
      </div>
      <div>
        {barsChar1.map((bars_char1, index) => (
          index % 2 !== 0 && (
            <div key={bars_char1.id} className='h-100'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char1.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end w-100 border border-5'>
                  <div className='w-100 bg-success'></div>
                </div>
              </div>

              <div>
                <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char1.power}</div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default BarsPower1;