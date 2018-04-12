import React, { Component } from 'react';

class HelloBox extends Component {
  render(props) {
    return (
      <div className="box">
        <p>Hello {this.props.name} </p>
      </div>
    );
  }
}

export default HelloBox;
