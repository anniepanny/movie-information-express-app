import { Router } from "express";
import {
  createMovie,
  deleteMovieById,
  getAllMovies,
  getMovieByActor,
  getMovieByGenre,
  getMovieById,
  updateMovieById,
} from "../controllers/movie.controller.js";
export const router = Router();
router.get("/movies", getAllMovies);
router.get("/movies/:id", getMovieById);
router.get("/movies/:genre_id", getMovieByGenre);
router.get("/movies/:actor_id", getMovieByActor);

router.post("/movies", createMovie);
router.put("/movies/:id", updateMovieById);
router.delete("/movies/:id", deleteMovieById);
