import React, { Component } from 'react';
import ListPeople from "./components/ListPeople";
import ListPlanets from "./components/ListPlanets";
import ListStarships from "./components/ListStarships";
// import SearchPeople from "./components/SearchPeople";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import './App.css';
import './styles/buttons.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      people: [],
      ships: [],
      searchText: '',
      list: 'Characters'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() { 
      Promise.all([
        fetch("http://localhost:3001/people?page=1", {
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
        }),
        fetch("http://localhost:3001/starships", {
                mode: 'cors',
                headers: {
                'Content-Type' : 'application/json'
              }
        })
      ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([data1, data2, data3]) => 
        this.setState({
          people:[...data1.data],
          planets: [...data2.data],
          ships: [...data3.data]
        })
      );
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({list: event.target.value});
  }

  render () {
    console.log(this.state.list);
    return (
      <main className="page bg-white">
        <Navbar/>
        <div className="container">
          <div className="row">
                <div className="col-md-12 bg-white">
                  <div className="container">
                    <div className="app-buttons">
                      <input className="button btn btn-dark" type="button" value="Planets" onClick={this.handleClick}/> 
                      <input className="button btn btn-info" type="button" value="Characters" onClick={this.handleClick}/> 
                      <input className="button btn btn-warning" type="button" value="Starships" onClick={this.handleClick}/>
                    </div>
                    { this.state.people.length < 10 ?
                      <div id="loader"></div>
                      :
                      <div className="swap-lists">
                        { this.state.list === "Characters" ?
                          <ListPeople people={this.state.people}/>
                          : this.state.list === "Planets"
                          ?
                          <ListPlanets planets={this.state.planets}/> :
                          <ListStarships starships={this.state.ships}/>
                        }
                      </div>
                    }
                  </div>
                </div>
          </div>
        </div>
        <div className="footer bg-primary">
        </div>
      </main>

    );
  }
}

export default App;
