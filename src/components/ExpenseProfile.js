import React from 'react';
import {connect}  from 'react-redux';
import Avatar from '../components/Avatar';

export const ExpenseProfile = ({profile})=>(
    <div>
      <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">User Profile</h1> 
      </div>
      </div>
      <div className="content-container">
        <div className="profile">
          <ul>
            <li><Avatar heigh={150} width={200}/></li>
            <li><h3>Name</h3> {profile.displayName}</li>
            <li><h3>Email</h3> {profile.email}</li>
            <li><h3>ProviderId</h3> {profile.providerId}</li>
          </ul>
        </div>
      </div>
    </div>
);


const mapStateToProps = (state) =>{
  return {
    profile: state.profile
  };
};


export default connect(mapStateToProps)(ExpenseProfile);