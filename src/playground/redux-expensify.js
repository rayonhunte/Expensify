import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// action generator

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }

})


const editExpense = (id, updates) =>({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const removeExpense = ({id=0}={})=>({
  type: 'REMOVE_EXPENSE',
  id
})

const setTextFilter = (text ='')=>({
  type: 'SET_TEXT',
  text
})

const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) =>({
  type:'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) =>({
  type: 'SET_END_DATE',
  endDate
})
//expenses reducer set default states
const expensesReducerDefault = []

const filterReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

// create reducers
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
         if(expense.id === action.id){
            return {
              ...expense,
              ...action.updates
            }
         }else{
           return expense
         }
       })
    default:
      return state;
  }
}

const filterReducer = (state = filterReducerDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT':
    return {
      ...state,
      text: action.text
    }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= startDate;;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch 
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createAt < b.createAt ? 1 : -1
    } 
    if(sortBy === 'amount'){
      return a.amount < b.amount ? 1: -1
    }
  })
}

//store creation with reducers

const store = createStore(combineReducers({expenses: expensesReducer, filters: filterReducer}));

store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
})

const {expense} = store.dispatch(addExpense({description:'Rent', amount: 2000, createAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 700, createAt: -1000}));

console.log(expense.id);


//store.dispatch(removeExpense({id: expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {
//   amount:500
// }));

//store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());


//store.dispatch(setStartDate(2000))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(999))

const demoState = {
  expenses: [
    {
      id: 1,
      description: 'where is my rent',
      note: 'this could be big with all these notes',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}


