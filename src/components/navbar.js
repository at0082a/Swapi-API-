import React from "react";
import "../styles/navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-light bg-primary">
          <span className="navbar-brand h1 text-white">Swapi Skywalker</span>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-primary">
          <span className="navbar-brand"> Swapi Skywalker </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}