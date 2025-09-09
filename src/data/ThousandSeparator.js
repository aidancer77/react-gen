function ThousandSeparator({ number }) {
  const formatWithSpaces = (num) => {
    if (num === null || num === undefined || isNaN(num)) {
      return '0'; // или любое значение по умолчанию
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  return <div className="d-flex align-items-center">{formatWithSpaces(number)}кВт</div>
}

export default ThousandSeparator;