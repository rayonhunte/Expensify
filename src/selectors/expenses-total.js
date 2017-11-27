
export default (expenses)=>{
  return expenses.map(expense =>{
    // get each amount from expense object  
    return expense.amount;
  }).reduce((sum, amount) => sum + amount, 0);
};
