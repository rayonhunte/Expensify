import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense ,addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense} from '../../actions/expenses';
import expenseReducer  from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);


beforeEach((done)=>{
  const expensesSetData = {};
  expenses.forEach(({id, description, note, amount, createAt})=>{
    expensesSetData[id] = {description, note, amount, createAt};
  });
  database.ref('expenses').set(expensesSetData).then(()=> done());
});

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

test('should setup expenses action with data',()=>{
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  });
});

test('should set expenses',()=>{
  const action = {
    type: 'SET_EXPENSES',
    expenses:[
      expenses[0]
    ]
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});


test('should fetch text expenses',(done)=>{
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });
  done();
});


test('should remove expense',(done)=>{
  const store = createMockStore({});
  store.dispatch(startRemoveExpense({id:expenses[0].id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
  });
  done();
});