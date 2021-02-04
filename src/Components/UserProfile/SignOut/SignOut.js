import classes from './SignOut.module.css';
import { Link } from 'react-router-dom';

const SignOut = () => {
	return (
		<div className={classes.Navbar}>
			<div className={classes.SignOut_Button}>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span className={classes.SignOut}>Sign Out</span>
				</Link>
			</div>
		</div>
	);
};

export default SignOut;
