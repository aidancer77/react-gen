function ThousandSeparator({ number }) {
  const formatWithSpaces = (num) => {
    if (num === null || num === undefined || isNaN(num)) {
      return '0'; // или любое значение по умолчанию
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  return <div className="d-flex justify-content-end align-items-center w-50 pe-3">{formatWithSpaces(number)} кВт</div>
}

export default ThousandSeparator;