import React, {Component} from "react";
import ShipCard from "./ShipCard";

export default class ShipList extends React.Component {
  render () {
    return (
      <div className="planet-list item-list mb-3">
        { this.props.starships.map((item, i) => {
           return (
            <div key={i}>
              <ShipCard 
                name={item.name}
                position= {i}
                model={item.model}
                passengers={item.passengers}
                hyperdrive_rating={item.hyperdrive_rating}
                cargo_capacity={item.residents}
                films={item.films}
                cost={item.cost_in_credits}
                diameter={item.diameter}
              />
            </div>
           )
         }) 
        }   
      </div>
    )
  }
}