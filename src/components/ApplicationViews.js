import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './locations/LocationCard'
import OwnerCard from './owners/OwnerCard'
import EmployeeCard from './employees/EmployeeCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalCard />
        }} />
        <Route path="/locations" render={(props) => {
          return <LocationCard />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeCard />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews