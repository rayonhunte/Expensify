import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';

const expense = {
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createAt: 0
};


test('should render expense form',()=>{
  const wrapper  = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});


test('should render expense form with data',()=>{
  const wrapper  = shallow(<ExpenseForm  expense={expense}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid data',()=>{
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});


test('should set description on input change',()=>{
  const value = 'Gum';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('description')).toBe(value);
});


test('should set note on text area',()=>{
  const value = 'this is a note';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('textarea').simulate('change',{
    target: {value}
  });
  expect(wrapper.state('note')).toBe(value);
});


test('should set amount if valid',()=>{
  const value = '23.50';
  const  wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change',{ 
    target:{value}
  });
  expect(wrapper.state('amount')).toBe(value);
});



test('should not set amount if invalid',()=>{
  const value = '12.122';
  const  wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change',{ 
    target:{value}
  });
  expect(wrapper.state('amount')).toBe("");
});


test('should call onSubmit props for valid form submission',()=>{
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: 'Gum',
    note: '',
    amount: 195,
    createAt: 0
  });
});


test('should set new date on date change',()=>{
  const now = moment();
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createAt')).toEqual(now);
});

test('should set  on focused change',()=>{
  const value = true;
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:value});
  expect(wrapper.state('calendarFocused')).toBe(value);
});
