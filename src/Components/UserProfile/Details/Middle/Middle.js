import classes from "./Middle.module.css";
import Chip from "../../../Chip/Chip";
import { connect } from "react-redux";

const colors = [
  {
    color: "#f17c2b",
    bgColor: "rgba(241, 124, 43, 0.18)",
  },
  {
    color: "#96368f",
    bgColor: "rgba(150, 54, 143, 0.18)",
  },
  {
    color: "#1a9691",
    bgColor: "rgba(26, 150, 145, 0.18)",
  },
  {
    color: "#e63183",
    bgColor: "rgba(230, 49, 131, 0.18)",
  },
  {
    color: "#0080af",
    bgColor: "rgba(0, 128, 175, 0.17)",
  },
];

const Middle = (props) => {
  const [
    industry,
    organisationGroups,
    interestActivities,
    alumni,
    languages,
  ] = props.userData
    ? [
        props.userData.data[0].industry,
        props.userData.data[0].organisationGroups,
        props.userData.data[0].interestActivities,
        props.userData.data[0].alumni,
        props.userData.data[0].languages,
      ]
    : [[], [], [], [], []];
  return (
    <div className={classes.MainContainer}>
      <div>
        <div className={classes.Topping}>{"Industry(s)"}</div>
        <div className={classes.ChipContainer}>
          {industry.map((item, index) => (
            <Chip
              key={index}
              content={item}
              col={colors[0].color}
              bgc={colors[0].bgColor}
            />
          ))}
        </div>
      </div>
      <div>
        <div className={classes.Topping}>Organizations and Groups</div>
        <div className={classes.ChipContainer}>
          {organisationGroups.map((item, index) => (
            <Chip
              key={index}
              content={item}
              col={colors[1].color}
              bgc={colors[1].bgColor}
            />
          ))}
        </div>
      </div>
      <div>
        <div className={classes.Topping}>Interests and Activities</div>
        <div className={classes.ChipContainer}>
          {interestActivities.map((item, index) => (
            <Chip
              key={index}
              content={item}
              col={colors[2].color}
              bgc={colors[2].bgColor}
            />
          ))}
        </div>
      </div>
      <div>
        <div className={classes.Topping}>Alumni</div>
        <div className={classes.ChipContainer}>
          {alumni.map((item, index) => (
            <Chip
              key={index}
              content={item}
              col={colors[3].color}
              bgc={colors[3].bgColor}
            />
          ))}
        </div>
      </div>
      <div>
        <div className={classes.Topping}>Languages</div>
        <div className={classes.ChipContainer}>
          {languages.map((item, index) => (
            <Chip
              key={index}
              content={item}
              col={colors[4].color}
              bgc={colors[4].bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(Middle);
