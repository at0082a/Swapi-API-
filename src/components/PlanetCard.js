import React from "react";
import '../styles/card.css';
import arid from "../images/desert.jpg"
import frozen from "../images/frozen.jpg";
import temperate from "../images/grass.jpg";
import palmTree from "../images/palmtree.jpg";

export default class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planet: "",
      residents: [],
      avatar: '',
      alt: 'planet'
    };
  }

  async componentDidMount() {
    Promise.all(
      this.props.residents.map(url =>
        fetch(url)
          .then(res => res.json())
          .then(obj => obj.name)
      )
    ).then(residents => {
      this.setState({
        residents: [].concat(...residents)
      });
    });

    if (this.props.climate.includes("arid")) {
      this.setState({avatar: arid});
    } else if (this.props.climate.includes("frozen")) {
      this.setState({avatar: frozen});
    } else if (this.props.climate.includes("tropical")) {
      this.setState({avatar: palmTree});
    } else {
      this.setState({avatar: temperate});
    }
  }

  render () {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">
          <div className="header-text">
            <h4 className="card-text-center"> {this.props.name} </h4>
            <h6 className="card-subtitle mb-2">{this.props.climate}</h6>
          </div>
          <div className="avatar">
            <img className="avatar-image" src={this.state.avatar} alt={this.state.alt}/>
          </div>
        </div>
        <div className="item-info container-fluid">
          <div className="row">
            <div className="col-sm">
              <p> Rotation Period: {this.props.rotation_period} hrs </p>
              <p> Population: {this.props.population}</p>
              <p> Diameter: {this.props.diameter} km </p>
            </div>
            <div className="col-sm">
             {
               this.state.residents.length === 0 ?
                <p> Residents: N/A </p>
               :
                <div>
                  <p> {this.state.residents[0]} </p>
                  <p> {this.state.residents[1]} </p>
                  <p> {this.state.residents[2]} </p>
                </div>
             }
            </div>
            {/* <div className="col-sm">
              Movies
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}