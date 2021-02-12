import React from 'react';
import './Aboutme.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Aboutme() {
  return (
  <div className='aboutme'>
      <AwesomeSlider cssModule='aboutme-box'>
        <div data-src='../../images/img-1.jpg'/>
        <div data-src='../../images/img-2.jpg'/>
        <div data-src='../../images/img-8.jpg'/>
      </AwesomeSlider>
  </div>);
}

export default Aboutme;