import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/IMG_1335.mp4' autoPlay loop muted />
      <h1>Hello there</h1>
      <p>Welcome to my project</p>
    </div>
  );
}

export default HeroSection;