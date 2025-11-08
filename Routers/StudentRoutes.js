import * as StudentController from "../controllers/StudentController.js";
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
// bookRoutes.post('/new', BookController.createBook);
// bookRoutes.put('/edit/:bookId', BookController.editBook);
// bookRoutes.delete('/delete/:bookId', BookController.deleteBook);

export default studentRoutes;