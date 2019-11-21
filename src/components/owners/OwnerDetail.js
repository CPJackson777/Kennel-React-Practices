import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

  state = {
      name: "",
      breed: "",
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        breed: owner.breed
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./gold-man.jpg')} alt="Pic of Owner" />
          </picture>
            <h3>Owner: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed Owned: {this.state.breed}</p>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;