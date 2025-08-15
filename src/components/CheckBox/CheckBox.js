import React from 'react';
import './Checkbox.css';

import Stroke from '../Stroke/Stroke';
import strokeChar from '../Stroke/strokeChar';

function CheckBox(checkbox_char) {
    return (
        <div>
            <div className="col-4 border border-secondary border-end-0 bg-white">
                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_1()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_1" />
                            <label className="form-check-label" for="checkVol4_1">4.1</label>
                        </div>
                    </div>
                    <div className=''>
                        {strokeChar.map(stroke_char => (
                            <Stroke key={stroke_char.id} stroke_char={stroke_char} />
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_2()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_2" />
                            <label className="form-check-label" for="checkVol4_2">4.2</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#d63384" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_3()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_3" />
                            <label className="form-check-label" for="checkVol4_3">4.3</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#198754" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_4()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_4" />
                            <label className="form-check-label" for="checkVol4_4">4.4</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#ffc107" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_5()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_5" />
                            <label className="form-check-label" for="checkVol4_5">4.5</label>
                        </div>
                    </div>

                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#6610f2" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_6()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_6" />
                            <label className="form-check-label" for="checkVol4_6">4.6</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#20c997" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="col-4 border border-secondary bg-white">
                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_7()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_7" />
                            <label className="form-check-label" for="checkVol4_7">4.7</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#198754" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_8()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_8" />
                            <label className="form-check-label" for="checkVol4_8">4.8</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#0dcaf0" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_9()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_9" />
                            <label className="form-check-label" for="checkVol4_9">4.9</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#ff9999" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_10()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_10" />
                            <label className="form-check-label" for="checkVol4_10">4.10</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#6666ff" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_11()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_11" />
                            <label className="form-check-label" for="checkVol4_11">4.11</label>
                        </div>
                    </div>

                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#ff66ff" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol4_12()" className="form-check-input" type="checkbox" value=""
                                id="checkVol4_12" />
                            <label className="form-check-label" for="checkVol4_12">4.12</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#ff8000" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="col-4 border border-secondary border-start-0 bg-white">
                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol5_1()" className="form-check-input" type="checkbox" value=""
                                id="checkVol5_1" />
                            <label className="form-check-label" for="checkVol5_1">5.1</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#66b2ff" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol5_2()" className="form-check-input" type="checkbox" value=""
                                id="checkVol5_2" />
                            <label className="form-check-label" for="checkVol5_2">5.2</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#00cc00" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol5_3()" className="form-check-input" type="checkbox" value=""
                                id="checkVol5_3" />
                            <label className="form-check-label" for="checkVol5_3">5.3</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#cccc00" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol5_4()" className="form-check-input" type="checkbox" value=""
                                id="checkVol5_4" />
                            <label className="form-check-label" for="checkVol5_4">5.4</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#ff99ff" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol5_5()" className="form-check-input" type="checkbox" value=""
                                id="checkVol5_5" />
                            <label className="form-check-label" for="checkVol5_5">5.5</label>
                        </div>
                    </div>

                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#3333ff" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input onclick="vol5_6()" className="form-check-input" type="checkbox" value=""
                                id="checkVol5_6" />
                            <label className="form-check-label" for="checkVol5_6">5.6</label>
                        </div>
                    </div>
                    <div className="col">
                        <svg width="45" height="27">
                            <path stroke="#ff3333" stroke-width="2" d="M 45, 12 L 2,12 L 2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckBox;