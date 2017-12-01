import {firebase, googleAuthProvider} from '../firebase/firebase';
import {connect} from 'react-redux';

export const login = (uid) =>({
  type: 'LOGIN',
  uid
});

export const logout = () =>({
  type: 'LOGOUT' 
});


export const startLogin = () =>{
  return () =>{
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogOut = () =>{
  return ()=>{
    return firebase.auth().signOut();
  };
};