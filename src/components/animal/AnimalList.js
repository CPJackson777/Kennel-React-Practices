//  PURPOSE: Initiate the AnimalManager getAll() call, hold on to the returned data, and then render the <AnimalCard /> component for each animal. When the data is returned, we can hold on to it by placing it in the component's state.


import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: [],
  }

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll()  //If using this with generic fetch call, plug in parameter like this = AnimalManager.getAll('animals')
      .then((animalsArray) => {
        this.setState({
          animals: animalsArray
        })
      })
  }

  deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => {
        AnimalManager.getAll()
          .then((newAnimals) => {
            this.setState({
              animals: newAnimals
            })
          })
      })
  }

  render() {
    console.log("AnimalList: Render");

    return (
      <React.Fragment>
        {/*add this button above your display of animal cards*/}
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>
            Admit Animal
          </button>
        </section>
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default AnimalList