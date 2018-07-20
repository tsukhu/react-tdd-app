import React from 'react';
import { shallow } from 'enzyme';
import ChildComponent from './ChildComponent';

const onSubmitSpy = jest.fn();

const wrapper = shallow(<ChildComponent onSubmit={onSubmitSpy} />);
let container, containerButton;

describe('ChildComponent', () => {
  beforeEach(() => {
    container = wrapper.find('div');
    containerButton = container.find('button');
    onSubmitSpy.mockClear();
  });

  it('should have a <div>', () => {
    expect(container).toHaveLength(1);
  });

  it('should have a <div> with properly className prop', () => {
    expect(container.props().className).toEqual('container');
  });

  it('should have a <Button>', () => {
    expect(containerButton).toHaveLength(1);
  });

  it('should call onSubmit', () => {
    expect(onSubmitSpy).not.toHaveBeenCalled();
    containerButton.simulate('click');
    expect(onSubmitSpy).toHaveBeenCalled();
    expect(onSubmitSpy).toHaveBeenCalledWith('I’m your son');
  });
});
