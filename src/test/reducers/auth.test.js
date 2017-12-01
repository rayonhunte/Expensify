import authReducer from '../../reducers/auth';

let currentState;

beforeEach(()=>{
  let currentState = {};
}); 


test('should set login uid',()=>{
  const state = authReducer(currentState, {type:'LOGIN', uid:'123'});
  expect(state.uid).toBe('123');
});

test('should set logout empty object',()=>{
  const state = authReducer(currentState, {type:'LOGOUT'});
  expect(state).toEqual({});
});