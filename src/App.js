import React from 'react';
import './App.scss';

import Form from './components/Form'
import TrainStatus from './components/TrainStatus';

const API_KEY = "4b0ca3f8ad474e96a26cf490f339346d";

class App extends React.Component {
  state = {
    trains: [],
    locationName: undefined
  }
  getTrainStatus = async (e) => {
    e.preventDefault();
    const station = e.target.elements.station.value;
    const api_call = await fetch(`https://api.wmata.com/StationPrediction.svc/json/GetPrediction/${station}?api_key=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      trains: data.Trains,
      locationName: data.Trains[0].LocationName
    });
  }
  render() {
    return (
      <div>
        <h2>Which station are you interested in?</h2>
        <Form getTrainStatus={this.getTrainStatus} />
        <TrainStatus trains={this.state.trains} locationName={this.state.locationName} />
      </div>
    );
  }
}

export default App;
