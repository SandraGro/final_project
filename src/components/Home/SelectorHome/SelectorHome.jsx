import React from "react";
import { Card, CardDeck } from 'react-bootstrap';
import Link from 'react-router-dom/Link';
import './SelectorHome.css';

const SelectorHome = () => (
  <div className="padd">
    <p className="title">¿Qué estás buscando?</p>
    <CardDeck>
      <Card>
      <Link className="links" to ="./breakfast" >
<Card.Img variant="top" src="/assets/breakfast2.jpg" />
        <Card.Footer>
          <Card.Title className="category">Breakfast</Card.Title>
        </Card.Footer>
      </Link>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/lunch1.jpg" />
        <Card.Footer>
          <Card.Title className="category">Lunch</Card.Title>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/dinner1.jpeg" />
        <Card.Footer>
          <Card.Title className="category">Dinner</Card.Title>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/dessert3.jpg" />
        <Card.Footer>
          <Card.Title className="category">Dessert</Card.Title>
        </Card.Footer>
      </Card>
    </CardDeck>
  </div>
);

export default SelectorHome;
