//ChildComponent.js
import React, { Component } from 'react';
import { string, func } from 'prop-types';

export default class ChildComponent extends Component {
  static propTypes = {
    label: string,
    onSubmit: func.isRequired
  };

  static defaultProps = {
    label: 'I’m your son'
  };

  onClick = () => this.props.onSubmit(this.props.label);

  render() {
    const { label } = this.props;
    return (
      <div className="container">
        <button onClick={this.onClick}>{label}</button>
      </div>
    );
  }
}
