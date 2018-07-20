import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';

// describe what we are testing
describe('Login Component', () => {
  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(
      shallow(<Login />)
        .find('form.login')
        .exists()
    ).toBe(true);
  });

  it('renders a email input', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(1);
  });

  it('renders a password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1);
  });
});

describe('Email input', () => {
  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'blah@gmail.com' }
    });

    expect(wrapper.state('email')).toEqual('blah@gmail.com');
  });
});

describe('Password input', () => {
  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find('#password')
      .simulate('change', { target: { name: 'password', value: 'cats' } });

    expect(wrapper.state('password')).toEqual('cats');
  });
});

describe('Form submit', () => {
  it('should get the username password and call validate', () => {
    const validateUser = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(<Login validateUser={validateUser} />);
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'blah@gmail.com' }
    });

    wrapper
      .find('#password')
      .simulate('change', { target: { name: 'password', value: 'cats' } });
    wrapper.find('form.login').simulate('submit', { preventDefault() {} });

    expect(validateUser).toHaveBeenCalledTimes(1);
    expect(validateUser).toHaveBeenCalledWith({
      email: 'blah@gmail.com',
      password: 'cats'
    });
  });
});
