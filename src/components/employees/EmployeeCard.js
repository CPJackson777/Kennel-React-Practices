import React, { Component } from 'react';
import "./Employee.css"
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Evan.jpg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Position: {this.props.employee.Position}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Terminate</button>
          <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;