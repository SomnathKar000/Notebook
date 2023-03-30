import React from "react";
import { useContext, useState } from "react";
import noteContext from "../Context/notes/NoteContext";

const AddNotes = () => {
  const context = useContext(noteContext);
  const { btn, addNote, setAlert } = context;
  const [noteN, setNoteN] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const noteSubmit = (e) => {
    e.preventDefault();
    addNote(noteN);
    setNoteN({
      title: "",
      description: "",
      tag: "",
    });
    setAlert("Note added", "success");
  };
  const onChange = (e) => {
    setNoteN({ ...noteN, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add a note</h2>
        <form onSubmit={noteSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              minLength={3}
              style={{
                backgroundColor: btn === "light" ? "white" : "#1a2027",
                color: btn === "light" ? "black" : "white",
              }}
              type="text"
              className="form-control"
              id="title"
              value={noteN.title}
              name="title"
              aria-describedby="emailHelp"
              required
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control "
              id="description"
              name="description"
              onChange={onChange}
              value={noteN.description}
              minLength={5}
              required
              style={{
                backgroundColor: btn === "light" ? "white" : "#1a2027",
                color: btn === "light" ? "black" : "white",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control "
              id="tag"
              name="tag"
              value={noteN.tag}
              onChange={onChange}
              style={{
                backgroundColor: btn === "light" ? "white" : "#1a2027",
                color: btn === "light" ? "black" : "white",
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
