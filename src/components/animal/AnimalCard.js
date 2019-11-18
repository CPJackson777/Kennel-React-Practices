import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./doberman.jpg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">Jagger</span></h3>
          <p>Breed: Doberman Pinscher</p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;