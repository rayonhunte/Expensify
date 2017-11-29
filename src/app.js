import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import  getVisibleExpenses from './selectors/expenses';


import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/> 
  </Provider>
);

ReactDOM.render(<p>Loading Application</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
  ReactDOM.render(jsx, document.getElementById('app'));
}).catch((error)=>{
  console.log(error);
});


//ReactDOM.render(jsx, document.getElementById('app'));