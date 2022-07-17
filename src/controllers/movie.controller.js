import { Movie } from "../models/Movie.js";
import { v4 as uuid } from "uuid";

export const getAllMovies = async (req, res) => {
    const movies = await Movie.findAll();
    res.status(200).send(movies);
};

export const getMovieById = async (req, res) => {
    const {params} = req;
    console.log(params.id);
    const movie = await Movie.findOne({
        where: {id: params.id},
    });
    if (!movie) {
        return res.status(404).send({statusCode: 404,message:"Not found"});
    }
    return res.status(200).send(movie);
};
export const getMovieByGenre = (req, res) => {}
export const getMovieByActor = (req, res) => {}

export const updateMovieById = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const movie = await Movie.findOne({where:{id}});
    if (!movie) {
        return res.status(404).send({ statusCode: 404, message: "Not found" })
    }
    movie.set(body);
    await movie.save();
    res.status(200).send(movie);
};
export const deleteMovieById = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findOne({ where: { id }});
    if (!movie) {
        return res.status(400).send({ statusCode: 400, message: "User doesnot exist" });
    }
    movie.destroy();
    res.status(200).send({ message: "User deleted" });
};
export const createMovie = async (req, res) => {
    const {body} = req;
    const id = uuid();
    const movie = await Movie.create({id, ...body});
    res.status(201).send(movie);
};