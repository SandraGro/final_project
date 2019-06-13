import React, { Component } from "react";
import './Title.css'


class Title extends Component {
  
  render() {
    return (
      <div className="title-restaurants">
        <p>{this.props.titulo}</p>
      </div>
    )
  }
}

export default Title;
