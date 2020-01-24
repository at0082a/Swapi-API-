import React from "react";
import '../styles/card.css';
import dstar from "../images/deathstar.jpg";
import falcon from "../images/millFalcon.jpg";

export default class Ship extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planet: "",
      films: [],
      avatar: '',
      alt: 'planet'
    };
  }

  async componentDidMount() {
    Promise.all(
      this.props.films.map(url =>
        fetch(url)
          .then(res => res.json())
          .then(obj => obj.title)
      )
    ).then(films => {
      this.setState({
        films: [].concat(...films)
      });
    });

    if (this.props.position % 2 === 0) {
      this.setState({avatar: dstar});
    } else {
      this.setState({avatar: falcon});
    } 
  }

  render () {
    return (
      <div className="card">
        <div className="card-header bg-danger text-white">
          <div className="header-text">
            <h4 className="card-text-center"> {this.props.name} </h4>
            <h6 className="card-subtitle mb-2">{this.props.model}</h6>
          </div>
          <div className="avatar">
            <img className="avatar-image" src={this.state.avatar} alt={this.state.alt}/>
          </div>
        </div>
        <div className="item-info container-fluid">
          <div className="row">
            <div className="col-sm">
              <div>
                <p> Cost: {this.props.cost} credits </p>
                <p> Passengers: {this.props.passengers}</p>
                <p> HyperDrive: {this.props.hyperdrive_rating}</p>
              </div>
            </div>
            <div className="col-sm">
              <div>
                <p> {this.state.films[0]} </p>
                <p> {this.state.films[1]} </p>
                <p> {this.state.films[2]} </p>
              </div>
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