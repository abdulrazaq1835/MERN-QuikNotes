import Note from "../models/Note.js";

/**
 * GET ALL NOTES (user wise)
 */
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * GET SINGLE NOTE BY ID
 */
export async function getNoteById(req, res) {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * CREATE NOTE
 */
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const newNote = await Note.create({
      title,
      content,
      user: req.user._id,
    });

    res.status(201).json({
      message: "Note created successfully",
      note: newNote,
    });
  } catch (error) {
    console.log("Error in createNotes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * UPDATE NOTE
 */
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.log("Error in updateNote:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * DELETE NOTE
 */
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNote:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
