// importing React to render JSX methods
import React from "react";

// creating and exporting Nav class to be used on other component files
export default class Nav extends React.Component {
  render() {
    return (
      // Using JSX for HTML markup and installed Bootstrap for stylings
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
