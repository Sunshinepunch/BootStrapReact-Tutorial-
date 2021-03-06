import React from 'react';
import { Card, Button } from 'react-bootstrap';



export function TarotCard({ data }) {
  return (
    <Card className = "h-100 shadow-sm bg-teal rounded">
      <Card.Img variant="top" src={data.image} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
        <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
        </div>
        <Card.Text className="text-secondary">{data.desc}</Card.Text>
        <Button
          className="mt-auto font-weight-bold"
          variant="success"
          block>
            Flip Card
          </Button>
      </Card.Body>
    </Card>
  )
}