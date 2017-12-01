import {login, logout} from '../../actions/auth';



test('should call login',()=>{
  const action = login('2345');
  expect(action).toEqual({
    type:'LOGIN',
    uid: '2345'
  });
});


test('should call logout', ()=>{
  const action = logout();
  expect(action).toEqual({
    type:'LOGOUT'
  });
});

