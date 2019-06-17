import React, { Component } from "react";
import { Card, CardGroup } from 'react-bootstrap';
import './ImagesRestaurant.css'


class ImagesRestaurant extends Component {
  render() {
    return (
      <>
        <br />
        <div className="images-rest">
          <CardGroup>
            {
              this.props.imgs.map((img) => {
                return <Card>
                  <Card.Img variant="top" src={img}/>
                </Card>
              })
            }
          </CardGroup>
        </div>
      </>

    );
  }
}

export default ImagesRestaurant;
