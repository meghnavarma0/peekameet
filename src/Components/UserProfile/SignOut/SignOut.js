import classes from "./SignOut.module.css";
import { connect } from "react-redux";
const SignOut = (props) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.SignOut_Button} onClick={props.onClickHandler}>
        <span className={classes.SignOut}>Sign Out</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: () => dispatch({ type: "SIGN_OUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
