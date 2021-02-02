import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
          <ul className='cards__items'>
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

export default Cards;