import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense ,addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object',()=>{
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  });
});


test('should setup edit expense action object', ()=>{
  const action = editExpense('123abc',{note:'i will pay this bill'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates: {note:'i will pay this bill'}
  });
});


test('should setup add expense action object with provided values', ()=>{
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: expenses[0]
  });  
});


test('should add expense to db and store', (done)=>{
  const store = createMockStore({});
  const expenseData = {
    description: 'Gum',
    note: '',
    amount: 195,
    createAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense to with defaults to db and store', (done)=>{
  const store = createMockStore({});
  const expenseData = {};
  const expenseExpect = {
    description: '', note: '', amount: 0, createAt: 0
  }; 
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseExpect
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseExpect);
    done();
  });
});