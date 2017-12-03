import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';


export class ExpenseListFilters extends React.Component{
  state ={
    calendarFocused: null
  }
  onDatesChange = ({startDate, endDate})=>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused)=>{
    this.setState(()=>({
      calendarFocused
    }
    ));
  }
  onTextChange = (e)=>{
    this.props.setTextFilter(e.target.value);
  }
  onSortChange = (e) => {
      if(e.target.value !== 'date'){
        this.props.sortByAmount();
      }else{
        this.props.sortByDate();
      }
  }

  render(){
    return (
      <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input type="text" value={this.props.filters.text} 
            onChange={this.onTextChange} className="text-input"
            placeholder="Search Expenses"
            />
        </div>
        <div className="input-group__item">
         <select value = {this.props.filters.sortBy} onChange={this.onSortChange} className="select">
         <option value='date'>Date</option>
         <option value='amount'>Amount</option>
         </select>
        </div>
        <div className="input-group__tem">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    </div>
    );
  }
}

const mapStateProps = (state) =>{
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) =>({
  setTextFilter: (filterText) => dispatch(setTextFilter(filterText)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateProps, mapDispatchToProps)(ExpenseListFilters);