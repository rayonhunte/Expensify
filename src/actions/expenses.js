import uuid from 'uuid';


export const addExpense = ({
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

export const editExpense = (id, updates) => ({type: 'EDIT_EXPENSE', id, updates})

export const removeExpense = ({
  id = 0
} = {}) => ({type: 'REMOVE_EXPENSE', id})


