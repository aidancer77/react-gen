const Bars4_1 = document.getElementById('bars4_1');
const CheckBox4_1 = document.getElementById('checkBox4_1');


function hideBar4_1() {
  if (CheckBox4_1.checked === true) {
    Bars4_1.classList.add('d-block')
    Bars4_1.classList.remove('d-none')
  }
  else {
    Bars4_1.classList.add('d-none')
    Bars4_1.classList.remove('d-block')
  }
}