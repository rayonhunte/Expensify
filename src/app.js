import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import  getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss';



const store = configureStore();



store.subscribe(()=>{
  const state = store.getState()
  console.log(getVisibleExpenses(state.expenses, state.filters))
})

console.log(store.getState());

store.dispatch(addExpense({description:'water bill'}));
store.dispatch(addExpense({description:'gas bill'}));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));


ReactDOM.render(<AppRouter/>, document.getElementById('app'))