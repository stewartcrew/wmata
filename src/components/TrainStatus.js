import React from 'react';

import './TrainStatus.scss';

class TrainStatus extends React.Component {
  render() {
    return (
      <div className="row">
        <h2 className="mt-4 col-12">{this.props.locationName}</h2>
        {this.props.trains.map((train, i) => (
          <div key={`train-${i}`} className="results-group p-3 col-12 col-md-4">
            <div className="row">
              <div className="col-8">
                <span className={`train-line line-${train.Line}`}></span>
                <small>{train.Car} cars</small>
                <h5>{train.DestinationName}</h5>
              </div>
              <div className="col-4 wait-time">
                <h1 className="mb-0">{train.Min}</h1>
                <p>minutes</p>
              </div>
            </div>
          </div>
        ))}
        <small className="col-12 my-4">Data provided my Washington Metropolitan Area Transit Authority (<a href="https://www.wmata.com/" target="_blank" rel="noreferrer noopener">WMATA.com</a>)</small>
      </div>
    )
  }
}

export default TrainStatus
