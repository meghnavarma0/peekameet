import React from 'react';
import classes from './Chip.module.css';

const Chip = props => {
	return (
		<div className={classes.MyChip} style={{ backgroundColor: props.bgc }}>
			<span className={classes.Inner} style={{ color: props.col }}>
				{props.content}
			</span>
		</div>
	);
};

export default Chip;
