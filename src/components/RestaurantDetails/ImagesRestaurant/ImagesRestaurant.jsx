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
            { this.props.imgs &&
              this.props.imgs.split(",").map((img) => {
                return <Card>
                  <Card.Img variant="top" src={img.trim()}/>
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
