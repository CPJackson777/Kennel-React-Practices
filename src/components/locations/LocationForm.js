import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        Address: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location object, invoke the LocationManager post method, and redirect to the full location list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "" || this.state.Address === "") {
            window.alert("Please input an location name and Address");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName,
                Address: this.state.Address,
            };

            // Create the location and redirect user to location list
            LocationManager.post(location)
            .then(() => this.props.history.push("/locations"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="locationName"
                        placeholder="Location name"
                        />
                        <label htmlFor="locationName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="Address"
                        placeholder="Address"
                        />
                        <label htmlFor="Address">Address</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default LocationForm