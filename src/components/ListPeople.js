import React, {Component} from "react";
import PersonCard from "./PersonCard";
import "../styles/listperson.css";

export default class PersonList extends Component {
  render () {
    return (
      <div className="person-list item-list mb-3">
        { this.props.people.map((item, i) => {
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
    )
  }
}