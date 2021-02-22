import React from 'react';
import './Aboutme.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Aboutme = () => {
  return (
  <div className='aboutme'>
        <AwesomeSlider bullets={false} cssModule='aboutme-box'>
          <div data-src='../../images/IMG_1347.JPG'/>
          <div data-src='../../images/IMG_1348.JPG'/>
          <div data-src='../../images/IMG_1349.JPG'/>
          <div data-src='../../images/IMG_1350.JPG'/>
          <div data-src='../../images/IMG_1351.JPG'/>
          <div data-src='../../images/IMG_1352.JPG'/>
          <div data-src='../../images/IMG_1353.JPG'/>
        </AwesomeSlider>
  </div>);
}

export default Aboutme;