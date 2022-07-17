import { Router } from "express";

import {
  createGenre,
  deleteGenreById,
  getAllGenres,
  getGenreById,
  updateGenreById,
} from "../controllers/genre.controller.js";


export const router = Router();
router.get("/genres",getAllGenres);
router.get("/genres/:id", getGenreById);
router.post("/genres", createGenre);
router.put("/genres/:id", updateGenreById);
router.delete("/genres/:id", deleteGenreById);
