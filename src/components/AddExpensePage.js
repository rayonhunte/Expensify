import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';



export class AddExpensePage extends React.Component {
 
  onSubmit = (expense) =>{
    this.props.startAddExpense(expense).then(()=>{
      this.props.history.push('/dashboard');
    });
    
  };
  
  render(){
    return (
    <div>
      <h1>Add Expense</h1> 
      <ExpenseForm whichPage={'Add'} onSubmit={this.onSubmit}/>
    </div>
  );
}

}


const mapDispatchToProps = (dispatch)=>({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))});

export default connect(undefined,mapDispatchToProps)(AddExpensePage);