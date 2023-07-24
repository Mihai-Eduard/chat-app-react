import React from 'react';
import Card from "react-bootstrap/Card";
import {CardGroup} from "react-bootstrap";

const Features = (props) => {
  return (
      <div
          style={{
            background: '#212539',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center the "Yes" text vertically
            alignItems: 'center', // Center the "Yes" text horizontally
            color: '#F5F5DC',
          }}
      >
        <div style={{ fontSize: '2rem', marginBottom: "5rem"}}>Yes</div>
        <CardGroup id={"features"} style={{height:"25rem"}}>
          <Card bg="dark" style={{ width: 'auto',color:'#F5F5DC' }} >
            <Card.Body>
              <Card.Title>Frontend</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" style={{ width: 'auto',color:'#F5F5DC' }}>
            <Card.Body>
              <Card.Title>Backend</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" style={{ width: 'auto',color:'#F5F5DC' }}>
            <Card.Body>
              <Card.Title>Uniqueness</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
  );
}

export default Features;