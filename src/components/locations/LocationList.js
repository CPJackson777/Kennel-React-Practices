//  PURPOSE: Initiate the AnimalManager getAll() call, hold on to the returned data, and then render the <AnimalCard /> component for each animal. When the data is returned, we can hold on to it by placing it in the component's state.


import React, { Component } from 'react'
    //import the components we will need
    import LocationCard from './LocationCard'
    import LocationManager from '../../modules/LocationManager'

    class LocationList extends Component {
        //define what this component needs to render
        state = {
            locations: [],
        }

    componentDidMount(){
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from LocationManager and hang on to that data; put it in state
        LocationManager.getAll()  //If using this with generic fetch call, plug in parameter like this = AnimalManager.getAll('location')
        .then((locationsArray) => {
            this.setState({
                locations: locationsArray
            })
        })
    }

    deleteLocation = id => {
      LocationManager.delete(id)
      .then(() => {
        LocationManager.getAll()
        .then((newLocations) => {
          this.setState({
              locations: newLocations
          })
        })
      })
    }

    render(){
        console.log("LocationList: Render");
      
        return(
          <div className="container-cards">
            {this.state.locations.map(location =>
              <LocationCard
              key={location.id}
              location={location}
              deleteLocation={this.deleteLocation}
            />
          )}
          </div>
        )
      }
}

export default LocationList