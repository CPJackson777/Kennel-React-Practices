import React, { Component } from 'react';
import "./Location.css"
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./${this.props.location.locationPic}`)} alt="Kennel" /> {/*???? Ask about "s"*/}
          </picture>
          <h3>Name: <span className="card-locationname">{this.props.location.name}</span></h3>
          <p>Location: {this.props.location.Address}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Location</button>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;
