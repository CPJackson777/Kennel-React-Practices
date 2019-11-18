import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dogkennels2_orig.jpg')} alt="Kennel Location" />
          </picture>
          <h3>Name: <span className="card-locationname">Dog Houses of Nashville</span></h3>
          <p>Location: 321 Bark Ave, Nashville, TN 37201</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;