import React, { Component } from 'react';
import "./Location.css"

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dogkennels2_orig.jpg')} alt="Kennel Location" />
          </picture>
          <h3>Name: <span className="card-locationname">{this.props.location.name}</span></h3>
          <p>Location: {this.props.location.Address}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;