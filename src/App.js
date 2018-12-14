//
// import React from 'react';
//
//
// const App = props => (
//   <div> " hiu "</div>
// );
//
//
// function componentDidMount() {
//   fetch('http://api.open-notify.org/astros.json')
//     .then(response => response.json())
//     .then(console.log())
// }
//
// export default App;

import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data.people
        })
      })
  }

  render() {
    return (
      <div>{this.state.people.map(person => {
        return <div> <h1> {person.name}</h1> <h2>{person.craft}</h2> </div>
      })}</div>
    );
  }
}
