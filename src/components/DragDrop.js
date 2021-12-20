import React from 'react';
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
    <Container>
      <Row>
        <Col>
          <div className="Spread"></div>
        </Col>
        <Col>
          <div className="Spread2"></div>
        </Col>
        <Col>
          <div className="Spread3"></div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="position-absolute bottom-0 end-0"> {deck.image} </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default DragDrop