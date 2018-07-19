import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  shallow(<Button />);
});
