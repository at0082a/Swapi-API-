import React, {Component} from "react";
import PersonCard from "./PersonCard";

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
              />
            </div>
           )
         }) 
        }   
      </div>
    )
  }
}