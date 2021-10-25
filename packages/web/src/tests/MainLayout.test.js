import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import MainLayout from '../components/MainLayout/MainLayout';

const mockStore = configureMockStore();
const store = mockStore({});

Enzyme.configure({ adapter: new Adapter() });
describe('Main Layout Test', () => {
  it('Rending Main Layout', () => {
    const wrapper = shallow(
                              <MainLayout />
                      );
    const Layout = wrapper.find('MainLayout');
    expect(Layout.exists()).toBe(false);
  });
});
