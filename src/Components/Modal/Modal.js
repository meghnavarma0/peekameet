import React, { useState } from "react";
import classes from "./Modal.module.css";
import datePicker from "../../assets/img/datePicker.svg";
import timePicker from "../../assets/img/timePicker.svg";
import Button from "../Button/Button";

function Modal(props) {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  const timeRegex = /^[0-2][0-3]:[0-5][0-9]$/;
  const onSaveHandler = () => {
    if (!dateRegex.test(date)) {
      alert("Please enter date in valid dd/mm/yyyy format");
      setDate("");
      return;
    }
    if (!timeRegex.test(time)) {
      alert("Please enter time in valid HH:MM format");
      setTime("");
      return;
    }

    props.setNoteList([{ input, time, date }, ...props.noteList]);
    props.setShowModal(false);
  };

  const onCancelHandler = () => {
    props.setShowModal(false);
  };
  return (
    <div className={classes.Modal}>
      <nav className={classes.Nav}>Add Notes</nav>
      <div className={classes.Container}>
        <div className={classes.Date}>
          <div className={classes.Label}>Follow Up Date</div>
          <br />

          <input
            type="text"
            className={classes.Input}
            placeholder="dd/mm/yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span>
            <img src={datePicker} alt="datePicker" />
          </span>
        </div>

        <div className={classes.Date}>
          <div className={classes.Label}>Time</div>
          <br />

          <input
            type="text"
            className={classes.Input}
            placeholder="HH:MM"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <span>
            <img src={timePicker} alt="timePicker" />
          </span>
        </div>
      </div>

      <div className={classes.Date} style={{ width: "90%" }}>
        <div className={classes.Label}>Notes</div>
        <br />

        <input
          type="text"
          className={classes.Input}
          style={{ width: "100%" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className={classes.ButtonContainer}>
        <Button
          bgc="#ffffff"
          col="#a1a1a1"
          width="40%"
          height="36px"
          onClick={onCancelHandler}
        >
          Cancel
        </Button>

        <Button width="40%" height="36px" onClick={onSaveHandler}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default Modal;
