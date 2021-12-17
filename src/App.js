import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Container, Row, Col } from 'react-bootstrap';
import { TarotCard } from './components/TarotCard';
import { Confirmation } from './components/Confirmation';
import { TarotDeck } from './components/TarotDeck';
import cards from './data';
import deck from './deck';




function App() {
  const [ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }
  return (
    <Container>
      {ordered && <Confirmation toggle = {setOrdered} />}
      <Row>
        {cards.map(data => (
          <Col xs={3} className="mb-5" key={`$data.id`}>
            <TarotCard data={data} setOrdered={displayConfirmation} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={3} className="mb-5" key={`$deck.id`}>
          
        </Col>
        <Col>
          <p><img src="./images/Cardback.png" alt=""></img></p>
        </Col>
        <Col>
        </Col>
      </Row>
      </Container>
  );
}

export default App;
