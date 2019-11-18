import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Evan.jpg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-employeename">Edward Scissorhands</span></h3>
          <p>Position: Lead Groomer</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;