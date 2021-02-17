import React, { useState } from "react";
import classes from "./Form.module.css";
import Chip from "../Chip/Chip";
import * as actionTypes from "../../store/actionCreator";
import { connect } from "react-redux";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regexError, setRegexError] = useState("");
  const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  const profession = [
    {
      name: "Freelancer",
      bgColor: "rgba(241, 124, 43, 0.18)",
      color: "#f17c2b",
    },
    {
      name: "Job Seeker",
      bgColor: "rgba(150, 54, 143, 0.18)",
      color: "#96368f",
    },
    {
      name: "Enterpreneur",
      bgColor: "rgba(26, 150, 145, 0.18)",
      color: "#1a9691",
    },
    {
      name: "Momopreneur",
      bgColor: "rgba(230, 49, 131, 0.18)",
      color: "#e63183",
    },
    {
      name: "Internship Seeker",
      bgColor: "rgba(0, 128, 175, 0.17)",
      color: "#0080af",
    },
    {
      name: "Environmental Change Maker",
      bgColor: "rgba(231, 33, 44, 0.18)",
      color: "#e7212c",
    },
  ];

  return (
    <div className={classes.Container}>
      <p className={classes.PEEKaMEET_lets_you_n}>
        <span className={classes.text_style_1}>PEEKaMEET</span> lets you network
        more effectively to achieve your business and career goals
      </p>
      <br />
      <div className={classes.ChipsContainer}>
        {profession.map((p) => {
          return <Chip content={p.name} col={p.color} bgc={p.bgColor} />;
        })}
      </div>
      <br />
      <p className={classes.PEEKaMEET_lets_you_n}>
        Build and manage your network with PEEKaMEET
      </p>

      <p className={classes.Toppings}>Email</p>
      <input
        type="email"
        className={classes.Input}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (!regexEmail.test(email)) {
            setRegexError("* Please enter a valid email address!");
          } else {
            setRegexError("");
          }
        }}
      />
      {regexError ? <p className={classes.Error}>{regexError}</p> : null}
      <br />
      <br />
      <p className={classes.Toppings}>Password</p>
      <input
        type="password"
        className={classes.Input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      {/* <Link to='/profile' style={{ textDecoration: 'none' }}> */}
      <div
        className={classes.Button}
        onClick={() => {
          props.onClickHandler(email, password);
          setEmail("");
          setPassword("");
        }}
      >
        <div className={classes.SignIn}>Sign In</div>
      </div>
      {/* </Link> */}

      <div className={classes.BelowSignIn}>
        <div>
          <label>
            <input type="checkbox" />
            <span className={classes.CheckBox}></span>
          </label>
          <span className={classes.Toppings_Like} style={{ height: "18px" }}>
            Remember Me
          </span>
        </div>

        <div>
          <a
            href="http://localhost:3000/"
            className={classes.Toppings_Like}
            style={{ height: "18px" }}
          >
            Forgot Password
          </a>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span className={classes.Dont_have_an_account}>
          Dont have an account ?
        </span>
        <a href="http://localhost:3000/" className={classes.Sign_Up}>
          SignUp
        </a>
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
    onClickHandler: (email, password) =>
      dispatch(actionTypes.authenticate(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
