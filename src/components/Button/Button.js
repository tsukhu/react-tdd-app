import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <button>{this.props.text || 'OK'}</button>;
  }
}

export default Button;
