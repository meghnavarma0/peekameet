import classes from './ProfilePic.module.css';
import img from '../../assets/img/profile_pic.jpg';

const ProfilePic = () => {
	return <img className={classes.ProfilePic} src={img} alt="meghna's pic" />;
};

export default ProfilePic;
