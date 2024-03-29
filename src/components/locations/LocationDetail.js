import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';


class LocationDetail extends Component {

  state = {
      name: "",
      location: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        location: location.Address,
        loadingStatus: false
      });
    });
  }

  //invoke the delete function in LocationManger and re-direct to the location list.
  handleDelete = () => {
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/animals"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dogkennels2_orig.jpg')} alt="Kennel" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.location}</p>
            <button type = "button" disabled = {this.state.loadingStatus} onClick = {this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;