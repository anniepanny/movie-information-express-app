import { Actor } from "../models/Actor.js";
import { v4 as uuid } from "uuid";

export const getActorById = async (req, res) => {
  const { params } = req;
  console.log(params.id);
  const actor = await Actor.findOne({
    where: { id: params.id },
  });
  if (!actor) {
    return res.status(404).send({ statusCode: 404, message: "Not found" });
  }
  return res.status(200).send(actor);
};
export const getAllActors = async (req, res) => {
  const actors = await Actor.findAll();
  res.status(200).send(actors);
};
export const createActor = async (req, res) => {
  const { body } = req;
  const id = uuid();
  const actor = await Actor.create({ id, ...body });
  res.status(201).send(actor);
};
export const updateActorById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const actor = await Actor.findOne({ where: { id } });
  if (!actor) {
    return res.status(404).send({ statusCode: 404, message: "User not found" });
  }
  actor.set(body);
  await actor.save();
  res.status(200).send(actor);
};
export const deleteActorById = async (req, res) => {
  const { id } = req.params;
  const actor = await Actor.findOne({ where: { id } });
  if (!actor) {
    return res
      .status(400)
      .send({ statusCode: 400, message: "User doesnot exist" });
  }
  actor.destroy();
  res.status(204).send({ message: "User deleted" });
};
