//  PURPOSE: Initiate the OwnerManager getAll() call, hold on to the returned data, and then render the <OwnerCard /> component for each owner. When the data is returned, we can hold on to it by placing it in the component's state.


import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from '../../modules/OwnerManager'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        }

    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from OwnerManager and hang on to that data; put it in state
        OwnerManager.getAll()  //If using this with generic fetch call, plug in parameter like this = OwnerManager.getAll('owners')
        .then((ownersArray) => {
            this.setState({
                owners: ownersArray
            })
        })
    }

    deleteOwner = id => {
      OwnerManager.delete(id)
      .then(() => {
        OwnerManager.getAll()
        .then((newOwners) => {
          this.setState({
              owners: newOwners
          })
        })
      })
    }

    render(){
        console.log("OwnerList: Render");
      
        return(
          <div className="container-cards">
            {this.state.owners.map(owner =>
              <OwnerCard
              key={owner.id}
              owner={owner}
              deleteOwner={this.deleteOwner}
            />
          )}
          </div>
        )
      }
}

export default OwnerList