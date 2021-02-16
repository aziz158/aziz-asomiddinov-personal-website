import React from 'react';
import '../App.css';
import './HeroSection.css';
import ProfileCard from './ProfileCard';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/IMG_1335.mp4' autoPlay loop muted />
      <ProfileCard/>
    </div>
  );
}

export default HeroSection;