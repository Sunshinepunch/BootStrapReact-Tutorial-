import React from 'react';
import Picture from './Picture';
import "../App.scss";
import {Container, Row, Col, Button } from 'react-bootstrap';


const deck =
{
  "id": 1,
  "name": "Deck of Cards",
  "image": <img src="./images/CardBack.png" width="200px" />
}



function DragDrop() {
  return (
    <>
    <div className="Deck">{deck.image}</div>
    <Container>
    <div className="Spread"></div>
    <div className="Spread2"></div>
    <div className="Spread3"></div>
    </Container>
    </>
  )
}

export default DragDrop