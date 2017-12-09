import React from 'react';
import {connect}  from 'react-redux';
import {Link} from 'react-router-dom';

const Avatar = ({profile})=>(
  <div>
    <Link to="/profile">
      <img className="avatar" src={profile.photoURL} height="60" width="70"/>
    </Link>
  </div>
);

const mapStateToProps = (state) =>{
  return {
    profile: state.profile
  };
};
  
export default connect(mapStateToProps)(Avatar);