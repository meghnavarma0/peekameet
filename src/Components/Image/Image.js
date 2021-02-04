import React from 'react';
import classes from './Image.module.css';
import img1 from '../../assets/img/group-18.png';

const Image = () => {
	return (
		<div class={classes.Picture}>
			<img src={img1} alt='Group-18' />
		</div>
	);
};

export default Image;
