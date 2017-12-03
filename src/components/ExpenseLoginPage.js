import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from '../actions/auth';

export const  ExpenseLoginPage = ({startLogin})=> {
  return (
      <div className="box-layout">
          <div className="box-layout__box">
            <h1 className="layout__title">React Expensify</h1>
            <p>Get your expenses in Order !!!</p>
            <button onClick={startLogin} className="button-layout">Login With Google</button>
          </div>
      </div>
    );
  
};

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(ExpenseLoginPage);