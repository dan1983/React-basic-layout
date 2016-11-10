import React from 'react';
import 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsing </h1>
        <p>React lasdasdasdasdasdasdas</p>
        <Link to="about" className="btn btn-primary btn-log">Learn more</Link>
      </div>
    )
  }
}

export  default HomePage;
