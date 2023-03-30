import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNotes from "./AddNotes";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const history = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, btn, updateNote, setAlert } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [Enote, setEnote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });
  const openModel = async (note) => {
    console.log("Open Model");
    ref.current.click();
    setEnote({
      id: note._id,
      title: note.title,
      description: note.description,
      tag: note.tag,
    });
  };
  const ref = useRef(null);
  const refClose = useRef(null);

  const onChange = (e) => {
    setEnote({ ...Enote, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const noteSubmit = (e) => {
    // e.preventDefault();
    updateNote(Enote);
    refClose.current.click();
    setAlert("Note updated", "success");
  };

  return (
    <>
      <AddNotes />
      <div>
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{
                backgroundColor: btn === "light" ? "white" : "#121212",
                color: btn === "light" ? "black" : "white",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="container my-3">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                        <input
                          style={{
                            backgroundColor:
                              btn === "light" ? "white" : "#1a2027",
                            color: btn === "light" ? "black" : "white",
                          }}
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          aria-describedby="emailHelp"
                          onChange={onChange}
                          value={Enote.title}
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
                          value={Enote.description}
                          style={{
                            backgroundColor:
                              btn === "light" ? "white" : "#1a2027",
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
                          onChange={onChange}
                          value={Enote.tag}
                          style={{
                            backgroundColor:
                              btn === "light" ? "white" : "#1a2027",
                            color: btn === "light" ? "black" : "white",
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={noteSubmit}
                  disabled={
                    Enote.title.length < 3 || Enote.description.length < 5
                  }
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2 className="my-3">Your notes</h2>
        <div className="container">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes &&
          notes.map((note, index) => {
            return <Noteitem note={note} key={index} openModel={openModel} />;
          })}
      </div>
    </>
  );
};

export default Notes;
