import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startRemoveExpense, startEditExpense} from '../actions/expenses';

export  class EditExpensePage extends React.Component{
  removeExpense = (e)=>{
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push("/dashboard");
  }

  onSubmit= (expense)=>{
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/dashboard");
  }

  render(){
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          whichPage = {'Save Expense'}
          expense = {this.props.expense} 
          onSubmit={this.onSubmit}
        />
        <button onClick={this.removeExpense} className="button button--secondary">Remove Expense</button>
      </div>
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

const mapDispatchToProps = (dispatch, props) =>({
  editExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
  removeExpense: (expense) =>dispatch(startRemoveExpense(expense))
});
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
