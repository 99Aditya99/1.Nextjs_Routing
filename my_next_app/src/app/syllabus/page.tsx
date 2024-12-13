"use client"
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function SyllabusPage() {
  return (
    <div>
    <p className='text-center display-6 py-3' >TypeScript Topics</p>
    <ListGroup>
      <ListGroup.Item>Enums</ListGroup.Item>
      <ListGroup.Item>Type Infarence</ListGroup.Item>
      <ListGroup.Item>Custom Type</ListGroup.Item>
      <ListGroup.Item>interfaces</ListGroup.Item>
      <ListGroup.Item>classes</ListGroup.Item>
    </ListGroup>
    </div>
  )
}
