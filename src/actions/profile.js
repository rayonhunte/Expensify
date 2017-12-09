
export const updateProfile = (profile) =>({
  type: 'PROFILE_UPDATE',
  profile
});

export const startProfile = (profile) =>{
  return (dispatch) =>{
    dispatch(updateProfile(profile[0]));
  };
};  