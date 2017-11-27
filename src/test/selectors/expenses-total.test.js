import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0',()=>{
  const result = selectExpenseTotal([]);
  expect(result).toBe(0);
});

test('should return single total', ()=>{
  const result = selectExpenseTotal([expenses[0]]);
  expect(result).toBe(195);
});


test('should return total',()=>{
  const result = selectExpenseTotal(expenses);
  expect(result).toBe(114195);
});