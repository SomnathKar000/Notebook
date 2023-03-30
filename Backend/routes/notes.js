const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const { request } = require("express");

// Router 1: Get all notes using : get "/api/notes/fetchallnotes"  login required.
router.get(
  "/fetchallnotes",

  fetchuser,
  async (req, res) => {
    try {
      const notes = await Notes.find({ user: req.user.id });
      console.log(notes);
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred token");
    }
  }
);
// Router 2: create notes using : post "/api/notes/createnotes"  login required.

router.post(
  "/createnotes",
  fetchuser,
  [
    body("title", "Enter a valid title ").isLength({ min: 3 }),
    body("description", "Description must be atleast 7 charactors ").isLength({
      min: 7,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tag } = req.body;
    try {
      const notes = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await notes.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  }
);
// Router 3: Update notes using : post "/api/notes/updatenote/id:"  login required.

router.put(
  "/updatenote/:id",

  fetchuser,
  async (req, res) => {
    // create a new node object
    const { title, description, tag } = req.body;

    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    // find the node to be updated and update it

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return req.status(400).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
      return req.status(404).send("Not allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  }
);

// Router 4: Delete a notes using : post "/api/notes/deletenote/id:"  login required.

router.put(
  "/deletenote/:id",

  fetchuser,
  async (req, res) => {
    // find the node to be updated and delete it
    try {
      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(404).send({ erroe: "Not Found" });
      }
      if (req.user.id !== note.user.toString()) {
        return res.status(401).send({ erroe: "Not Allowed" });
      }
      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({ succes: "Note has been deleted" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Some error occurred" });
    }
  }
);

module.exports = router;
