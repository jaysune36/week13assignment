import React from "react";

export default class LoginForm extends React.Component {
  render() {
    return (
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