import React from 'react';
import ThousandSeparator from '../../data/ThousandSeparator';

function GroupBox({ powerGroup, groupNum }) {

  const groupBoxScale = document.getElementById('groupBoxScale');
  // const h30Remove5 = document.getElementById('h-30_remove5');

  function clickBtnZoom() {
    if (groupBoxScale.classList.contains('d-none')) {
      groupBoxScale.classList.remove('d-none');
      // groupBoxScale.classList.add('height-54');
    }
    else {
      // groupBoxScale.classList.remove('height-54');
      groupBoxScale.classList.add('d-none');
    }
  }

  return (
    <div className="col bg-white border border-secondary d-flex flex-column justify-content-between p-0">
      <div className="d-flex justify-content-center border-bottom border-secondary py-1">{groupNum}</div>
      <div className="d-flex justify-content-between align-items-center border-top border-secondary p-1">
        <div className="d-flex ps-4">
          <div>Общая мощность по группе:</div>
          <div className="ps-4 fw-bold">
            <ThousandSeparator number={powerGroup} />
          </div>
        </div>
        <button onClick={clickBtnZoom}>10</button>
        <div id='groupBoxScale' className='height-80 width-80 bg-white position-absolute top-50 start-50 translate-middle border border-dark d-none d-flex justify-content-end align-items-end'>
          <button onClick={clickBtnZoom}>10</button>
        </div>

      </div>
    </div>

  )
}

export default GroupBox;