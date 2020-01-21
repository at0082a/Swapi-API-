import React, {Component} from "react";
import PlanetCard from "./PlanetCard";

export default class PlanetList extends React.Component {
  render () {
    return (
      <div className="planet-list item-list mb-3">
        { this.props.planets.map((item, i) => {
           return (
            <div key={i}>
              <PlanetCard name={item.name}/>
            </div>
           )
         }) 
        }   
      </div>
    )
  }
}