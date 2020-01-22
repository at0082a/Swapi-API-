import React from "react";
import "../styles/navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">
          <span className="navbar-brand mb-1 h1 text-white">Swapi Skywalker</span>
        </nav>
      </div>
    )
  }
}