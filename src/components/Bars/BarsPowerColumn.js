import React from 'react';
import './Bars.css';

function BarsPowerColumn({ bars_powers }) {
  // Компонент для отдельного элемента
  const BarItem = ({ item }) => (
    <div key={item.id} className='h-100'>
      <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
        {item.bar.title}
      </div>

      <div className="row height-70">
        <div className={`d-flex justify-content-center align-items-end w-100 border border-5 px-0`}>
          <div
            className={`w-100 bg-success ${item.checkbox.isChecked ? '' : 'd-none'}`}
            style={{ height: `${item.bar.scale}%` }}> {/* Исправлено обращение к scale */}
          </div>
        </div>
      </div>

      <div>
        <div className='d-flex justify-content-center align-items-center pt-1'>{item.bar.power}</div> {/* Исправлено обращение к power */}
      </div>
    </div>
  );

  // Разделяем данные на четные и нечетные элементы
  const evenItems = bars_powers.filter((_, index) => index % 2 === 0);
  const oddItems = bars_powers.filter((_, index) => index % 2 !== 0);

  return (
    <div className='d-flex justify-content-around'>
      <div className=''>
        {evenItems.map((item) => (
          <BarItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        {oddItems.map((item) => (
          <BarItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default BarsPowerColumn;