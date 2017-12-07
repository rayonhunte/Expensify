import database from '../firebase/firebase';
import {toast} from 'react-toastify';

export const addExpense = (expense) => ({type: 'ADD_EXPENSE', expense: expense});

export const editExpense = (id, updates) => ({type: 'EDIT_EXPENSE', id, updates});

export const removeExpense = ({
  id = 0
} = {}) => ({type: 'REMOVE_EXPENSE', id});

export const setExpenses = (expenses) => ({type: 'SET_EXPENSES', expenses});

export const startRemoveExpense = ({id}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({id: id}));
        toast("Expense Removed !!!");
      })
      .catch((error) => {
        console.log(error);
        toast(error.message);
      });
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createAt = 0
    } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createAt
    };
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({
          ...expense,
          id: ref.key
        }));
      })
      .catch((error) => {
        console.log(error);
        toast(error.message);
      });
  };
};

export const startSetExpenses = () => {
  const expenses = [];
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        snapshot.forEach(childSnap => {
          expenses.push({
            id: childSnap.key,
            ...childSnap.val()
          });
        });
        dispatch(setExpenses(expenses));
      })
      .catch((error) => {
        console.log(error);
        toast(error.message);
      });
  };
};

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update({
        ...updates
      })
      .then(() => {
        dispatch(editExpense(id, updates));
        toast("Expense Updated !!!");
      })
      .catch((error) => {
        console.log(error);
        toast(error.message);
      });
  };
};