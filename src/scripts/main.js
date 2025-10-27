'use strict';

// write your code here
const countries = document.querySelectorAll('.list__item .population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let res = 0;

countries.forEach((country) => {
  res += parseInt(country.innerText.replaceAll(',', ''));
});

function numberFormatter(number) {
  return number.toLocaleString();
}

total.innerText = numberFormatter(res);
average.innerText = numberFormatter(Math.floor(res / countries.length));
