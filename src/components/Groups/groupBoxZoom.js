import React from 'react';
import ThousandSeparator from '../../ThousandSeparator';
import BarItems from '../Bars/BarItem';
//import CheckboxItems from './CheckBoxItem';


function GroupBoxZoom() {
  
const powerGroup4 = BarItems.slice(0, 12).reduce((sum, item) => sum + item.power, 0);
//const powerGroup5 = BarItems.slice(12, 18).reduce((sum, item) => sum + item.power, 0);

const h30Remove4 = document.getElementById('h-30_remove4');
//const h30Remove5 = document.getElementById('h-30_remove5');

  function clickBtnZoom() {

    if (h30Remove4.classList.contains('height-30')) {
      h30Remove4.classList.remove('height-30');
      h30Remove4.classList.add('height-60');
    }
    else {
      h30Remove4.classList.remove('height-60');
      h30Remove4.classList.add('height-30');
    }
  }
  return (
    <div className="col bg-white border border-secondary d-flex flex-column justify-content-between p-0">
      <div className="d-flex justify-content-center border-bottom border-secondary py-1">Группа 4</div>
      <div className="d-flex justify-content-between align-items-center border-top border-secondary p-1">
        <div className="d-flex ps-4">
          <div>Общая мощность по группе:</div>
          <div className="ps-4 fw-bold">
            <ThousandSeparator number={powerGroup4} />
          </div>
        </div>
        <button onClick={clickBtnZoom}>10</button>
      </div>
    </div>

  )
}

export default GroupBoxZoom;