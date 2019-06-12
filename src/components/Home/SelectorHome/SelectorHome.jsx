import React from "react";
import { Card, CardDeck } from 'react-bootstrap';
import { Redirect } from 'react-router-dom/';
// import Link from 'react-router-dom/Link';
import './SelectorHome.css';

const SelectorHome = () => (
  <div className="padd">
    <p className="title">¿Qué estás buscando?</p>
    <CardDeck>
      {/* <Link to ="/"> */}
      <Card>
<Card.Img variant="top" src="/assets/breakfast2.jpg" onClick = {<Redirect to="/list" />}/>
        <Card.Footer>
          <Card.Title className="category">Breakfast</Card.Title>
        </Card.Footer>
      </Card>
      {/* </Link> */}
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