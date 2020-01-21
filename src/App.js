import React, { Component } from 'react';
import ListPeople from "./components/ListPeople";
import ListPlanets from "./components/ListPlanets";
import SearchPeople from "./components/SearchPeople";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      people: []
    };
  }

  componentDidMount() { 
    fetch("http://localhost:3001/people", {
          mode: 'cors',
          headers: {
          'Content-Type' : 'application/json'
          }
      })
        .then (res => res.json())
        .then(data => this.setState({
          people:[...data.data]
      }));
  }

  render () {
    console.log(this.state.people);
    return (
      <main className="page bg-white">
        <div className="container">
          <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  {/* <AddAppointment formDisplay={this.state.formDisplay} toggleForm={this.handleClick} addAppointment={this.addAppointment}/>
                  <SearchAppointment orderBy={this.state.orderBy} orderDirection={this.state.orderDirection} changeOrder={this.changeOrder} searchText={this.textChange}/>
                  <ListAppointment appointments={appointments} deleteAppointment={this.deleteAppointment} />  */}
                  {/* <SearchPeople/> */}
                  <ListPeople people={this.state.people}/>
                  {/* <ListPlanets/>  */}
                  <div>SWAPIIIII</div>
                </div>
              </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
