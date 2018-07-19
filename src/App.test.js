import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM should only be used for functionality, not for testing purposes.
  // Use enzyme instead
  ReactDOM.render(<App />, div);
  expect(ReactDOM.unmountComponentAtNode(div)).toEqual(true);
});

it('should render the button correctly', () => {
  const wrapper = mount(<App />);
  const buttonText = 'Press';
  expect(wrapper.contains(buttonText)).toEqual(true);
});
