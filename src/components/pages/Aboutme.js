import React from 'react';
import '../../App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Aboutme() {
  return (
  <div className='aboutme'>
    <div>About Me</div>
    <AwesomeSlider>
      <div data-src='../../images/BinaryRain.jpg'/>
      <div data-src='../../images/BinaryRain.jpg'/>
      <div data-src='../../images/BinaryRain.jpg'/>
    </AwesomeSlider>
  </div>);
}

export default Aboutme;