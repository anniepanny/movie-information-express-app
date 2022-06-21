import { Genre } from "../models/Genre.js";
import { v4 as uuid } from "uuid";

export const getGenreById = async (req, res) => {
    const {params} = req;
    console.log(params.id);
    const genre = await Genre.findOne({
        where: {id: params.id},    
});
if (!genre){
    return res.status(404).send({statusCode:404, message: "Not Found"});
}
return res.status(200).send(genre);
};
export const getAllGenres = async (req, res) => {
    const genres = await Genre.findAll();
    res.status(200).send(genres);
};
export const createGenre = async (req, res) => {
    const {body} = req;
    const id = uuid();
    const genre = await Genre.create({id,...body});
    res.status(201).send(genre);
};
export const updateGenreById = async(req, res) => {
    const {id} = req.params;
    const { body } = req;
    const genre = await Genre.findOne({where:{id}});
    if(!genre){
        return res.status(404).send({statusCode:404,message:"User not found"});
    }
    genre.set(body);
    await genre.save();
    res.status(200).send(genre);
};
export const deleteGenreById = async(req, res) => {
    const { id } = req.params;
    const genre = await Genre.findOne({ where: { id } });
    if (!genre) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "User doesnot exist" });
    }
    genre.destroy();
    res.status(200).send({ message: "User deleted" });
};
