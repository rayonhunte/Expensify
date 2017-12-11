import React from 'react';
import {connect}  from 'react-redux';
import {Link} from 'react-router-dom';

const Avatar = ({profile, height, width})=>(
  <div>
    <Link to="/profile">
      <img className="avatar" src={profile.photoURL} height={height} width={width} border="5"/>
    </Link>
  </div>
);

const mapStateToProps = (state) =>{
  return {
    profile: state.profile
  };
};
  
export default connect(mapStateToProps)(Avatar);