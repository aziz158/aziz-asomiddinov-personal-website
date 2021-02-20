import React from 'react';
import './ProjectCards.css';
import CardItemExternalLink from './CardsItemExternalLink';
import FadeIn from 'react-fade-in';



const ProjectCards = () => {
  return(
    <div className='pcards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <FadeIn transitionDuration = '2000' delay = '1000'>
          <ul className='cards__items'>
            <CardItemExternalLink
              src='https://raw.githubusercontent.com/lmlstrandingnetwork/lml-stranding-map/master/public/screenshots/screenshot01.png'
              text='Checkout Marine Stranding Web Application tool that we built for UCSC Long Marine Lab scientist. #ReactJS, #Bootstrap, #Algolia, #Mapbox, #GoogleFirebase, #Heroku'
              label='Marine Stranding Map Web App'
              path='https://github.com/lmlstrandingnetwork/lml-stranding-map'
            />
            <CardItemExternalLink
              src='https://raw.githubusercontent.com/hamfox/save-our-species/master/Assets/login-view.png'
              text='See our IPhone application for reporting Strandings on the beaches. #Swift, #GoogleFirebase'
              label='Save our Species iOS app'
              path='https://github.com/hamfox/save-our-species'
            />
          </ul>
          <ul className='cards__items'>
            <CardItemExternalLink
              src='https://upload.wikimedia.org/wikipedia/commons/8/82/Huffman_tree_2.svg'
              text='This is the project that I was working in my freshmen year at De Anza. I used Huffman encoding algorithm to encrypt and compress the data. #C++, #BinaryTree, #LinkedList, #Dictionary'
              label='Huffman Enconding Project'
              path='https://en.wikipedia.org/wiki/Huffman_coding'
            />
            <CardItemExternalLink
              src='../../images/Personal-website-screenshot.jpg'
              text='Check the source code on github of this website. #ReactJS, #CSS, #Javascript, #HTML'
              label='Personal Website'
              path='https://github.com/aziz158/aziz-asomiddinov-personal-website'
            />
          </ul>
          </FadeIn>
        </div>
      </div>
    </div>
    

    );
};

export default ProjectCards;