import React, { Component } from 'react';
import HelloBox from './HelloBox';

class MyComponent extends Component {

  constructor() {
    super();

    this.state = {
      name : '',
      clicked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({clicked: true});
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>

        { this.state.clicked ? <HelloBox name={this.state.name}/> : ''}


      </div>
    );
  }
}

export default MyComponent;
