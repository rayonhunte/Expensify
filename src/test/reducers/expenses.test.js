import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state',()=>{
  const state = expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});


test('should add expense',()=>{
  const expense = {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createAt: 0
  };
  const addResult  = expensesReducer (expenses,{type:'ADD_EXPENSE', expense});
  expect(addResult).toEqual([
    ...expenses, expense
  ]);
});

test('should remove expense by id',()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0], expenses[2]
  ]);
});

test('should not remove expense if id not found',()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 12
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});




test('should not edit expense if id not found',()=>{
  const amount = 122000;
  const action = {
    type:'EDIT_EXPENSE', 
    id:12,
    updates:{
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(state);
});


test('should remove expense',()=>{

});