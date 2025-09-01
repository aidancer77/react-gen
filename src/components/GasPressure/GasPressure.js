import React from 'react';
import './GasPressure.css';

function GasPressure(props) {
  return (
    <div className='gasPressure'>
      <div class="row height-15 p-2 pt-3 ps-3">
        <div class="bg-white border border-secondary p-0">
          <div
            class="col d-flex justify-content-center align-items-center bg-light border-bottom">
            Давление газа
          </div>
          <div class="d-flex justify-content-center align-items-center ">Image
          </div>
        </div>
      </div>
    </div>
  )
}

export default GasPressure;