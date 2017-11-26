import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export  class EditExpensePage extends React.Component{
  removeExpense = (e)=>{
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push("/");
  }

  onSubmit= (expense)=>{
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }

  render(){
    return (
      <div>
        <ExpenseForm
          expense = {this.props.expense} 
          onSubmit={this.onSubmit}
        />
        <button onClick={this.removeExpense}>Remove Expense</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props)=>{
  return {
    expense: state.expenses.find((expense)=>{
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch) =>({
  editExpense: (id,expense) => dispatch(editExpense(id,expense)),
  removeExpense: (expense) =>dispatch(removeExpense(expense))
});
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);





// return (
//   <div>
//     <ExpenseForm 
//     expense = {props.expense}
//     onSubmit={(expense)=>{
//       props.dispatch(editExpense(props.expense.id, expense));
//       props.history.push("/");
//     }}/>
//     <button onClick={(e)=>{
//       props.dispatch(removeExpense({id: props.expense.id}));
//       props.history.push("/");
//     }}>Remove</button>
//   </div>
// );