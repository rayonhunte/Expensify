import React from 'react';
import {shallow} from 'enzyme';
import ExpenseSummary, { ExpensesSummary } from '../../components/ExpensesSummary.js';



test('should render without expenses',()=>{
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});



test('should render with two expenses', ()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={94.34}/>);
  expect(wrapper).toMatchSnapshot();
});


test('should render with one expenses', ()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={94.34}/>);
  expect(wrapper).toMatchSnapshot();
});