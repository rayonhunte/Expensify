//react-test-render
import React from 'react';
import { shallow } from 'enzyme'
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json'


test('should render header', ()=>{
  const wrapper = shallow(<Header/>)
  expect(wrapper).toMatchSnapshot();
} )