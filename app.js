import SwipeSlider from 'pure-swipe-slider';
import 'pure-swipe-slider/swipe-slider.css';

// Register with custom tag name
customElements.define('my-slider', SwipeSlider);


document.querySelector('#wshc_head').onclick = () => {
  document.querySelector('#wshc').scrollIntoView({ behavior: 'smooth' });
};

document.querySelector('#ric_head').onclick = () => {
  document.querySelector('#ric').scrollIntoView({ behavior: 'smooth' });
};

document.querySelector('#lansing_head').onclick = () => {
  document.querySelector('#lansing').scrollIntoView({ behavior: 'smooth' });
};

document.querySelector('#hardy_head').onclick = () => {
  document.querySelector('#hardy').scrollIntoView({ behavior: 'smooth' });
};