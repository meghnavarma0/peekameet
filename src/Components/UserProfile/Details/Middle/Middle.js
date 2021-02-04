import classes from './Middle.module.css';
import Chip from '../../../Chip/Chip';

const colors = [
	{
		color: '#f17c2b',
		bgColor: 'rgba(241, 124, 43, 0.18)'
	},
	{
		color: '#96368f',
		bgColor: 'rgba(150, 54, 143, 0.18)'
	},
	{
		color: '#1a9691',
		bgColor: 'rgba(26, 150, 145, 0.18)'
	},
	{
		color: '#e63183',
		bgColor: 'rgba(230, 49, 131, 0.18)'
	},
	{
		color: '#0080af',
		bgColor: 'rgba(0, 128, 175, 0.17)'
	}
];

const Middle = () => {
	return (
		<div className={classes.MainContainer}>
			<div>
				<div className={classes.Topping}>{'Industry(s)'}</div>
				<div className={classes.ChipContainer}>
					<Chip
						content='Web Development'
						col={colors[0].color}
						bgc={colors[0].bgColor}
					/>
					<Chip
						content='Fine Art'
						col={colors[0].color}
						bgc={colors[0].bgColor}
					/>
				</div>
			</div>
			<div>
				<div className={classes.Topping}>Organizations and Groups</div>
				<div className={classes.ChipContainer}>
					<Chip
						content='IAW'
						col={colors[1].color}
						bgc={colors[1].bgColor}
					/>
					<Chip
						content='Denver Rugby'
						col={colors[1].color}
						bgc={colors[1].bgColor}
					/>
				</div>
			</div>
			<div>
				<div className={classes.Topping}>Interests and Activities</div>
				<div className={classes.ChipContainer}>
					<Chip
						content='Hiking'
						col={colors[2].color}
						bgc={colors[2].bgColor}
					/>
					<Chip
						content='Professional Speaking'
						col={colors[2].color}
						bgc={colors[2].bgColor}
					/>
					<Chip
						content='Guitar'
						col={colors[2].color}
						bgc={colors[2].bgColor}
					/>
				</div>
			</div>
			<div>
				<div className={classes.Topping}>Alumni</div>
				<div className={classes.ChipContainer}>
					<Chip
						content='Spark Colorado'
						col={colors[3].color}
						bgc={colors[3].bgColor}
					/>
					<Chip
						content='UC Technology'
						col={colors[3].color}
						bgc={colors[3].bgColor}
					/>
				</div>
			</div>
			<div>
				<div className={classes.Topping}>Languages</div>
				<div className={classes.ChipContainer}>
					<Chip
						content='English'
						col={colors[4].color}
						bgc={colors[4].bgColor}
					/>
					<Chip
						content='Spanish'
						col={colors[4].color}
						bgc={colors[4].bgColor}
					/>
					<Chip
						content='Hebrew'
						col={colors[4].color}
						bgc={colors[4].bgColor}
					/>
				</div>
			</div>
		</div>
	);
};

export default Middle;
