import sayHi from './js/alert';
import writeText from './js/writeText';
import './style.scss';
import './img/';

const alertButton = document.getElementById('alert-button');

alertButton.addEventListener('click', sayHi);

const printButton = document.getElementById('write-text-button');
const pTag = document.querySelector('p');

printButton.addEventListener('click', () => {
  writeText(pTag)
});
