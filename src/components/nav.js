import React from "react";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
         <nav className="navbar-light bg-warning-subtle p-2">
          <ul className="navbar-nav" id="navBar">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Biography</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
      </nav>
      </div>
     
    )
  }
}
