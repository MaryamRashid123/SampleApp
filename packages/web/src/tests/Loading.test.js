import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../components/Loading/Loading';

Enzyme.configure({ adapter: new Adapter() });
describe('Loading Test', () => {
  it('Text in loading component div', () => {
    const wrapper = shallow(<Loading />);
    const div = wrapper.find('div');
    expect(div.text()).toBe('Loading...');
  });
});
