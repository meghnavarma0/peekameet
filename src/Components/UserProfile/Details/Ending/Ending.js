import browser from '../../../../assets/img/browser.svg';
import classes from './Ending.module.css';
import Footer from '../../../Footer/Footer';
const Ending = () => {
	return (
		<div>
			<div style={{ marginBottom: '100px' }}>
				<div className={classes.MainContainer}>
					<div className={classes.SubContainer}>
						<span className={classes.Icon}>
							<img src={browser} alt='browser' />
						</span>
						<span className={classes.Text}>j.ganies@gmail.com</span>
					</div>
					<div className={classes.SubContainer}>
						<span className={classes.Icon}>
							<img src={browser} alt='browser' />
						</span>
						<span className={classes.Text}>www.goldbrands.com</span>
					</div>
					<div className={classes.SubContainer}>
						<span className={classes.Icon}>
							<img src={browser} alt='browser' />
						</span>
						<span className={classes.Text}>555 444 1234</span>
					</div>
				</div>
				<div className={classes.MainContainer}>
					<div className={classes.Topping}>Business Address</div>
					<div>
						<div className={classes.Address}>A Digital Agency</div>
						<div className={classes.Address}>123 Sycamore Dr</div>
						<div className={classes.Address}>
							Torington CT, 06790
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Ending;
