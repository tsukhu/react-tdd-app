import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<Button />);
});

it('should match the snapshot', () => {
  const component = renderer.create(<Button />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
