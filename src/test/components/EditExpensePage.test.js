import React from 'react';
import {shallow} from 'enzyme'; 
import {EditExpensePage} from '../../components/EditExpensePage';


let editExpense, removeExpense, history, wrapper; 

beforeEach(()=>{
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper =  shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history}/>);
});


test('should render EditExpense page correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});
