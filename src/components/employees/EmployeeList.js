//  PURPOSE: Initiate the EmployeeManager getAll() call, hold on to the returned data, and then render the <AnimalCard /> component for each animal. When the data is returned, we can hold on to it by placing it in the component's state.


import React, { Component } from 'react'
    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeeManager from '../../modules/EmployeeManager'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }

    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        EmployeeManager.getAll()  //If using this with generic fetch call, plug in parameter like this = EmployeeManager.getAll('employees')
        .then((employeesArray) => {
            this.setState({
                employees: employeesArray
            })
        })
    }

    render(){
        console.log("EmployeeList: Render");
      
        return(
          <div className="container-cards">
            {this.state.employees.map(employee =>
              <EmployeeCard key={employee.id} employee={employee} />
            )}
          </div>
        )
      }
}

export default EmployeeList