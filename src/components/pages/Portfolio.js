import React, {useState} from 'react';
import './Portfolio.css';
import Resume from "../../files/Aziz2021_Resume1024_1.jpg"

function Portfolio() {
  return(
  <div className='portfolio'>  
    <div className='portfolio-image-container'>
      <img src={Resume} alt = 'Resume Image'/>
    </div>
  </div>);
}

export default Portfolio;