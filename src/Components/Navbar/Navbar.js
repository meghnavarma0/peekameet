import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.Navbar}>
			<div className={classes.Title}>PEEKaMEET</div>
			<div className={classes.ButtonContainer}>
				<div className={classes.SignIn_Button}>
					<span className={classes.SignIn}>Sign In</span>
				</div>
				<div className={classes.SignUp_Button}>
					<span className={classes.SignUp}>Sign Up</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
