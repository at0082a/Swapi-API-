import React from "react";

export default class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planet: "",
      species: "",
      films: []
    };
  }
  render () {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-text-center"> {this.props.name} </h4>
          <h6 className="card-subtitle mb-2">{this.state.planet}</h6>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <p> Species: {this.state.species} </p>
              <p> Height: {this.props.height} cm </p>
              <p> Weight: {this.props.mass} kg</p>
            </div>
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      </div>
    )
  }
}