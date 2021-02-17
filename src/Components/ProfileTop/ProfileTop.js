import ProfilePic from "../ProfilePic/ProfilePic";
import classes from "./ProfileTop.module.css";
import img1 from "../../assets/img/play-circle-filled.svg";
import img2 from "../../assets/img/toggle_btn.svg";
import icon1 from "../../assets/img/message-icon.svg";
import icon2 from "../../assets/img/contact-icon.svg";
import Button from "../Button/Button";
import { getData } from "../../store/actionCreator";
import { connect } from "react-redux";

const ProfileTop = (props) => {
  const ic1 = <img src={icon1} alt="message" />;
  const ic2 = <img src={icon2} alt="contact" />;
  if (props.isAuthenticated && !props.userData) {
    props.getUserData();
  }
  const [firstName, lastName, jobTitle, company] = props.userData
    ? [
        props.userData.data[0].firstName,
        props.userData.data[0].lastName,
        props.userData.data[0].jobTitle,
        props.userData.data[0].company,
      ]
    : [null, null];

  return (
    <div className={classes.Profile}>
      <ProfilePic />

      <div className={classes.Name}>{`${firstName} ${lastName}`}</div>
      <div className={classes.Desig}>{`${jobTitle}`}</div>
      <div className={classes.Desig}>{`${company}`}</div>
      <div className={classes.Container}>
        <img src={img1} style={{ marginRight: "20px" }} alt="play-btn" />
        <img src={img2} alt="toggle-btn" />
      </div>
      <div className={classes.Container}>
        <Button icon={ic1}>Message</Button>
        <Button icon={ic2}>Contact</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTop);
