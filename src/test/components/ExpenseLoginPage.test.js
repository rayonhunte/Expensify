import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseLoginPage} from '../../components/ExpenseLoginPage';


let startLogin, wrapper;


beforeEach(()=>{
  startLogin = jest.fn();
  wrapper = shallow(<ExpenseLoginPage startLogin={startLogin}/>);
});


test('should render login', ()=>{
  expect(wrapper).toMatchSnapshot();
});





test('test login',()=>{
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalledWith();  
});