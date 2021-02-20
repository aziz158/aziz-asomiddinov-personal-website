import React, {useState} from 'react';
import './Portfolio.css';
import Resume from "../../files/Aziz2021_Resume1024_1.jpg"
import FadeIn from 'react-fade-in';

function Portfolio() {
  return(
  <div className='portfolio'>  
      <FadeIn transitionDuration='2000'>
        <div className='portfolio-image-container'>
          <img src={Resume} alt = 'Resume Image'/>
        </div>
      </FadeIn>
  </div>);
}

export default Portfolio;