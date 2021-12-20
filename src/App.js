import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Container, Row, Col, Button } from 'react-bootstrap';
import { TarotCard } from './components/TarotCard';
import cards from './data';
import { DndProvider } from "react-dnd";


const tarotDeck = [
  { "src": "./images/Chariot.jpg" },
  { "src": "./images/Death.jpg" },
  { "src": "./images/Emperor.jpg" },
  { "src": "./images/Devil.png" },
  { "src": "./images/Empress.jpg" },
  { "src": "./images/Fool.jpg" },
  { "src": "./images/Hanged Man.jpg" },
  { "src": "./images/Hermit.jpg" },
  { "src": "./images/Hierophant.jpg" },
  { "src": "./images/Judgement.jpg" },
  { "src": "./images/Justice.jpg" },
  { "src": "./images/Lovers.png" },
  { "src": "./images/Magician.jpg" },
  { "src": "./images/Moon.jpg" },
  { "src": "./images/Priestess.jpg" },
  { "src": "./images/Star.jpg" },
  { "src": "./images/Strength.jpg" },
  { "src": "./images/Sun.jpg" },
  { "src": "./images/Temperance.jpg" },
  { "src": "./images/Tower.jpg" },
  { "src": "./images/Wheel.jpg" },
  { "src": "./images/World.jpg" }
]



function App() {
  const [cards, setCards] = useState([])

  const shuffleCards = (card) => {
    const shuffledCards = [... tarotDeck].sort(() => Math.random()).map((card) => ({ ...card, id: card.id  }))

    setCards(shuffledCards)
  }
return (
  <DndProvider>  

    <Container>
      <Row>
        {cards.map(data => (
          <Col xs={3} className="mb-5" key={`$data.id`}>
            <TarotCard data={data}  />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={3} className="mb-5" key={`$deck.id`}>
        </Col>
        <Col>
          <p><img src="./images/Cardback.png" alt=""></img></p>
          <Button className="mt-auto font-weight-bold"
          variant="success"
          block> Deal a new card </Button>
        </Col>
        <Col>
        </Col>
      </Row>
      </Container>
      </DndProvider>
  );
}

export default App;
