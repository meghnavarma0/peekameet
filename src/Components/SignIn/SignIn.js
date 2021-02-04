import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './SignIn.module.css';
import Image from '../Image/Image';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

const SignIn = () => {
	return (
		<div className={classes.Back}>
			<Navbar />
			<div className={classes.Mask}>
				<Image />
				<Form />
			</div>
			<Footer />
		</div>
	);
};

export default SignIn;
