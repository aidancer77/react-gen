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
import InitialState from './Items';
import ThousandSeparator from './ThousandSeparator';


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

  const barItems = state.items.map(item => ({
    id: item.id,
    title: item.bar.title,
    scale: item.bar.scale,
    power: item.bar.power,
    isVisible: item.checkbox.isChecked,
  }))
  const checkboxItems = state.items.map(item => ({
    id: item.id,
    label: item.checkbox.title,
    stroke_color: item.checkbox.stroke_color,
    stroke_width: item.checkbox.stroke_width,
    checked: item.checkbox.isChecked, // Добавляем checked для синхронизации
  }))

  const countActive = checkboxItems.filter(item => item.checked).length;
  const countInactive = checkboxItems.filter(item => !item.checked).length;
  const totalPower = barItems.reduce((sum, item) => sum + item.power, 0);
  
const powerGroup4 = barItems.slice(0, 12).reduce((sum, item) => sum + item.power, 0);
const powerGroup5 = barItems.slice(12, 18).reduce((sum, item) => sum + item.power, 0);

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
                          checkboxes={checkboxItems.slice(0, 6)}
                          onCheckboxChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="col-4 border-top border-secondary bg-white">
                        <CheckBoxColumn
                          checkboxes={checkboxItems.slice(6, 12)}
                          onCheckboxChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="col-4 border border-secondary border-bottom-0 bg-white">
                        <CheckBoxColumn
                          checkboxes={checkboxItems.slice(12, 18)}
                          onCheckboxChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row height-12 p-2 ps-3 pt-0"> {/*<!--cars & volume-->*/}
                  <div className="col border border-secondary bg-white">
                    <div className="row h-30">
                      <div className="d-flex">
                        <div className="d-flex align-items-center w-100 ps-3">
                          <div>Количество машин в работе:</div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center pe-3">{countActive}</div>
                      </div>
                    </div>
                    <div className="row h-30">
                      <div className="border border-secondary border-end-0 border-start-0 d-flex">
                        <div className="d-flex align-items-center w-100 ps-3">
                          <div>Количество машин не в работе:</div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center pe-3">{countInactive}</div>
                      </div>
                    </div>
                    <div className="row h-30">
                      <div className="d-flex">
                        <div className="d-flex align-items-center w-100 ps-3">
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
                            <BarsPowerColumn bars_powers={barItems.slice(0, 6)} />
                          </div>
                          <div className="col-4 p-2">
                            <BarsPowerColumn bars_powers={barItems.slice(6, 12)} />
                          </div>
                          <div className="col-4 p-2">
                            <BarsPowerColumn bars_powers={barItems.slice(12, 18)} />
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
                      <div className="col bg-white border border-secondary d-flex flex-column justify-content-between p-0" id="bord-none4">
                        <div className="d-flex justify-content-center border-bottom border-secondary py-1">Группа 4</div>
                        <div className="d-flex justify-content-between align-items-center border-top border-secondary p-1">
                          <div className="d-flex justify-content-end ps-2">
                            <div>Общая мощность по группе:</div>
                            <div className="px-3 fw-bold"><ThousandSeparator number={powerGroup4} /></div>
                          </div>
                          <div>
                            <button className="btn p-1">
                              <svg width="25" height="25" id="svg_4_zoom">
                                <path strokeWidth="2" fill="none" d="
                                             M 9, 2 L 2,2 L 2, 9
                                             M 17, 2 L 24,2 L 24, 9
                                             M 24, 17 L 24,24 L 17, 24
                                             M 9, 24 L 2,24 L 2, 17" />

                                <path className="d-none" strokeWidth="2" fill="none" d="
                                             M 7, 2 L 7,7 L 2, 7
                                             M 19, 2 L 19,7 L 24, 7
                                             M 24, 19 L 19,19 L 19, 24
                                             M 7, 24 L 7,19 L 2, 19" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 d-none" id="group_4_hidden">
                    <div className="row height-30 p-2 pt-3">
                      <div className="border border-secondary bg-light"></div>
                    </div>
                  </div>

                  <div className="col-6" id="group_5_zoom">
                    <div className="row height-30 p-2 pt-3 pe-3" id="h-30_remove5">
                      <div className="col bg-white border border-secondary d-flex flex-column justify-content-between p-0" id="bord-none5">
                        <div className="d-flex justify-content-center border-bottom border-secondary bg-yellow py-1">Группа 5</div>
                        <div className="d-flex justify-content-between align-items-center border-top border-secondary p-1">
                          <div className="d-flex justify-content-end ps-2">
                            <div>Общая мощность по группе:</div>
                            <div className="px-3 fw-bold"><ThousandSeparator number={powerGroup5} /></div>
                          </div>
                          <div className="p-1">
                            <svg width="25" height="25" id="svg_5_zoom">
                              <path id="svg_open_5" strokeWidth="2" fill="none" d="
                                             M 9, 2 L 2,2 L 2, 9
                                             M 17, 2 L 24,2 L 24, 9
                                             M 24, 17 L 24,24 L 17, 24
                                             M 9, 24 L 2,24 L 2, 17" />

                              <path className="d-none" id="svg-close_5" strokeWidth="2" fill="none" d="
                                             M 7, 2 L 7,7 L 2, 7
                                             M 19, 2 L 19,7 L 24, 7
                                             M 24, 19 L 19,19 L 19, 24
                                             M 7, 24 L 7,19 L 2, 19" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 d-none" id="group_5_hidden">
                    <div className="row height-30 p-2 pt-3 pe-3">
                      <div className="border border-secondary bg-light"></div>
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
