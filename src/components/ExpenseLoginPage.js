import React from 'react';
import {connect} from 'react-redux';
import { startLogin, startFaceLogin } from '../actions/auth';
import { ToastContainer } from 'react-toastify';

export const  ExpenseLoginPage = ({startLogin, startFaceLogin})=> {
  return (
      <div className="box-layout">
          <div className="box-layout__box">
            <h1 className="layout__title">React Expensify</h1>
            <p>Get your expenses in Order !!!</p>
            <button onClick={startLogin} className="button">Login With Google</button>
            <button onClick={startFaceLogin} className="button">Login With FaceBook</button>
          </div>
          <ToastContainer 
              position="top-center"
              type="default"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              progressClassName="transparent-progress" 
              closeOnClick
              pauseOnHover
             />
      </div>
    );
  
};

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=> dispatch(startLogin()), 
  startFaceLogin: ()=> dispatch(startFaceLogin())
});

export default connect(undefined, mapDispatchToProps)(ExpenseLoginPage);