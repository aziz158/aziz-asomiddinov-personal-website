import React from 'react';
import '../App.css';
import './HeroSection.css';
import ProfileCard from './ProfileCard';
import FadeIn from 'react-fade-in';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/IMG_1335.mp4' autoPlay loop muted />
      <FadeIn transitionDuration='2000'>
        <ProfileCard/>
      </FadeIn>
    </div>
  );
}

export default HeroSection;