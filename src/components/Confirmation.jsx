import React from 'react';
import { Toast } from 'react-bootstrap';

export function Confirmation ({ toggle }) {
  return (
    <Toast onClose = {() => toggle(false)}
  )
}