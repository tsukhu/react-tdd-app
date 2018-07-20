import React from 'react';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const { validateUser } = this.props;
    validateUser(this.state);
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input
          id="email"
          onChange={this.handleInputChange}
          name="email"
          type="text"
        />
        <label>Password</label>
        <input
          id="password"
          onChange={this.handleInputChange}
          name="password"
          type="password"
        />
        <button>Submit</button>
      </form>
    );
  }
}
export default Login;
