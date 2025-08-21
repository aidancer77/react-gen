import React from 'react';
import './Bars.css';

import barsChar1 from './barsChar1';

function BarsPower1({ bars_power1 }) {
  return (
    <div className='d-flex'>
      <div className=''>
        {barsChar1.map((bars_char1, index) => (
          index % 2 === 0 && (
            <div key={bars_char1.id} className='height-70'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char1.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end width-80 border border-5 mx-auto'>
                  <div className='w-100 bg-success' id='volume4_2'>5</div>
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
            <div key={bars_char1.id} className='height-70'>
              <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
                {bars_char1.title}
              </div>

              <div className="row height-70">
                <div className='d-flex justify-content-center align-items-end width-80 border border-5 mx-auto'>
                  <div className='w-100 bg-success' id='volume4_2'>5</div>
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