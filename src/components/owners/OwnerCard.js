import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./gold-man.jpg')} alt="Doberman Pinscher Owner" />
          </picture>
          <h3>Owner: <span className="card-ownername">Prince Goldlink</span></h3>
          <p>Breed Owned: Doberman</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;