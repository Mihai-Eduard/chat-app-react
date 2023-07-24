import React from 'react';
import Card from "react-bootstrap/Card";
import {CardGroup} from "react-bootstrap";

const Features = (props) => {
  return (
      <div>
        <div bg="dark" style={{height: "200px"}}>
          Yes
        </div>
        <CardGroup>
          <Card bg="dark" style={{ width: '18rem' }} text="light">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" style={{ width: '18rem' }} text="light">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" style={{ width: '18rem' }} text="light">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
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