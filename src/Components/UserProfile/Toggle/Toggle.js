import React, { useState } from 'react';
import classes from './Toggle.module.css';
import Details from '../Details/Details';
import Notes from '../Notes/Notes';

const Toggle = () => {
	const [details, setDetails] = useState(true);
	let display = details ? <Details /> : <Notes />;
	let detailsClass = details
		? [classes.Contents, classes.active].join(' ')
		: classes.Contents;
	let notesClass = !details
		? [classes.Contents, classes.active].join(' ')
		: classes.Contents;

	return (
		<div>
			<div className={classes.Container}>
				<span className={detailsClass} onClick={() => setDetails(true)}>
					Details
				</span>
				<span className={notesClass} onClick={() => setDetails(false)}>
					Notes
				</span>
			</div>
			<div>{display}</div>
		</div>
	);
};

export default Toggle;
