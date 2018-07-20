import React, { Component } from 'react';
import ChildComponent from '../../components/ChildComponent/ChildComponent';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.label = 'I’m your father';
  }

  onSubmit = option => (option === 'I’m your father' ? 'cool' : 'not cool');

  render() {
    return (
      <div className="container">
        <ChildComponent label={this.label} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
