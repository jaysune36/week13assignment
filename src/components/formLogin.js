// importing React to render JSX methods
import React from "react";

// creating and exporting LoginForm class to be used on other component files
export default class LoginForm extends React.Component {
  render() {
    return (
      // Using JSX for HTML markup and installed Bootstrap for stylings
      <div className="login">
        <h3>Login</h3>
      <form className="border border-primary-subtle p-4">
      <label for="userName" className="form-label">Username</label>
      <input type="text" id="userName" className="form-control" name="userName"></input>
      <label for="password" id="form-label">Password</label>
      <input type="text" id="password" className="form-control" name="password"></input>
    </form>
      </div>
    )
  }
}