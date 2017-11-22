import {createStore} from 'redux';

// dif decon 

// const add = ({a, b},c) =>{
//   return a + b + c;
// }

// console.log(add({a:1, b:12}))

// action generators 


const incrementCount = ({incrementBy = 1} ={})=> (
  {
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}={})=>({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = ({resetBy = 0} ={})=>({
  type:'RESET',
  resetBy
})
const setCount = ({setBy = 0} = {}) =>({
 type:'SET',
 setBy
})
// Reducers
//1. pure functions
//2 never change state or action
const countReducer = (state={count:0}, action)=>{
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: action.resetBy
      }
    case 'SET':
     return {
        count: action.setBy
      }
    default:
      return state;
  }
  
  }
// create redux store
const store = createStore(countReducer);


const unsub = store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(incrementCount());

// unsubscribe
// unsub();

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(incrementCount({incrementBy:14}));

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(resetCount({resetBy:20}));

store.dispatch(resetCount());

store.dispatch(setCount({setBy:101}))

