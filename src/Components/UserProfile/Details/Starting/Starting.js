import opening from "../../../../assets/img/openingInvertedCommas.svg";
import closing from "../../../../assets/img/closingInvertedCommas.svg";
import classes from "./Starting.module.css";
import { connect } from "react-redux";

const Starting = (props) => {
  const [tagline, bio] = props.userData
    ? [props.userData.data[0].tagline, props.userData.data[0].bio]
    : [null, null];

  return (
    <div>
      <div className={classes.Heading}>
        <img src={opening} alt="opening" className={classes.Commas} /> {tagline}
        <img src={closing} alt="closing" className={classes.Commas} />
      </div>
      <p className={classes.Para}>
        {bio}
        <span style={{ color: "#1cb54f" }}> More</span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(Starting);
