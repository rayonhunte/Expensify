import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', ()=>{
  const state = filterReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy amount',()=>{
  const currentState = {
    text:'',
    startDate: undefined,
    endDate:undefined,
    sortBy: 'date'
  }
  const state = filterReducer(currentState,{type:'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})


test('should set sortBy date',()=>{
  const currentState = {
    text:'',
    startDate: undefined,
    endDate:undefined,
    sortBy: 'amount'
  }
  const state = filterReducer(currentState,{type:'SORT_BY_DATE'})
  expect(state.sortBy).toBe('date')  
})


test('should set startDate',()=>{
  const state = filterReducer(undefined,{type:'SET_START_DATE', startDate:moment().startOf('month')})
  expect(state.startDate).toEqual(moment().startOf('month'))  
})


test('should set  endDate',()=>{
  const state = filterReducer(undefined,{type:'SET_END_DATE', endDate:moment().endOf('month')})
  expect(state.endDate).toEqual(moment().endOf('month'))  
})

test('should set text filter',()=>{
  const text = filterReducer(undefined, {type:'SET_TEXT',text:'cool'})
  expect(text.text).toBe('cool')
})