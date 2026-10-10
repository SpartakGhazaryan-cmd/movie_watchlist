import express from 'express'

import {getMovies,getMovie,createMovie,updateMovie,toggleWatched,deleteMovie} from "../controllers/moviesController.js";

import { checkMovie } from "../middlewares/checkMovie.js";


const moviesRouter = express.Router();


moviesRouter.get("/", getMovies);

moviesRouter.get("/:id", getMovie);

moviesRouter.post("/", checkMovie, createMovie);

moviesRouter.put("/:id", checkMovie, updateMovie);

moviesRouter.patch("/:id/watched", toggleWatched);

moviesRouter.delete("/:id", deleteMovie);


export default moviesRouter;
