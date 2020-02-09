import React from "react";
import PlanetCard from "./PlanetCard";

export default class PlanetList extends React.Component {
  render () {
    return (
      <div className="planet-list item-list mb-3">
        { this.props.planets.map((item, i) => {
           return (
            <div key={i}>
              <PlanetCard 
                name={item.name}
                rotation_period={item.rotation_period}
                climate={item.climate}
                population={item.population}
                residents={item.residents}
                films={item.films}
                diameter={item.diameter}
                orbital={item.orbital_period}
                water= {item.surface_water}
                terrain= {item.terrain}
              />
            </div>
           )
         }) 
        }   
      </div>
    )
  }
}