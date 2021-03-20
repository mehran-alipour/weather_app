import React, { Component } from 'react';

import { SearchBox } from './components/search-box/search-box.component';
import { Weather } from './components/weather/weather.component';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
      weather: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ cityName: event.target.value.toLowerCase() });
  }
  handleSubmit(event) {
    fetch('/api/location/search/?query=' + this.state.cityName, { method: 'GET' })
      .then(response => response.json())
      .then(async (data) => {
        try {
          fetch('/api/location/' + data[0].woeid + "/", { method: 'GET' })
            .then(response => response.json())
            .then(data => this.setState({ weather: data }))
        }
        catch (error) {
          console.error(error);
        }
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      });



    //getwoeid(this.state.cityName);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <SearchBox
          placeholder="Search for City"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        {this.state.weather.length === 0 ?
          (<div></div>)
          :
          (<Weather info={this.state.weather} />)
        }
      </div >
    )
  }
}

export default App;
