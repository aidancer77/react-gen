import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import barsValue from './bars_value';
import GasPressure from './components/GasPressure/GasPressure';
import InfoBox from './components/InfoBox/InfoBox';
import CheckBox1 from './components/Checkbox/Checkbox1';
import CheckBox2 from './components/Checkbox/Checkbox2';
import CheckBox3 from './components/Checkbox/Checkbox3';
import Bars from './components/Bars/Bars';
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
                      <div className="col border border-secondary border-end-0 bg-white"> {/*<!--bars1-->*/}
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.1</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className="w-100 bg-success d-none checkVol4_1" id="volume4_1"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1435</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.2</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className="w-100 bg-success d-none checkVol4_2" id="volume4_2"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1437</div>
                            </div>
                          </div>
                        </div>
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.3</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className="w-100 bg-success d-none checkVol4_3" id="volume4_3"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1418</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.4</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className="w-100 bg-success d-none checkVol4_4" id="volume4_4"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1441</div>
                            </div>
                          </div>
                        </div>
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.5</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_5" id="volume4_5"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1420</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.6</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_6" id="volume4_6"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1430</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col border border-secondary bg-white"> {/*<!--bars2-->*/}
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.7</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_7" id="volume4_7"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1427</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.8</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_8" id="volume4_8"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1435</div>
                            </div>
                          </div>
                        </div>
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.9</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_9" id="volume4_9"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1439</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.10</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_10" id="volume4_10"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1415</div>
                            </div>
                          </div>
                        </div>
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.11</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_11" id="volume4_11"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1419</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              4.12</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol4_12" id="volume4_12"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1430</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col border border-secondary border-start-0 bg-white"> {/*<!--bars3-->*/}
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              5.1</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol5_1" id="volume5_1"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1405</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              5.2</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol5_2" id="volume5_2"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1421</div>
                            </div>
                          </div>
                        </div>
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              5.3</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol5_3" id="volume5_3"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1439</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              5.4</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol5_4" id="volume5_4"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1415</div>
                            </div>
                          </div>
                        </div>
                        <div className="row h-30">
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              5.5</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol5_5" id="volume5_5"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1423</div>
                            </div>
                          </div>
                          <div className="col p-2">
                            <div
                              className="d-flex justify-content-center align-items-center text-decoration-underline fw-bold">
                              5.6</div>
                            <div
                              className="d-flex justify-content-center align-items-end height-70 width-80 border border-5 mx-auto">
                              <div className=" w-100 bg-success d-none checkVol5_6" id="volume5_6"></div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center align-items-center pt-1">1419</div>
                            </div>
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
