import {firebase, googleAuthProvider, facebookAuthProvider} from '../firebase/firebase';
import { toast } from 'react-toastify';
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
    return firebase.auth().signInWithPopup(googleAuthProvider).catch((error)=>{
      toast(error.message);
    });
  };
};

export const startFaceLogin = () =>{
  return () =>{
    return firebase.auth().signInWithPopup(facebookAuthProvider).catch((error)=>{
      toast(error.message);
    });
  };
};

export const startLogOut = () =>{
  return ()=>{
    return firebase.auth().signOut();
  };
};