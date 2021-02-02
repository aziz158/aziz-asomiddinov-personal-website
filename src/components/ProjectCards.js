import React from 'react';
import './ProjectCards.css';
import CardItem from './CardItem';

function ProjectCards() {
    return (
      <div className='pcards'>
        <h1>Check out the content</h1>
        <div className='pcards__container'>
          <div className='pcards__wrapper'>
            <ul className='pcards__items'>
              <CardItem
                src='./images/Desktop.jpg'
                text='Explore my technical background and my skills'
                label='Portfolio'
                path='/portfolio'
              />
              <CardItem
                src='./images/Projects.jpeg'
                text='Take a look at the projects that Ive been part of'
                label='Projects'
                path='/projects'
              />
            </ul>
            <ul className='pcards__items'>
              <CardItem
                src='./images/IMG_1281.jpg'
                text='Learn something new about me'
                label='About me'
                path='/aboutme'
              />
              <CardItem
                src='./images/Email.jpg'
                text='Feel free to send me an email or connect me in social media'
                label='Contact me'
                path='/contacts'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCards;