
/*
const vysledek = document.querySelector('.vysledek');
const mince = document.querySelector('.mince');

const padlOrel = Math.random() < 0.5;

if (padlOrel) {
  vysledek.textContent = 'Padl orel';
 mince.classList.add('mince--orel');
} else {
  vysledek.textContent = 'Padla panna';
  mince.classList.add('mince--panna');
}
*/

const padlOrel = Math.random ()>0.5;

const vysledek = document.querySelector (".vysledek")
const mince = document.querySelector (".mince")
const body = document.querySelector ("body")

if (padlOrel) {
  vysledek.textContent = "Padl OREL"
  mince.classList.add("mince--orel")
} else {
  vysledek.textContent = "Padla PANNA"
  mince.classList.add("mince--panna")
}

body.style.backgroundColor = "blue"