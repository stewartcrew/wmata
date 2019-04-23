import React from 'react';

import './TrainStatus.scss';

class TrainStatus extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mt-4">{this.props.locationName}</h2>
        <div className="row">
          {this.props.trains.map((train, i) => (
            <div className="col-lg-4 p-2">
              <div key={`train-${i}`} className="results-group p-3 border rounded">
                <div className="row">
                  <div className="col-8 my-auto">
                    <span className={`train-line line-${train.Line}`}></span>

                    {train.Car > 1 ?
                      <small>{train.Car} cars</small>
                      :
                      <small>&nbsp;</small>
                    }

                    <h5 className="m-0">{train.DestinationName}</h5>
                  </div>

                  <div className="col-4 wait-time my-auto">
                    <h1 className="mb-0">{train.Min}</h1>

                    {train.Min > 1 &&
                      <p>minutes</p>
                    }

                    {train.Min === '1' &&
                      <p>minute</p>
                    }

                  </div>

                </div>
              </div>
            </div>
          ))}

      </div>
    </div>
    )
  }
}

export default TrainStatus
