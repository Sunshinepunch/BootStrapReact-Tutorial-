import React from 'react';
import { Toast } from 'react-bootstrap';

export function Confirmation ({ toggle }) {
  return (
    <Toast onClose = {() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">Your Fate is Uncertain</strong>
        <small>text</small>
      </Toast.Header>
      <Toast.Body>
        Your unavoidable doom approaches
      </Toast.Body>
    </Toast>
  )
}