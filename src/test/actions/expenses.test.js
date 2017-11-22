import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('should setup remove expense action object',()=>{
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  })
})


test('should setup edit expense action object', ()=>{
  const action = editExpense('123abc',{note:'i will pay this bill'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates: {note:'i will pay this bill'}
  })
})


test('should setup add expense action object with provided values', ()=>{
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual(
    {
      type:'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    }
)
});

test('should setup add expense action object with default values', ()=>{
  const expenseDefault = {
    description:'',
    createAt:0,
    amount:0,
    note:""
  }
  const action = addExpense({});
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      ...expenseDefault,
      id:expect.any(String)
    }
  })  
})