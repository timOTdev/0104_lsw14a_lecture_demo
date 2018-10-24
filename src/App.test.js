import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders an h1 with a display class', () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find('h1.display');

    expect(elements.length).toBe(1);
  });

  it('should be "off" by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.isOn).toBe(false);
  });

  it('should have a toggle button', () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find('button.toggle-btn');

    expect(elements.length).toBe(1);
  });

  it('should display the state of the switch', () => {
    const wrapper = shallow(<App />);

    const display = wrapper.find('h1.display');

    expect(display.text()).toBe('Off');
  });

  describe('toggle button', () => {
    it('should toggle state on click', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      // it's off by default
      const button = wrapper.find('button.toggle-btn');

      button.simulate('click');
      expect(instance.state.isOn).toBe(true);

      button.simulate('click');
      expect(instance.state.isOn).toBe(false);
    });
  });
});

/*
- does it render?
- does it render the right UI React(data?) => UI
- check/access/change state
- check/access/change props
- fire events

Specs
- should be "off" by default
- should have a toggle button
- clicking the toggle button should toggle the switch
- should display the correct state (on/offf) of the switch
*/
