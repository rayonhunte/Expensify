import React from 'react';
import {shallow} from 'enzyme'; 
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import { addExpense } from '../../actions/expenses';

let editExpense, removeExpense, history, wrapper; 

beforeEach(()=>{
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper =  shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[0]}/>);
});


test('should render EditExpense page correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});


test('should remove expense by id',()=>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(removeExpense).toHaveBeenCalledWith({id:expenses[0].id});
});

test('should handle onSubmit', ()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
});