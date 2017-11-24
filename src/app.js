import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import  getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();



store.subscribe(()=>{
  const state = store.getState()
  console.log(getVisibleExpenses(state.expenses, state.filters))
})

console.log(store.getState());

store.dispatch(addExpense({description:'water bill', amount:700}));
store.dispatch(addExpense({description:'gas bill', createdAt:100}));
store.dispatch(addExpense({description:'rent', amount:100}));
//store.dispatch(setTextFilter('bill'));
//store.dispatch(setTextFilter('water'));

const jsx = (
  <Provider store={store}>
    <AppRouter/> 
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))