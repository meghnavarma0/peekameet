import React from 'react';
import SignOut from './SignOut/SignOut';
import classes from './UserProfile.module.css';
import ProfileTop from '../ProfileTop/ProfileTop';
import Toggle from './Toggle/Toggle';

const UserProfile = () => {
	return (
		<div>
			<SignOut />
			<div className={classes.BackImage}></div>
			<ProfileTop />
			<Toggle />
		</div>
	);
};

export default UserProfile;
