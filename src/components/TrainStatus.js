import React from 'react';

import './TrainStatus.scss';

class TrainStatus extends React.Component {
  render() {
    return (
      <div className="row">
        <h2 className="mt-4 col-12">{this.props.locationName}</h2>
        {this.props.trains.map((train, i) => (
          <div key={`train-${i}`} className="results-group my-4 col-4">
            <span className={`train-line line-${train.Line}`}></span>
            <div>Destination: {train.DestinationName}</div>
            <div>{train.Car}-car train</div>
            <div>{train.Min} mins away</div>
          </div>
        ))}
        <small className="col-12">Data provided my Washington Metropolitan Area Transit Authority (<a href="https://www.wmata.com/" target="_blank" rel="noreferrer noopener">WMATA.com</a>)</small>
      </div>
    )
  }
}

export default TrainStatus
