import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const myStyle = {
    background: props.bgc,
    width: props.width,
    height: props.height,
  };
  return (
    <div className={classes.Button} style={myStyle} onClick={props.onClick}>
      {props.icon ? <span>{props.icon}</span> : null}
      <span className={classes.Content} style={{ color: props.col }}>
        {props.children}
      </span>
    </div>
  );
};

export default Button;
