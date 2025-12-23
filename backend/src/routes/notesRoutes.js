import express from 'express';
import { deleteNote, fetchAllNotes, updateNote, createNote, getNoteById } from '../controllers/noteController.js';

const router = express.Router();

router.get("/", fetchAllNotes);

router.get("/:id", getNoteById);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);


export default router;