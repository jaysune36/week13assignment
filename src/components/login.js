import React from "react";
import Nav from "./nav";
import LoginForm from "./formLogin";

export default class Login extends React.Component {
  render() {
    return (
     <div>
      <Nav />
      <div className="container">
        <LoginForm />
      </div>
     </div>
    )
  }
} 