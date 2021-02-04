import classes from './Footer.module.css';
import img1 from '../../assets/img/instagram-fill.jpg';
import img2 from '../../assets/img/youtube-fill.svg';
import img3 from '../../assets/img/facebook-box-fill.svg';
import img4 from '../../assets/img/twitter-fill.svg';

const Footer = () => {
	return (
		<div className={classes.Footer}>
			<span className={classes.Container}>
				<span className={classes.Bottoms}>Follow Us:</span>
				<img
					src={img1}
					alt='Instagram'
					style={{
						height: '30px',
						width: '30px'
					}}
				/>

				<img
					src={img2}
					alt='Youtube'
					style={{
						height: '30px',
						width: '30px'
					}}
				/>
				<img
					src={img3}
					alt='Facebook'
					style={{
						height: '30px',
						width: '30px'
					}}
				/>
				<img
					src={img4}
					alt='Twitter'
					style={{
						height: '30px',
						width: '30px'
					}}
				/>
			</span>
			<span className={classes.Bottoms}>FAQs</span>
			<span className={classes.Bottoms}>Terms {'&'} Conditions</span>
			<span className={classes.Bottoms}>Privacy Policy</span>
			<span className={classes.Bottoms}>About Us</span>
			<span className={classes.Bottoms}>Press</span>
			<span className={classes.Bottoms}>Contact Us</span>
			<span className={classes.Bottoms}>Perks</span>
			<span className={classes.Bottoms}>Blog</span>
		</div>
	);
};

export default Footer;
