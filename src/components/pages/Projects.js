import React from 'react';
import '../../App.css';
import ProjectCards from '../ProjectCards.js'
import FadeIn from 'react-fade-in';
import { Fade } from 'react-bootstrap';



function Projects() {
  return( 
  <>
    <FadeIn transitionDuration = '2000'>
      <ProjectCards />
    </FadeIn>
  </>
  );
}

export default Projects;