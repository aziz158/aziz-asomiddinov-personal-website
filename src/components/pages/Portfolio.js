import React, {useState} from 'react';
import './Portfolio.css';
import Resume from "../../files/Aziz2021_Resume1024_1.jpg"
import FadeIn from 'react-fade-in';

function Portfolio() {
  return(
  <div className='portfolio'>  
    <div className='portfolio-image-container'>
      <FadeIn transitionDuration='2000'>
        <img src={Resume} alt = 'Resume Image'/>
      </FadeIn>
    </div>
  </div>);
}

export default Portfolio;