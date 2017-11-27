import React from 'react';
import {shallow} from 'enzyme';
import ExpensesListItem from '../../components/ExpenseListItem';


const expense = {
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createAt: 0
}


test('should render expense item',()=>{
  const wrapper = shallow(<ExpensesListItem expense={expense}/>);
  expect(wrapper).toMatchSnapshot();
});