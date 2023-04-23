import React from "react";
import { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = process.env.REACT_APP_HOST;
  const noteArr = [];

  // Get all notes
  const getNotes = async () => {
    try {
      const responce = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await responce.json();
      setNotes(json);
    } catch (error) {
      //Some error occurred
    }
  };

  // Add a note
  const addNote = async (e) => {
    const { title, description, tag } = e;
    // Add Api Key
    const responce = await fetch(`${host}/api/notes/createnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await responce.json();

    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    const reference = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await reference.json();
    console.log(json);
    const newNote = notes.filter((e) => {
      return e._id !== id;
    });
    setNotes(newNote);
    setAlert("Node deleted", "success");
  };

  // Update a note
  const updateNote = async (e) => {
    const { id, title, description, tag } = e;
    // Add Api Key
    const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await responce.json();
    const newNote = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  const [notes, setNotes] = useState(noteArr);
  const [btn, setBtn] = useState("light");
  const [alert, editAlert] = useState(null);

  const setAlert = (msg, type) => {
    editAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      editAlert(null);
    }, 1500);
  };
  const [styleCss, setStyle] = useState({
    clour: "black",
    backgroundColor: "white",
  });
  const changeMode = () => {
    if (btn === "light") {
      setStyle({
        colour: "white",
        backgroundColor: "#1a2027",
      });
      setBtn("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      setAlert("Dark mode enabled", "success");
    } else {
      setStyle({
        colour: "black",
        backgroundColor: "white",
      });
      setBtn("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setAlert("Light mode enabled", "success");
    }
  };

  return (
    <NoteContext.Provider
      value={{
        getNotes,
        notes,
        addNote,
        deleteNote,
        updateNote,
        btn,
        setBtn,
        styleCss,
        setStyle,
        changeMode,
        alert,
        setAlert,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
