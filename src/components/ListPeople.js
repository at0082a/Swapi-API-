import React, {Component} from "react";
import PersonCard from "./PersonCard";
// import "../styles/listperson.css";

export default class PersonList extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      text: ''
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange(event) {
    this.setState({text: event.target.value.substr(0, 20)});
  }

  render () {
    console.log(this.state.text);
    let filteredPeople = this.props.people.filter((character) => {
        return (
          character.name.indexOf(this.state.text) !== -1
        );
      }
    );
    return (
      <div>
        <div className="row justify-content-center my-4">
          <div className="col-md-8">
            <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Characters"
              onChange={this.textChange}
            />
            </div>
          </div>
        </div>
        <div className="person-list item-list mb-3">
          { filteredPeople.map((item, i) => {
            return (
              <div key={i}>
                <PersonCard 
                  name={item.name}
                  height={item.height}
                  mass={item.height}
                  created={item.created}
                  hair={item.hair_color}
                  homeworld={item.homeworld}
                  species={item.species}
                  films={item.films}
                  gender={item.gender}
                  birthYear={item.birth_year}
                  eyeColor={item.eye_color}
                />
              </div>
             )
           }) 
          }   
        </div>
      </div>
    )
  }
}