import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GasPressure from './components/GasPressure/GasPressure';
import InfoBox from './components/InfoBox/InfoBox';
import CheckBoxColumn from './components/CheckBox/CheckBoxColumn';
//import Groups from './components/Groups/Groups';
import Graphic1 from './components/Graphics/Graphic1';
import Graphic2 from './components/Graphics/Graphic2';
import BarsPowerColumn from './components/Bars/BarsPowerColumn';
import InitialState from './InitialState';
import ThousandSeparator from 'ThousandSeparator';
import GroupBoxZoom from './groupBoxZoom';
import BarItems from './BarItem';
import CheckboxItems from './CheckBoxItem';

function App() {
  const [state, setState] = useState(InitialState)

  // Функция для обработки изменений чекбоксов
  const handleCheckboxChange = (checkboxId, isChecked) => {
    //console.log('Checkbox changed:', checkboxId, isChecked); // Отладочная информация
    setState(prevState => ({
      ...prevState,
      items: prevState.items.map(item =>
        item.id === checkboxId
          ? { ...item, checkbox: { ...item.checkbox, isChecked } }
          : item
      )
    }));
  };

  // const barItems = state.items.map(item => ({
  //   id: item.id,
  //   title: item.bar.title,
  //   scale: item.bar.scale,
  //   power: item.bar.power,
  //   isVisible: item.checkbox.isChecked,
  // }))
  // const checkboxItems = state.items.map(item => ({
  //   id: item.id,
  //   label: item.checkbox.title,
  //   stroke_color: item.checkbox.stroke_color,
  //   stroke_width: item.checkbox.stroke_width,
  //   checked: item.checkbox.isChecked, // Добавляем checked для синхронизации
  // }))

  const countActive = CheckboxItems.filter(item => item.checked).length;
  const countInactive = CheckboxItems.filter(item => !item.checked).length;
  const totalPower = BarItems.reduce((sum, item) => sum + item.power, 0);

  return (
    <main className="main">
      <div className="container-fluid position-absolute h-100">
        <div className="row h-100">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <div className='row'>
                  <div className="col-6">
                    <GasPressure></GasPressure>
                  </div>
                  <div className="col-6">
                    <InfoBox></InfoBox>
                  </div>
                </div>

                <div className="row font"> {/*checkbox*/}
                  <div className="col-3 w-100">
                    <div className="row height-18 p-2 ps-3 pb-0">
                      <div className="col-4 border border-secondary border-bottom-0 bg-white">
                        {/* <CheckboxCounter></CheckboxCounter> */}
                        <CheckBoxColumn
                          checkboxes={CheckboxItems.slice(0, 6)}
                          onCheckboxChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="col-4 border-top border-secondary bg-white">
                        <CheckBoxColumn
                          checkboxes={CheckboxItems.slice(6, 12)}
                          onCheckboxChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="col-4 border border-secondary border-bottom-0 bg-white">
                        <CheckBoxColumn
                          checkboxes={CheckboxItems.slice(12, 18)}
                          onCheckboxChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row height-12 p-2 ps-3 pt-0"> {/*<!--cars & volume-->*/}
                  <div className="col border border-secondary bg-white">
                    <div className="row h-30">
                      <div className="d-flex justify-content-between px-4 w-100">
                        <div className="d-flex align-items-center">
                          <div>Количество машин в работе:</div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">{countActive}</div>
                      </div>
                    </div>
                    <div className="row h-30">
                      <div className="d-flex justify-content-between px-4 w-100 border border-secondary border-end-0 border-start-0">
                        <div className="d-flex align-items-center">
                          <div>Количество машин не в работе:</div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">{countInactive}</div>
                      </div>
                    </div>
                    <div className="row h-30">
                      <div className="d-flex justify-content-between px-4 w-100">
                        <div className="d-flex align-items-center">
                          <div>Общая мощность по объекту:</div>
                        </div>
                        <ThousandSeparator number={totalPower} />
                      </div>
                    </div>
                  </div>
                </div>

                {/*<!--bars1-->*/}
                <div className="row">
                  <div className="col">
                    <div className="row height-54 p-2 ps-3 pb-3">
                      <div className="col border border-secondary bg-white">
                        <div className="row h-100">

                          <div className="col-4 p-2">
                            <BarsPowerColumn bars_powers={BarItems.slice(0, 6)} />
                          </div>
                          <div className="col-4 p-2">
                            <BarsPowerColumn bars_powers={BarItems.slice(6, 12)} />
                          </div>
                          <div className="col-4 p-2">
                            <BarsPowerColumn bars_powers={BarItems.slice(12, 18)} />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-9">
                {/*zoom button*/}
                <div className="row">
                  <div className="col-6" id="group_4_zoom">
                    <div className="row height-30 p-2 pt-3" id="h-30_remove4">
                      <GroupBoxZoom/>
                    </div>
                  </div>

                  <div className="col-6" id="group_5_zoom">
                    <div className="row height-30 p-2 pt-3 pe-3" id="h-30_remove5">
                      <GroupBoxZoom/>
                    </div>
                  </div>
                </div>

                <div className="row height-30 p-2 pe-3"> {/*<!--graphs-->*/}
                  <div
                    className="col-1 border border-secondary bg-light d-flex justify-content-center align-items-center">
                    Шкала 1</div>
                  <div
                    className="col-11 border border-secondary border-start-0 d-flex justify-content-center align-items-center bg-white">
                    <Graphic1></Graphic1>
                  </div>
                </div>

                <div className="row height-30 p-2 pb-3 pe-3">
                  <div
                    className="col-1 border border-secondary bg-light d-flex justify-content-center align-items-center">
                    Шкала 2</div>
                  <div
                    className="col-11 border border-secondary border-start-0 d-flex justify-content-center align-items-center bg-white">
                    <Graphic2></Graphic2>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}

export default App;
