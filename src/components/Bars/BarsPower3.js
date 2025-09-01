import React from 'react';
import './Bars.css';

import barsChar3 from './barsChar3';

function BarsPower3({ bars_power3 }) {
  return (
    <div className='d-flex justify-content-around'>
      <div className=''>
        {barsChar3.map((bars_char3, index) => (
          index % 2 === 0 && (
            <div key={bars_char3.id} className='h-100'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char3.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end w-100 border border-5 mx-auto'>
                  <div className='w-100 bg-success'>{bars_char3.value}</div>
                </div>
              </div>

              <div>
                <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char3.power}</div>
              </div>
            </div>
          )
        ))}
      </div>
      <div>
        {barsChar3.map((bars_char3, index) => (
          index % 2 !== 0 && (
            <div key={bars_char3.id} className='h-100'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char3.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end w-100 border border-5 mx-auto'>
                  <div className='w-100 bg-success'></div>
                </div>
              </div>

              <div>
                <div className='d-flex justify-content-center align-items-center pt-1'>{bars_char3.power}</div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default BarsPower3;