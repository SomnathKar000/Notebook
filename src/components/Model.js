import { forwardRef, useContext, useState, useEffect } from "react";
import noteContext from "../Context/notes/NoteContext";
const Model = forwardRef((props, ref) => {
  const context = useContext(noteContext);
  const { btn, updateNote } = context;
  const { id, title, description, tag } = props.note;
  const [note, setNote] = useState({
    title: title,
    description: description,
    tag: tag,
  });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const noteSubmit = (e) => {
    e.preventDefault();
    // console.log(note);
  };

  return (
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
                        value={title}
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
                        value={description}
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
                        value={tag}
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
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={noteSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Model;
