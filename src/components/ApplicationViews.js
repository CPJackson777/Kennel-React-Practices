import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'

//only include these once they are built - previous practice exercise
import LocationList from './locations/LocationList'
import LocationDetail from './locations/LocationDetail'
import LocationForm from './locations/LocationForm'
import OwnerList from './owners/OwnerList'
import OwnerDetail from './owners/OwnerDetail'
import EmployeeList from './employees/EmployeeList'
import EmployeeDetail from './employees/EmployeeDetail'

import Login from './auth/Login'


class ApplicationViews extends Component {

  // Check if credentials are in local storage (if user has logged in)
  //returns true/false


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // console.log(props)
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
            // history = {props.history}
            // match = {props.match}
            // location = {props.location}
            {...props}  // <-- easier way to spread the info in the 3 lines commented directly above
          />
        }} />

        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />


        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route path="/login" render={(props) => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
        {/*
        ^^^ The above route is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

        It will not handle the following URL because the `(\d+)`
        matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
        */}
        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
            {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />

        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} />
        }} />

        <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
        }} />

        

      </React.Fragment>
    )
  }
}

export default ApplicationViews