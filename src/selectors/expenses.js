
// get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) =>{
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