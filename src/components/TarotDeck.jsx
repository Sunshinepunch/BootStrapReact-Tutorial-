import React from 'react';
import { Card } from 'react-bootstrap';



export function TarotDeck({deck}) {
  return (
    <Card className = "h-100 shadow-sm bg-green rounded">
      <Card.Img variant="top" src={deck.image} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
        <Card.Title className="mb-0 font-weight-bold">{deck.name}</Card.Title>
        </div>
      </Card.Body>
    </Card>
  )
}