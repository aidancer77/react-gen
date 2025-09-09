import React from 'react';
import ThousandSeparator from '../../data/ThousandSeparator';
import BarItems from '../Bars/BarItem';

function GroupBoxZoom({ powerGroup }) {

  const h30Remove4 = document.getElementById('h-30_remove4');
  // const h30Remove5 = document.getElementById('h-30_remove5');

  // const groupBoxZoom4 = document.getElementById('group_box_zoom4');

  const powerGroup4 = BarItems.slice(0, 12).reduce((sum, item) => sum + item.power, 0);
  //const powerGroup5 = BarItems.slice(12, 18).reduce((sum, item) => sum + item.power, 0);

  function clickBtnZoom() {
    if (h30Remove4.classList.contains('height-30')) {
      console.log(powerGroup4);
      h30Remove4.classList.remove('height-30');
      h30Remove4.classList.add('height-54');
    }
    else if (h30Remove4.classList.contains('height-54')) {
      h30Remove4.classList.remove('height-54');
      h30Remove4.classList.add('height-30');
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
      </div>
    </div>

  )
}

export default GroupBoxZoom;