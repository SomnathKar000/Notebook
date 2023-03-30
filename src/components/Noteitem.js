import React from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/NoteContext";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { styleCss, deleteNote } = context;
  const { note, openModel } = props;

  return (
    <div className="col-md-4 my-3">
      <div style={styleCss} className={`card `}>
        <i
          className="fa-solid fa-pen-to-square align-self-end m-2"
          onClick={() => {
            openModel(note);
          }}
        ></i>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>

        <i
          className="fa-solid fa-trash-can align-self-end m-2"
          onClick={() => {
            deleteNote(note._id);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Noteitem;
