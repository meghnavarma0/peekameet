import browser from "../../../../assets/img/browser.svg";
import classes from "./Ending.module.css";
import Footer from "../../../Footer/Footer";
import { connect } from "react-redux";

const Ending = (props) => {
  const [email, website, businessPhone, businessAddress] = props.userData
    ? [
        props.userData.data[0].email,
        props.userData.data[0].website,
        props.userData.data[0].businessPhone,
        props.userData.data[0].businessAddress.split(" "),
      ]
    : [null, null, null, []];

  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <div className={classes.MainContainer}>
          <div className={classes.SubContainer}>
            <span className={classes.Icon}>
              <img src={browser} alt="browser" />
            </span>
            <span className={classes.Text}>{email}</span>
          </div>
          <div className={classes.SubContainer}>
            <span className={classes.Icon}>
              <img src={browser} alt="browser" />
            </span>
            <span className={classes.Text}>{website}</span>
          </div>
          <div className={classes.SubContainer}>
            <span className={classes.Icon}>
              <img src={browser} alt="browser" />
            </span>
            <span className={classes.Text}>{businessPhone}</span>
          </div>
        </div>
        <div className={classes.MainContainer}>
          <div className={classes.Topping}>Business Address</div>
          <div>
            {businessAddress.map((item, index) => (
              <div key={index} className={classes.Address}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(Ending);
