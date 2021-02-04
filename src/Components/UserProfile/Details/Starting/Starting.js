import opening from '../../../../assets/img/openingInvertedCommas.svg';
import closing from '../../../../assets/img/closingInvertedCommas.svg';
import classes from './Starting.module.css';

const Starting = () => {
	return (
		<div>
			<div className={classes.Heading}>
				<img src={opening} alt='opening' className={classes.Commas} />{' '}
				Inspired by the world and everything it has to offer{' '}
				<img src={closing} alt='closing' className={classes.Commas} />
			</div>
			<p className={classes.Para}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
				deserunt at libero voluptates iure placeat repellendus excepturi
				velit earum saepe labore quibusdam quam qui et natus omnis
				perspiciatis quidem dolores, vitae dolore.
				<span style={{ color: '#1cb54f' }}> More</span>
			</p>
		</div>
	);
};

export default Starting;
