import classes from "./Note.module.css";
import img from "../../../../assets/img/options.svg";

const Note = ({ note, date, time }) => {
  return (
    <div className={classes.Note}>
      <div>
        <div>{note}</div>
        <div className={classes.DateAndTime}>
          <span>{time}</span>
          {", "}
          <span>{date}</span>
        </div>
      </div>
      <div className={classes.Options}>
        <img src={img} alt="options" />
      </div>
    </div>
  );
};

export default Note;
