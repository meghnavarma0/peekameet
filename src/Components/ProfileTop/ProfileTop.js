import ProfilePic from '../ProfilePic/ProfilePic';
import classes from './ProfileTop.module.css';
import img1 from '../../assets/img/play-circle-filled.svg';
import img2 from '../../assets/img/toggle_btn.svg';
import icon1 from '../../assets/img/message-icon.svg';
import icon2 from '../../assets/img/contact-icon.svg';
import Button from '../Button/Button';

const ProfileTop = () => {
	const ic1 = <img src={icon1} alt='message' />;
	const ic2 = <img src={icon2} alt='contact' />;
	return (
		<div className={classes.Profile}>
			<ProfilePic />

			<div className={classes.Name}>Meghna Varma</div>
			<div className={classes.Desig}>Intern</div>
			<div className={classes.Desig}>Daffodil</div>
			<div className={classes.Container}>
				<img
					src={img1}
					style={{ marginRight: '20px' }}
					alt='play-btn'
				/>
				<img src={img2} alt='toggle-btn' />
			</div>
			<div className={classes.Container}>
				<Button icon={ic1}>Message</Button>
				<Button icon={ic2}>Contact</Button>
			</div>
		</div>
	);
};

export default ProfileTop;
