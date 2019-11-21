import React, { Component } from 'react';
import "./Owner.css"
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./gold-man.jpg')} alt="Doberman Pinscher Owner" />
          </picture>
          <h3>Owner: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Breed Owned: {this.props.owner.breed}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
          <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;