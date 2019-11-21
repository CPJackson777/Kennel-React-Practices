import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';


class EmployeeDetail extends Component {

  state = {
      name: "",
      Position: "",
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        Position: employee.Position
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Evan.jpg')} alt="Edward" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Position: {this.state.Position}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;