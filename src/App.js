import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import barsValue from './bars_value';
import GasPressure from './components/GasPressure/GasPressure';
import InfoBox from './components/InfoBox/InfoBox';
import CheckBox1 from './components/Checkbox/Checkbox1';
import CheckBox2 from './components/Checkbox/Checkbox2';
import CheckBox3 from './components/Checkbox/Checkbox3';
import BarsPower1 from './components/Bars/BarsPower1';
import BarsPower2 from './components/Bars/BarsPower2';
import BarsPower3 from './components/Bars/BarsPower3';
import Groups from './components/Groups/Groups';
import Graphic1 from './components/Graphics/Graphic1';
import Graphic2 from './components/Graphics/Graphic2';

function App() {
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
                        <CheckBox1></CheckBox1>
                      </div>
                      <div className="col-4 border-top border-secondary bg-white">
                        <CheckBox2></CheckBox2>
                      </div>
                      <div className="col-4 border border-secondary border-bottom-0 bg-white">
                        <CheckBox3></CheckBox3>
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
                        <div className="d-flex justify-content-end align-items-center pe-3">10</div>
                      </div>
                    </div>
                    <div className="row h-30">
                      <div className="border border-secondary border-end-0 border-start-0 d-flex">
                        <div className="d-flex align-items-center w-100 ps-3">
                          <div>Количество машин не в работе:</div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center pe-3">8</div>
                      </div>
                    </div>
                    <div className="row h-30">
                      <div className="d-flex">
                        <div className="d-flex align-items-center w-100 ps-3">
                          <div>Общая мощность по объекту:</div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center w-50 pe-3">1 230 кВт
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row"> {/*<!--volume scale -->*/}
                  <div className="col">
                    <div className="row height-54 p-2 ps-3 pb-3">
                      <div className="col border border-secondary bg-white"> {/*<!--bars1-->*/}
                        <div className="row h-100">

                          <div className="col-4 p-2">
                            <BarsPower1></BarsPower1>
                          </div>
                          <div className="col-4 p-2">
                            <BarsPower2></BarsPower2>
                          </div>
                          <div className="col-4 p-2">
                            <BarsPower3></BarsPower3>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-9">
                <div className="row">
                  <div className="col-6" id="group_4_zoom"> {/*<!-- zoom button 4 -->*/}
                    <div className="row height-30 p-2 pt-3" id="h-30_remove4">
                      <div className="col bg-white border border-secondary d-flex flex-column justify-content-between p-0" id="bord-none4">
                        <div className="d-flex justify-content-center border-bottom border-secondary py-1">Группа 4</div>
                        <div className="d-flex justify-content-between align-items-center border-top border-secondary p-1">
                          <div className="d-flex justify-content-end ps-2">
                            <div>Общая мощность по группе:</div>
                            <div className="px-3 fw-bold">836 кВт</div>
                          </div>
                          <div>
                            <button className="btn p-1">
                              <svg width="25" height="25" id="svg_4_zoom">
                                <path stroke-width="2" fill="none" d="
                                             M 9, 2 L 2,2 L 2, 9
                                             M 17, 2 L 24,2 L 24, 9
                                             M 24, 17 L 24,24 L 17, 24
                                             M 9, 24 L 2,24 L 2, 17" />

                                <path className="d-none" stroke-width="2" fill="none" d="
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

                  <div className="col-6" id="group_5_zoom"> {/*<!-- zoom button 5 -->*/}
                    <div className="row height-30 p-2 pt-3 pe-3" id="h-30_remove5">
                      <div className="col bg-white border border-secondary d-flex flex-column justify-content-between p-0" id="bord-none5">
                        <div className="d-flex justify-content-center border-bottom border-secondary bg-yellow py-1">Группа 5</div>
                        <div className="d-flex justify-content-between align-items-center border-top border-secondary p-1">
                          <div className="d-flex justify-content-end ps-2">
                            <div>Общая мощность по группе:</div>
                            <div className="px-3 fw-bold">394 кВт</div>
                          </div>
                          <div className="p-1">
                            <svg width="25" height="25" id="svg_5_zoom">
                              <path id="svg_open_5" stroke-width="2" fill="none" d="
                                             M 9, 2 L 2,2 L 2, 9
                                             M 17, 2 L 24,2 L 24, 9
                                             M 24, 17 L 24,24 L 17, 24
                                             M 9, 24 L 2,24 L 2, 17" />

                              <path className="d-none" id="svg-close_5" stroke-width="2" fill="none" d="
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
