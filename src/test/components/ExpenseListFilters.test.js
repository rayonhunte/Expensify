import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters , altFilters} from  '../fixtures/filters';
import moment from 'moment';

let history, wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(()=>{
  history = {push: jest.fn()};
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper =  shallow(<ExpenseListFilters  
  history={history}
  filters={filters}
  setTextFilter={setTextFilter}
  sortByAmount={sortByAmount}
  sortByDate={sortByDate}
  setStartDate={setStartDate}
  setEndDate={setEndDate}
  />);
});


test('should render ExpenseListFilter correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListFilter with altFilters correctly', ()=>{
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});


test('should handel text change',()=>{
  const value = 'Gas';
  wrapper.find('input').simulate('change',{
    target:{value}
  });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', ()=>{
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change',{
    target: {value}
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', ()=>{
  const value = 'amount';
  wrapper.find('select').simulate('change',{
    target: {value}
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handel date change', ()=>{
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handel date focus changes', ()=>{
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});