import React from 'react';
import './InfoBox.css';

function InfoBox(props) {
    return (
        <div className='infoBox'>
            <div class="col-6">
                <div class="row height-15 p-2 pt-3">
                    <div class="col border-secondary d-flex justify-content-center align-items-center bg-light border">Информационное поле</div>
                </div>
            </div>
        </div>
    )
}

export default InfoBox;