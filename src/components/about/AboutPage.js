import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
        <div className="jumbotron">
            <h1>Pluralsing </h1>
            <p>React lasdasdasdasdasdasdas</p>
          <Link to="about" className="btn btn-primary btn-large"> Lear more </Link>
        </div>
      );
  }
}

export  default AboutPage;
