import React, { Component } from 'react';
import ListPeople from "./components/ListPeople";
import ListPlanets from "./components/ListPlanets";
import SearchPeople from "./components/SearchPeople";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
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
    Promise.all([
      fetch("http://localhost:3001/people", {
            mode: 'cors',
            headers: {
            'Content-Type' : 'application/json'
            }
        }),
      fetch("http://localhost:3001/planets", {
          mode: 'cors',
          headers: {
          'Content-Type' : 'application/json'
          }
      })
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => 
      this.setState({
        people:[...data1.data],
        planets: [...data2.data]
      })
    );
  }

  render () {
    console.log(this.state.planets)
    return (
      <main className="page bg-white">
        <Navbar/>
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
                </div>
              </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
