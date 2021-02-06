import React from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectCards.css';

import { Card, Button } from "react-bootstrap";

const ProjectCards = () => {
  const cardInfo = [
    
    {
      image: "https://raw.githubusercontent.com/lmlstrandingnetwork/lml-stranding-map/master/public/screenshots/screenshot01.png",
      title: "Marine Stranding Map Web App",
      text: "Checkout Marine Stranding Web Application tool that we've built for UCSC Long Marine Lab scientist. \nTechnologies used: ReactJS, Bootstrap, Algolia, Mapbox, Google Firebase, Heroku",
      link: "https://github.com/lmlstrandingnetwork/lml-stranding-map",
    },
    {
      image:
        "https://raw.githubusercontent.com/hamfox/save-our-species/master/Assets/login-view.png",
      title: "Save our Species iOS app",
      text: "See our IPhone application for reporting Strandings on the beaches \nTechnologies used: Swift, Google Firebase",
      link: "https://github.com/hamfox/save-our-species",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Huffman_tree_2.svg",
      title: "Huffman Enconding Project",
      text: "This is the project that I was working in my freshmen year at De Anza. I used Huffman encoding algorithm to encrypt and compress the data \nTechnologies used: C++, Binary Tree, Linked List, Dictionary",
      link: "https://en.wikipedia.org/wiki/Huffman_coding",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button href = {card.link}>Check it out</Button>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default ProjectCards;