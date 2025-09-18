import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GasPressure from './components/GasPressure/GasPressure';
import InfoBox from './components/InfoBox/InfoBox';
import CheckBoxColumn from './components/CheckBox/CheckBoxColumn';
import Chart from './components/Chart/Chart';
import BarsPowerColumn from './components/Bars/BarsPowerColumn';
import InitialState from './data/InitialState';
import ThousandSeparator from './data/ThousandSeparator';
import GroupItems from './components/Groups/GroupItem';
import GroupBox from './components/Groups/GroupBox';
import Navigation from './components/Navigation/Navigation';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [state, setState] = useState(InitialState)

  // Функция для обработки изменений чекбоксов
  const handleCheckboxChange = (checkboxId, isChecked) => {
    setState(prevState => ({
      ...prevState,
      items: prevState.items.map(item =>
        item.id === checkboxId
          ? { ...item, checkbox: { ...item.checkbox, isChecked } }
          : item
      )
    }));
  };

  const countActive = state.items.filter(item => item.checkbox.isChecked).length;
  const countInactive = state.items.filter(item => !item.checkbox.isChecked).length;
  const totalPower = state.items.reduce((sum, item) => sum + item.bar.power, 0);

  const LogInForm = document.getElementById('log_in_form');
  const MainInterface = document.getElementById('main_interface');

  return (
    <main className='main'>
      <div className='container-fluid h-100 bg-light'>

        {/* Login form */}
        {/* <div id='log_in_form'>
          <div>
            <LoginForm></LoginForm>
          </div>
        </div> */}

        <div id='main_interface'>
          <div className='row height-5'>
            <Navigation></Navigation>
          </div>
          <div className='row height-95'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-3'>
                  <div className='row'>
                    <div className='col-6'>
                      <GasPressure></GasPressure>
                    </div>
                    <div className='col-6'>
                      <InfoBox></InfoBox>
                    </div>
                  </div>

                  {/*checkbox*/}
                  <div className='row font'>
                    <div className='col-3 w-100'>
                      <div className='row height-18 p-2 ps-3 pb-0'>
                        <div className='col-4 border border-secondary border-bottom-0 bg-white'>
                          <CheckBoxColumn
                            checkboxes={state.items.slice(0, 6)}
                            onCheckboxChange={handleCheckboxChange}
                          />
                        </div>
                        <div className='col-4 border-top border-secondary bg-white'>
                          <CheckBoxColumn
                            checkboxes={state.items.slice(6, 12)}
                            onCheckboxChange={handleCheckboxChange}
                          />
                        </div>
                        <div className='col-4 border border-secondary border-bottom-0 bg-white'>
                          <CheckBoxColumn
                            checkboxes={state.items.slice(12, 18)}
                            onCheckboxChange={handleCheckboxChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!--cars & volume-->*/}
                  <div className='row height-12 p-2 ps-3 pt-0'>
                    <div className='col border border-secondary bg-white'>
                      <div className='row h-30'>
                        <div className='d-flex justify-content-between px-4 w-100'>
                          <div className='d-flex align-items-center'>
                            <div>Количество машин в работе:</div>
                          </div>
                          <div className='d-flex justify-content-end align-items-center'>{countActive}</div>
                        </div>
                      </div>
                      <div className='row h-30'>
                        <div className='d-flex justify-content-between px-4 w-100 border border-secondary border-end-0 border-start-0'>
                          <div className='d-flex align-items-center'>
                            <div>Количество машин не в работе:</div>
                          </div>
                          <div className='d-flex justify-content-end align-items-center'>{countInactive}</div>
                        </div>
                      </div>
                      <div className='row h-30'>
                        <div className='d-flex justify-content-between px-4 w-100'>
                          <div className='d-flex align-items-center'>
                            <div>Общая мощность по объекту:</div>
                          </div>
                          <ThousandSeparator number={totalPower} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<!--bars1-->*/}
                  <div className='row'>
                    <div className='col'>
                      <div className='row height-50 p-2 ps-3 pb-3'>
                        <div className='col border border-secondary bg-white'>
                          <div className='row h-100'>
                            <div className='col-4 p-2'>
                              <BarsPowerColumn bars_powers={state.items.slice(0, 6)} />
                            </div>
                            <div className='col-4 p-2'>
                              <BarsPowerColumn bars_powers={state.items.slice(6, 12)} />
                            </div>
                            <div className='col-4 p-2'>
                              <BarsPowerColumn bars_powers={state.items.slice(12, 18)} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-9'>
                  {/*groups*/}
                  <div className='row h-30'>
                    <div className='col-6'>
                      <div className='row h-100 p-2 pt-3'>
                        <GroupBox powerGroup={GroupItems[0].powerGroup} groupNum={GroupItems[0].groupNum} />
                      </div>
                    </div>

                    <div className='col-6'>
                      <div className='row h-100 p-2 pt-3 pe-3'>
                        <GroupBox powerGroup={GroupItems[1].powerGroup} groupNum={GroupItems[1].groupNum} />
                      </div>
                    </div>
                  </div>

                  {/*<!--graphs-->*/}
                  <div className='row h-60'>
                    <div className='col p-2 pe-3'>
                      <div className='border border-secondary'>
                        <div className='row h-30'>
                          <Chart></Chart>
                        </div>
                        <div className='row h-30'>
                          <Chart></Chart>
                        </div>
                        <div className='row h-30'>
                          <Chart></Chart>
                        </div>
                      </div>
                    </div>
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
