import React from 'react';
import classes from './Button.module.css';

const Button = props => {
	return (
		<div className={classes.Button}>
			<span>{props.icon}</span>
			<span className={classes.Content}>{props.children}</span>
		</div>
	);
};

export default Button;
