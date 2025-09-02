import React from 'react';
import './GasPressure.css';

function GasPressure(props) {
  return (
    <div className='gasPressure'>
      <div className="row height-15 p-2 pt-3 ps-3">
        <div className="bg-white border border-secondary p-0">
          <div
            className="col d-flex justify-content-center align-items-center bg-light border-bottom">
            Давление газа
          </div>
          <div className="d-flex justify-content-center align-items-center ">Image
          </div>
        </div>
      </div>
    </div>
  )
}

export default GasPressure;