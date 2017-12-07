import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { ToastContainer } from 'react-toastify';

const ExpenseDashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
    <ToastContainer 
      position="top-center"
      type="default"
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop={false}
      progressClassName="transparent-progress" 
      closeOnClick
      pauseOnHover
    />
  </div>
);

export default ExpenseDashboard;