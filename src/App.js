import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col } from 'react-bootstrap';
import cards from './data.json';
import { TarotCard } from './components/TarotCard';
import { Confirmation } from './components/Confirmation';

function App() {
  return (
    <Container>
      <Row>
        {cards}
      </Row>
      </Container>
  );
}

export default App;
