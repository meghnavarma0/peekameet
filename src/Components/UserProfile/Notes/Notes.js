import classes from "./Notes.module.css";
import React, { useState } from "react";
import img from "../../../assets/img/edit.svg";
import Note from "./Note/Note";
import Footer from "../../Footer/Footer";
import Modal from "../../Modal/Modal";
import Backdrop from "../../Backdrop/Backdrop";

const Notes = () => {
  const [noteList, setNoteList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let [modal, backdrop] = showModal
    ? [
        <Modal
          setShowModal={setShowModal}
          setNoteList={setNoteList}
          noteList={noteList}
        />,
        <Backdrop />,
      ]
    : [null, null];

  const onClickHandler = () => {
    // const newNote = prompt("Please enter your note here!");
    setShowModal(true);
    // setNoteList([...noteList, newNote]);
  };
  return (
    <div className={classes.Notes}>
      <button onClick={onClickHandler} className={classes.Add_Notes}>
        <img src={img} alt="edit" />
        <span>Add Notes</span>
      </button>
      {modal}
      {backdrop}
      {noteList.map((note, index) => (
        <Note note={note.input} key={index} time={note.time} date={note.date} />
      ))}
      <Footer />
    </div>
  );
};

export default Notes;
