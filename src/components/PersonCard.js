import React from "react";
import '../styles/card.css';
import female from '../images/newwoman.jpg';
import male from '../images/man.jpg';
import droid from '../images/robot.jpg';

export default class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planet: "",
      species: "",
      films: [],
      avatar: female,
      alt: "gender"
    };
  }

  async componentDidMount() {
    //grab homeworld and species
    Promise.all([
      fetch(this.props.homeworld),
      fetch(this.props.species)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => 
    this.setState({
        planet: data1.name, 
        species: data2.name,
    }));

    //grab all movies
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
    
    if (this.props.gender === "female") {
      this.setState({avatar: female});
    } else if (this.props.gender === "male") {
      this.setState({avatar: male});
    } else {
      this.setState({avatar: droid});
    }
  }

  render () { 
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">
          <div className="header-text">
            <h4 className="card-text-center"> {this.props.name} </h4>
            <h6 className="card-subtitle mb-2">{this.state.planet}</h6>
          </div>
          <div className="avatar">
            <img className="avatar-image" src={this.state.avatar} alt={this.state.alt}/>
          </div>
        </div>
        <div className="item-info container-fluid">
          <div className="row">
            <div className="col-sm">
              <p> Species: {this.state.species} </p>
              <p> Height: {this.props.height} cm </p>
              <p> Weight: {this.props.mass} kg</p>
            </div>
            <div className="col-sm">
              <p> Birth Year: {this.props.birthYear} </p>
              <p> Eye Color: {this.props.eyeColor} </p>
              <p> Hair Color: {this.props.hair} </p>
            </div>
            <div className="col-sm">
              <p> {this.state.films[0]} </p>
              <p> {this.state.films[1]} </p>
              <p> {this.state.films[2]} </p>
            </div>
          </div>
        </div>
      </div>
  )
 }
}