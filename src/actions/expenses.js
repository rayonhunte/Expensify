import database from '../firebase/firebase';

export const addExpense = (expense) => (
  {
  type: 'ADD_EXPENSE',
  expense: expense
});

export const startAddExpense = (expenseData = {}) =>{
  return (dispatch)=>{
    const {
      description = '', note = '', amount = 0, createAt = 0
    } = expenseData;

    const expense = {description, note, amount, createAt};

    return database.ref('expenses').push(expense).then(
      (ref)=>{
        dispatch(addExpense(
          {
            ...expense,
            id: ref.key
          }
        ));
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  };
};

export const editExpense = (id, updates) => ({type: 'EDIT_EXPENSE', id, updates});

export const removeExpense = ({id = 0} = {}) => ({type: 'REMOVE_EXPENSE', id});

export const  setExpenses = (expenses) =>({
  type: 'SET_EXPENSES',
  expenses
});

export const startRemoveExpense = ({id})=>{
  return (dispatch)=>{
  return database.ref(`expenses/${id}`).remove().then(()=>{
    dispatch(removeExpense({id:id}));
  }).catch((error)=>{
    console.log(error);
  });
  };
};

export const startSetExpenses = ()=>{
  const expenses = [];
  return (dispatch)=>{
    return database.ref('expenses').once('value').then((snapshot)=>{
      snapshot.forEach(childSnap => {
          expenses.push(
            {
            id: childSnap.key,
            ...childSnap.val()
            }
          );
      });
     dispatch(setExpenses(expenses));
    }).catch((error)=>{
      console.log(error);
    });
  };
};