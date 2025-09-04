import React from 'react';
import './Bars.css';

function BarsPowerColumn({ bars_powers }) {
  // Компонент для отдельного элемента
  const BarItem = ({ item, isEvenColumn = false }) => (
    <div key={item.id} className='h-100'>
      <div className='d-flex justify-content-center align-items-center text-decoration-underline fw-bold'>
        {item.title}
      </div>

      <div className="row height-70">
        <div className={`d-flex justify-content-center align-items-end w-100 border border-5 px-0`}>
          <div 
            className={`w-100 bg-success ${item.isVisible ? '' : 'd-none'}`}
            style={{ height: `${item.scale}%` }}>
          </div>
        </div>
      </div>

      <div>
        <div className='d-flex justify-content-center align-items-center pt-1'>{item.power}</div>
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
          <BarItem key={item.id} item={item} isEvenColumn={true} />
        ))}
      </div>
      <div>
        {oddItems.map((item) => (
          <BarItem key={item.id} item={item} isEvenColumn={false} />
        ))}
      </div>
    </div>
  )
}

export default BarsPowerColumn;