'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

for (const element of populationElements) {
  totalPopulation += Number(element.textContent.replace(/,/g, ''));
}

const averagePopulation = totalPopulation / populationElements.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
