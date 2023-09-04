// importing React to render JSX methods
import React from "react";
// importing Nav and LoginForm components to be used in JSX markup
import Nav from "./nav";
import LoginForm from "./formLogin";

// creating and exporting Login class to be used on index.js file to be rendered on user screen
export default class Login extends React.Component {
  render() {
    return (
      // Using Nav and LoginForm JSX for HTML markup and installed Bootstrap for stylings
     <div>
      <Nav />
      <div className="container">
        <LoginForm />
      </div>
     </div>
    )
  }
} 