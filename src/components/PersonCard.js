import React, {Component} from "react";
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
      alt: "woman"
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
    } else if (this.props.gender === "n/a") {
      this.setState({avatar: droid});
    }
  }

  render () {
    const films = this.state.films.map((item, i)=> {
      return (
        <li key={i}> {item} </li>
      )
    })
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
        <div className="container-fluid">
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
              Movies
            </div>
          </div>
        </div>
      </div>

    // <div className="card">
    //   <div className="card-header">
    //     <ul className="nav nav-tabs card-header-tabs" id="person-details" role="tablist">
    //       <li className="nav-item">
    //         <a className="nav-link active" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link"  href="#history" role="tab" aria-controls="history" aria-selected="false">Movies</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className= "card-body">
    //     <h4 className="card-title"> {this.props.name} </h4>
    //     <h6 className="card-subtitle mb-2">Homeworld: {this.state.planet}</h6>
        
    //     <div className="tab-content mt-3">
    //       <div className="tab-pane active" id="description" role="tabpanel">
    //         <p className="card-text"> Species: {this.state.species} </p>
    //       </div>
          
    //       <div className="tab-pane" id="movies" role="tabpanel" aria-labelledby="history-tab">  
    //         {films}
    //       </div>
          
    //       <div className="tab-pane" id="deals" role="tabpanel" aria-labelledby="deals-tab">
    //         <p className="card-text">Immerse yourself in the colours, aromas and traditions of Emilia-Romagna with a holiday in Bologna, and discover the city's rich artistic heritage.</p>
    //         <a href="#" className="btn btn-danger btn-sm">Get Deals</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
 }
}