import {setTextFilter, 
  sortByAmount, 
  sortByDate, 
  setStartDate, 
  setEndDate} from '../../actions/filters';
import moment from 'moment';


test('should setup text filter action object',()=>{
  const action = setTextFilter('cool')
  expect(action).toEqual({
    type:'SET_TEXT',
    text: 'cool'
  }) 
})

test('should setup text filter action object',()=>{
  const action = setTextFilter('')
  expect(action).toEqual({
    type:'SET_TEXT',
    text: ''
  }) 
})


test('should setup sortByAmount action object',()=>{
   const action = sortByAmount()
   expect(action).toEqual({
     type:'SORT_BY_AMOUNT'
   })
})

test('should setup sortByDate action object', ()=>{
  const action = sortByDate()
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  })  
})

test('should setup set start date object', ()=>{
   const action = setStartDate(moment(0))
   expect(action).toEqual({
     type:'SET_START_DATE',
     startDate:moment(0)
   })  
})

test('should setup set end date object', ()=>{
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)
  })
})