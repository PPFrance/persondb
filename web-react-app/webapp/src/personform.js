import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'


class PersonForm extends Component {
    constructor() {
        super();
        this.state = {
            person_name: '',
            person_country: '',
        };
    }

    onChange = (e) => {
         this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { person_name, person_country } = this.state;

        axios.post('http://localhost:5000/person', { 'name': person_name, 'iso_country': person_country.substring(0,2) } ).then((result) => {});
    }

    render() {
        const { person_name, person_country } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
           
                <input
                type="text"
                name="person_name"
                placeholder="Name"
                value={person_name}
                onChange={this.onChange}
                />
            
                <input
                type="text"
                name="person_country"
                placeholder="Country code (2chars!)"
                value={person_country}
                onChange={this.onChange}
                />

                <button type="submit">Submit</button>

            </form>
       );
     }
 }

 export default PersonForm;
 