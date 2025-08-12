import express from 'express';

const router = express.Router();
import {addNotes, deleteSingleNotes, getAllNotes,updateSingleNotes,getSingleNotes} from "../controllers/notesController.js"
// In-memory storage for notes
let notes = [];

// Create a new note
router.post('/', addNotes);

// Get all notes
router.get('/',getAllNotes);

// Get a single note by ID
router.get('/:id', getSingleNotes);

// Update a note by ID
router.put('/:id', updateSingleNotes);

// Delete a note by ID
router.delete('/:id', deleteSingleNotes);

export default router;